import { useCallback, useEffect, useState } from 'react';
import { on } from "jetemit";
import { useDispatch } from "react-redux";

// redux
import placeActions from "../../../redux/place/actions";
import timeseriesActions from "../../../redux/timeseries/actions";

// helpers
import { ensureStateInitialized, getSetting, setSetting } from "../utilities/office-apis-helpers";
import { getGlobal } from "../commands/commands";
import loadOffice from "./loadOffice";

let fetchAction;

const useOfficeHook = (mainPageRendered) => {
    const [isOfficeInitialized, setOfficeInitialized] = useState<boolean>(false);
  const [hostIsExcel, setHostIsExcel] = useState<boolean>(false);
  const dispatch = useDispatch();
 
  useEffect (() => {
    console.log(`officeWrapper - mainPageRendered:${mainPageRendered}`);
    if (mainPageRendered) {
      loadOffice(() => {
        try {
          Office.onReady(() => {
            if (mainPageRendered) {
              const { host } = Office.context;
              const excel = Office.HostType.Excel;
              console.log(`host is: ${host}`);
              console.log("inside office.OnReady on officeWrapper");
              if (host === excel) {
                setHostIsExcel(true);
                ensureStateInitialized(false);
                setOfficeInitialized(true);
                console.log("office initialized");
              } else {
                fetchPlace({ identifier: "https://gid.is/City/Reykjavik" });
              }
            }
          });
        } catch (e) {
          console.error("failed to load office");
        }
      });
      on("EntityAdded", (entity) => {
        fetchEntity(entity);
      });
      on("SelectionChanged", () => {
        fetchEntityOnChange();
      });
    }
  }, [fetchEntity, fetchEntityOnChange, fetchPlace, mainPageRendered]);

  const getPlace = useCallback(
    (identifier: string) => {
      try {
        console.log(`fetching from officeWrapper, identifier: ${identifier}`);
        dispatch(placeActions.fetchPlaceDataStart(identifier));
        dispatch(timeseriesActions.fetchTimeseriesDataStart(identifier, "populationTotal"));
      } catch (e) {
        console.error(e);
      }
    },
    [dispatch]
  );

  const fetchPlace = useCallback(
    (entity: any) => {
      const delay = 500;
      clearTimeout(fetchAction);
      setTimeout(() => {
        const g = getGlobal() as any;
        getPlace(entity.identifier);
        if (g.state != null) {
          g.state.selectedEntity = entity;
        }
      }, delay);
    },
    [getPlace]
  );

  const fetchEntity = useCallback(
    (entity) => {
      console.log(`onEntityAdded in officeWrapper - ${JSON.stringify(entity)}`);
      const g = getGlobal() as any;
      if (entity.identifier !== "N/A" && g.state.selectedEntity.identifier !== entity.identifier) {
        fetchPlace(entity);
      }
      // g.state.selectedEntity.probability = entity.probability;
      // g.state.selectedEntity.name = entity.name;
      // setSetting(g.state.selectedEntity.cellAddress, JSON.stringify(g.state.selectedEntity))

      // Excel.run(ctx => {
      //     var sheet = ctx.workbook.worksheets.getActiveWorksheet().load();
      //       return ctx.sync().then(function () {
      //         var entity = g.state.selectedEntity;
      //         var cellRange = sheet.getRange(entity.cellAddress)

      //         if (entity.identifier !== 'N/A')
      //         {
      //             // cellRange.style = "Hyperlink";
      //             // cellRange.format.fill.color = "white"
      //             // let hyperlink = {
      //             //     textToDisplay: entity.identifier,
      //             //     address: "https://www.quicklookup.com?q=" + entity.identifier + "&probability=" + entity.probability,
      //             //     screenTip: "https://www.quicklookup.com?q=" + entity.identifier + "&probability=" + entity.probability
      //             //    };
      //             //   cellRange.hyperlink = hyperlink;

      //             //sheet.comments.add(cellRange, "Probability is " + entity.probability)
      //             getPlace(entity.identifier);
      //             //setIdentifier(id);

      //             console.log(entity.identifier);
      //         }
      //         else{
      //             cellRange.format.fill.color = "yellow"
      //         }
      //       });
      // }).catch(function (error) {
      //     console.log(error);
      // });
    },
    [fetchPlace]
  );

  const fetchEntityOnChange = useCallback(() => {
    const g = getGlobal() as any;
    Excel.run((ctx) => {
      const _rangeSelected = ctx.workbook.getSelectedRange().load();
      return ctx.sync().then(() => {
        try {
          console.log("before");
          const setting = getSetting(_rangeSelected.address);
          console.log("after");

          console.log(`setting for address${_rangeSelected.address} is ${JSON.stringify(setting)}`);
          if (setting != null && setting.identifier != null) {
            console.log(
              `setting and identifier is not null${setting.identifier}
               selectedIdentifier is ${g.state.selectedEntity.identifier}`
            );
            if (setting.identifier !== "N/A" && setting.identifier !== g.state.selectedEntity.identifier) {
              fetchPlace(setting);
            }
          }
        } catch (e) {
          console.error(e);
        }
      });
    }).catch((error) => {
      console.log(error);
    });
  }, [fetchPlace]);

  return { isOfficeInitialized, hostIsExcel }
}

export default useOfficeHook;