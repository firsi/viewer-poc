import { checkNull } from "./utils";

interface IDataProperties {
   name: string,
   key: string,
   value: Date | number | string
}

export function identifierListData(data): IDataProperties[] {
    return [
        {
          name: data.identifierList[0].name,
          key: "identifierList[0].value",
          value: checkNull(data.identifierList[0].value),
        },
        {
          name: data.identifierList[1].name,
          key: "identifierList[1].value",
          value: checkNull(data.identifierList[1].value),
        },
        {
          name: data.identifierList[2].name,
          key: "identifierList[2].value",
          value: checkNull(data.identifierList[2].value),
        },
        {
          name: data.identifierList[3].name,
          key: "identifierList[3].value",
          value: checkNull(data.identifierList[3].value),
        },
      ]
}

export function dateAndTimeData(data): IDataProperties[] {
    return [
        {
          name: "Month in text",
          key: "toDay_Day_Month_Text",
          value: checkNull(data?.toDay_Day_Month_Text),
        },
        {
          name: "Current month number in year",
          key: "toDay_Day_Month_Number",
          value: checkNull(data?.toDay_Day_Month_Number),
        },
        {
          name: "Full name of month in English",
          key: "toDay_Day_FullName_En",
          value: checkNull(data?.toDay_Day_FullName_En),
        },
        {
          name: "Full name of day in current culture",
          key: "toDay_Day_FullName_CurrentCulture",
          value: checkNull(data?.toDay_Day_FullName_CurrentCulture),
        },
        {
          name: "Day of year",
          key: "toDay_Day_Year_Number",
          value: checkNull(data?.toDay_Day_Year_Number),
        },
        {
          name: "Year",
          key: "toDay_Year_Number",
          value: checkNull(data?.toDay_Year_Number),
        },
        {
          name: "Time UTC 24h",
          key: "toDay_Time_UTC_24h",
          value: checkNull(data?.toDay_Time_UTC_24h),
        },
        {
          name: "Time GMT 24h",
          key: "toDay_Time_GMT_24h",
          value: checkNull(data?.toDay_Time_GMT_24h),
        },
        {
          name: "Time EST 24h",
          key: "toDay_Time_EST_24h",
          value: checkNull(data?.toDay_Time_EST_24h),
        },
        {
          name: "Time UTC 12h",
          key: "toDay_Time_UTC_12h",
          value: checkNull(data?.toDay_Time_UTC_12h),
        },
        {
          name: "Time GMT 12h",
          key: "toDay_Time_GMT_12h",
          value: checkNull(data?.toDay_Time_GMT_12h),
        },
        {
          name: "Time EST 12h",
          key: "toDay_Time_EST_12h",
          value: checkNull(data?.toDay_Time_EST_12h),
        },
        {
          name: "Time of sunrise",
          key: "toDay_Sun_Rise",
          value: checkNull(data?.toDay_Sun_Rise),
        },
        {
          name: "Time of sunset",
          key: "toDay_Sun_Set",
          value: checkNull(data?.toDay_Sun_Set),
        },
        {
          name: "Duration of sunslight",
          key: "toDay_Sun_Duration",
          value: checkNull(data?.toDay_Sun_Duration),
        },
        {
          name: "Daylight savings",
          key: "toDay_DaylightSavings",
          value: checkNull(data?.toDay_DaylightSavings),
        },
        {
          name: "Season",
          key: "toDay_Season",
          value: checkNull(data?.toDay_Season),
        },
        {
          name: "Zodiac",
          key: "toDay_Zodiac",
          value: checkNull(data?.toDay_Zodiac),
        },
      ];
}

export function demographicData(data): IDataProperties[] {
    return [
        {
            name: 'Demographics growth rate',
            key: 'demographicsGrowthRate',
            value: checkNull(data?.demographicsGrowthRate)
        }
    ]
}

