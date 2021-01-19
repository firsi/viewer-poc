import { useEffect, useState } from "react"

const useGenericDataHook = (data, dataProperties, nestedArrays) => {
    const [dataSource, setDataSource] = useState([]);

  function pushValues(properties) {
    let arr = [];
    for (let i = 0; i < properties.length; i++) {
      if (nestedArrays) {
        if (nestedArrays.includes(properties[i].name) && typeof properties[i] === "object") {
          if (Array.isArray(properties[i].value)) {
            properties[i].value = properties[i].value.map((n) => 
               `${n.name  },` // TODO: Remove the trailing comma (,)
            );
          }
        }
      }

      arr.push({
        key: Math.random() + i,
        name: properties[i].name,
        value: properties[i],
        excelAction: [data.identifier, typeof properties[i].key === "string" ? properties[i].key : properties[i].name],
      });
    }
    return arr;
  }

  useEffect(() => {
    let ds = [];
    if (data) {
      if (Array.isArray(data)) {
        data.map((e) => {
          let properties = dataProperties(e);
         ds = [...ds, ...pushValues(properties)];
        });
      } else {
        let properties = dataProperties();
       ds = pushValues(properties);
      }

      setDataSource(ds);
    }
  }, [data]);

  return dataSource;
}

export default useGenericDataHook;