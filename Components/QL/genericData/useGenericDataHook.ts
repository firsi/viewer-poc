import { useCallback, useEffect, useState } from "react"
import { IDataProperties } from "types";

const useGenericDataHook = (data: any, dataProperties:(e?) => IDataProperties[], nestedArrays: Array<string>) :Array<any> => {
    const [dataSource, setDataSource] = useState([]);

  const pushValues = useCallback((properties) => {
    let arr = [];
    let propertiesCopy = [...properties];
    for (let i = 0; i < properties.length; i++) {
      if (nestedArrays) {
        if (nestedArrays.includes(properties[i].name) && typeof properties[i] === "object") {
          if (Array.isArray(properties[i].value)) {
            propertiesCopy[i].value = properties[i].value.map((n) => 
               `${n.name  },` // TODO: Remove the trailing comma (,)
            );
          }
        }
      }

      arr.push({
        key: Math.random() + i,
        name: properties[i].name,
        value: propertiesCopy[i],
        excelAction: [
          data.identifier, typeof properties[i].key === "string" ? 
          properties[i].key : properties[i].name
        ],
      });
    }
    return arr;
  }, [nestedArrays, data.identifier]);

  useEffect(() => {
    let ds = [];
    if (data) {
      if (Array.isArray(data)) {
         data.map((e) => {
          let properties = dataProperties(e);
          ds = [...ds, ...pushValues(properties)];
           return ds;
        });
      } else {
        let properties = dataProperties();
       ds = pushValues(properties);
      }

      setDataSource(ds);
    }
  }, [data, pushValues, dataProperties]);

  return dataSource;
}

export default useGenericDataHook;