export function eventsData(data): IDataProperties[] {
    return [
        {
            name: 'Start date',
            key: 'startDate',
            value: checkNull(data?.startDate) // TODO: Change startDate to DateTimeOffset https://github.com/RehanSaeed/Schema.NET/issues/169 
        },
        {
            name: 'Name',
            key: 'name',
            value: checkNull(data?.name)
        },
        {
            name: 'Description',
            key: 'description',
            value: checkNull(data?.description)
        },
        {
            name: 'Image',
            key: 'image',
            value: checkNull(data?.image)
        },
        {
            name: 'About',
            key: 'about',
            value: checkNull(data?.about)
        }
    ];
}

export function geolocationData(data): IDataProperties[]{
    return [
        {
          name: "Longitude",
          key: "longitude",
          value: checkNull(data?.longitude),
        },
        {
          name: "Latitude",
          key: "latitude",
          value: checkNull(data?.latitude),
        },
        {
          name: "StreetAddress",
          key: "geo.address.streetAddress",
          value: checkNull(data?.geo?.address?.streetAddress),
        },
        {
          name: "Google map",
          key: "hasMap",
          value: checkNull(data?.hasMap),
        },
        {
          name: "PostalCode",
          key: "geo.address.postalCode",
          value: checkNull(data?.geo?.address?.postalCode),
        },
        {
          name: "AddressCountry",
          key: "geo.address.addressCountry",
          value: checkNull(data?.geo?.address?.addressCountry),
        },
        {
          name: "Elevation",
          key: "geo.address.elevation",
          value: checkNull(data?.geo?.address?.elevation),
        },
      ]
}

export function mainTileData(data): IDataProperties[]{
   return [
        {
            name: 'Name',
            key: 'name',
            value: checkNull(data?.name)
        },
        {
            name: 'Alternate Name',
            key: 'alternateName',
            value: checkNull(data?.alternateName)
        },
        {
            name: 'Description',
            key: 'description',
            value: checkNull(data?.description)
        },
        {
            name: 'Disambiguating Description',
            key: 'disambiguatingDescription',
            value: checkNull(data?.disambiguatingDescription)
        },
        {
            name: 'Telephone',
            key: 'geo.address.telephone',
            value: checkNull(data?.geo?.address?.telephone)
        },
        {
            name: 'Email',
            key: 'geo.address.email',
            value: checkNull(data?.geo?.address?.email)
        },
        {
            name: 'FaxNumber',
            key: 'geo.address.faxNumber',
            value: checkNull(data?.geo?.address?.faxNumber)
        },
        {
            name: 'Url',
            key: 'url',
            value: checkNull(data?.url)
        },
        {
            name: 'Facebook',
            key: 'contactInfo_facebook',
            value: checkNull(data?.contactInfo_facebook)
        },
        {
            name: 'LinkedIn',
            key: 'contactInfo_linkedIn',
            value: checkNull(data?.contactInfo_linkedIn)
        },
        {
            name: 'Instagram',
            key: 'contactInfo_instagram',
            value: checkNull(data?.contactInfo_instagram)
        }
    ]
}

export function populationData(data): IDataProperties[]{
    return [
        {
          name: "Total population",
          key: "populationTotal",
          value: checkNull(data?.populationTotal),
        },
        {
          name: "Male population",
          key: "populationMale",
          value: checkNull(data?.populationMale),
        },
        {
          name: "Female population",
          key: "populationFemale",
          value: checkNull(data?.populationFemale),
        },
        {
          name: "Other population",
          key: "populationOther",
          value: checkNull(data?.populationOther),
        },
        {
          name: "Sentinels count",
          key: "demographicsCountSentinels",
          value: checkNull(data?.demographicsCountSentinels),
        },
        {
          name: "+85 count",
          key: "demographicsCount85Plus",
          value: checkNull(data?.demographicsCount85Plus),
        },
        {
          name: "Teens count",
          key: "demographicsCountTeens",
          value: checkNull(data?.demographicsCountTeens),
        },
      ]
}

