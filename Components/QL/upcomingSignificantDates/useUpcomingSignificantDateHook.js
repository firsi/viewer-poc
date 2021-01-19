import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

// Icons
// TODO: Is this the best way to do this? See comment in GetIcon().
import observanceIcon from "@iso/assets/images/SpecialDays/observance.png";
// permutation icons
import religiousNationalHolliday from "@iso/assets/images/SpecialDays/permutations/religiousNationalHolliday.png";
import religiousSilentDay from "@iso/assets/images/SpecialDays/permutations/religiousSilentDay.png";

// Helpers
import { upcomingSignificantDateInstanceData } from "../../../lib/helpers/formatDataProperties";

const getIcon = (dayIconagraphy) => {
    switch (dayIconagraphy) {
      case "observantDay":
        // NOTE that there is an Image next compenent in the newest version of Next https://nextjs.org/docs/basic-features/image-optimization that we could point directly to.
        return [<img alt="" src={observanceIcon} />];
      case "relegiousSilentDay":
        return [<img alt="" src={religiousSilentDay} />];
      case "religiousNationalHoliday":
        return [<img alt="" src={religiousNationalHolliday} />];
      default:
    }
  }

const useUpcomingSignificantDateHook = () => {
    const [dataSource, setDataSource] = useState([]);
    const data = useSelector((state) => state.place.data);

    function pushValues(properties) {
        let date;
        let dayType;
        let nameEn;
        let nameCurrentCulture;
        let icon;
    
        for (let i = 0; i < properties.length; i++) {
          if (properties[i].key === "upcommingSignificantDate_Date") {
            date = properties[i].value;
          }
          if (properties[i].key === "upcommingSignificantDate_Day_Iconagraphy") {
            dayType = properties[i].value;
          }
          if (properties[i].key === "upcommingSignificantDate_Name_en") {
            nameEn = properties[i].value;
          }
          if (properties[i].key === "upcommingSignificantDate_Name_currentCulture") {
            nameCurrentCulture = properties[i].value;
          }
          if (properties[i].key === "upcommingSignificantDate_Day_Iconagraphy") {
            icon = getIcon(properties[i].value);
          }
        }
    
        let name = `${nameCurrentCulture} / ${nameEn}`;
    
        return {
          key: Math.random(),
          date,
          name,
          dayType,
          typeIcon: icon,
        };
      }
    
      useEffect(() => {
        let ds = [];
        if (data.upcommingSignificantDates) {
          data.upcommingSignificantDates.map((e) => {
            let properties = upcomingSignificantDateInstanceData(e);
            ds = [...ds, pushValues(properties)];
          });
    
          setDataSource(ds);
        }
      }, [data.upcommingSignificantDates]);
    
      return dataSource;
}

export default useUpcomingSignificantDateHook;