export function upcomingSignificantDatesData(data): IDataProperties[]{
    return [
        {
            name: 'Date',
            key: 'upcommingSignificantDate_Date',
            value: checkNull(data?.upcommingSignificantDate_Date)
        },
        {
            name: 'Name',
            key: 'upcommingSignificantDate_Name_en',
            value: checkNull(data?.upcommingSignificantDate_Name_en)
        },
        {
            name: 'Name Current Culture',
            key: 'upcommingSignificantDate_Name_currentCulture',
            value: checkNull(data?.upcommingSignificantDate_Name_currentCulture)
        },
        {
            name: 'Description',
            key: 'upcommingSignificantDate_Description',
            value: checkNull(data?.upcommingSignificantDate_Description)
        },
        {
            name: 'Iconagraphy',
            key: 'upcommingSignificantDate_Day_Iconagraphy',
            value: checkNull(data?.upcommingSignificantDate_Day_Iconagraphy)
        }
    ]
}

export function upcomingSignificantDateInstanceData(data):IDataProperties[]{
   return [
        {
          name: "Date",
          key: "upcommingSignificantDate_Date",
          value: checkNull(data?.upcommingSignificantDate_Date),
        },
        {
          name: "Name english",
          key: "upcommingSignificantDate_Name_en",
          value: checkNull(data?.upcommingSignificantDate_Name_en),
        },
        {
          name: "Name current culture",
          key: "upcommingSignificantDate_Name_currentCulture",
          value: checkNull(data?.upcommingSignificantDate_Name_currentCulture),
        },
        {
          name: "Iconagraphy",
          key: "upcommingSignificantDate_Day_Iconagraphy",
          value: checkNull(data?.upcommingSignificantDate_Day_Iconagraphy),
        },
      ]
}

export function weatherDataProperties(data): IDataProperties[]{
  return  [
        {
            name: 'Temperature High Today',
            key: 'weather_Temperature_High_Today',
            value: checkNull(data?.weather_Temperature_High_Today)
        },
        {
            name: 'Temperature Low Today',
            key: 'weather_Temperature_Low_Today',
            value: checkNull(data?.weather_Temperature_Low_Today)
        },
        {
            name: 'Temperature High Tomorrow',
            key: 'weather_Temperature_High_Tomorrow',
            value: checkNull(data?.weather_Temperature_High_Tomorrow)
        },
        {
            name: 'Temperature Low Tomorrow',
            key: 'weather_Temperature_Low_Tomorrow',
            value: checkNull(data?.weather_Temperature_Low_Tomorrow)
        },
        {
            name: 'Temperature Low The Day After Tomorrow',
            key: 'weather_Temperature_Low_TheDayAfter_Tomorrow',
            value: checkNull(data?.weather_Temperature_Low_TheDayAfter_Tomorrow)
        },
        {
            name: 'Temperature High The Day After Tomorrow',
            key: 'weather_Temperature_High_TheDayAfter_Tomorrow',
            value: checkNull(data?.weather_Temperature_High_TheDayAfter_Tomorrow)
        },
        {
            name: 'Pressure',
            key: 'weather_Pressure',
            value: checkNull(data?.weather_Pressure)
        },
        {
            name: 'Humidity',
            key: 'weather_humidity',
            value: checkNull(data?.weather_humidity)
        },
        {
            name: 'weather_description',
            key: 'weather_description',
            value: checkNull(data?.weather_description)
        },
        {
            name: 'weather_Wind_Avg_Today',
            key: 'weather_Wind_Avg_Today',
            value: checkNull(data?.weather_Wind_Avg_Today)
        },
        {
            name: 'Rain Next 24h',
            key: 'weather_Rain_Next_24h',
            value: checkNull(data?.weather_Rain_Next_24h)
        },
    ]

}