import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dataservice {

  constructor() { }
  UTN() {
    return [
      {
        id: 1,
        name: "7.5"
      },
      {
        id: 2,
        name: "8.5"
      },
      {
        id: 3,
        name: "10"
      },
      {
        id: 4,
        name: "12.5"
      }, {
        id: 5,
        name: "15"
      }
    ]
  }

  reheatData() {
    return [
      {
        id: 1,
        name: "YES",
        reheatid: 1

      },
      {
        id: 1,
        name: "NO",
        reheatid: 2


      },

      {
        id: 2,
        name: "YES",
        reheatid: 1

      },
      {
        id: 2,
        name: "NO",
        reheatid: 2

      },
      {
        id: 3,
        name: "YES",
        reheatid: 1

      },
      {
        id: 3,
        name: "NO",
        reheatid: 2

      },
      {
        id: 4,
        name: "YES",
        reheatid: 1

      },
      {
        id: 4,
        name: "NO",
        reheatid: 2

      },
      {
        id: 5,
        name: "YES",
        reheatid: 1

      },
      {
        id: 5,
        name: "NO",
        reheatid: 2

      },
    ]
  }

  voltage() {
    return [
      {

        voltage: "220V",
        voltageid: 1,
        reheatid: 1
      },
      {


        voltage: "460V",
        voltageid: 2,
        reheatid: 1
      },
      {


        voltage: "575V",
        voltageid: 3,
        reheatid: 1
      },
      {

        voltage: "220V",
        voltageid: 1,
        reheatid: 2
      },
      {


        voltage: "460V",
        voltageid: 2,
        reheatid: 2
      },
      {


        voltage: "575V",
        voltageid: 3,
        reheatid: 2
      },

    ]
  }
  table() {
    return [
      {
        voltageid: 1,
        reheatid: 1,
        parentId: 1,
        Compressor1230V: "ABG039RAA",
        Compressor2460V: "ABG039RAA",
        Compressor1_460V: "39,500 BTU/hr",
        Compressor2_460V: "39,500 BTU/hr",
        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",


      },
      {
        voltageid: 1,
        reheatid: 1,
        parentId: 2,

        Reference_Reheat_Coil: "48LC400200",
        LBTS_in: "38",
        height_in: "32",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "8.4",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "88.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.1905/0.1925 (Qty 1)",
        Distributor_ckts: "16",
        Distributor_Length_in: "24",
        Nozzle_orifice_dia: "0.221",

      }
      ,
      {
        voltageid: 1,
        reheatid: 1,
        parentId: 3,

        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 2)",
        Expansion_Device_1: "3/8" + "ID x 1/2" + "OD",
        Expansion_Device_2: "3/8" + "ID x 1/2" + "OD",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "90",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "84.5",
        Distributor_Cap_Tube_size: "0.1905/0.1925 (Qty 2)",
        Distributor_ckts: "8",
        Distributor_Length_in: "20",
        Nozzle_orifice_dia: "0.199",


      },
      {
        voltageid: 1,
        reheatid: 1,
        parentId: 4,

        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",


      }
      , {
        voltageid: 1,
        reheatid: 1,
        parentId: 5,

        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",


      },
      {
        voltageid: 1,
        reheatid: 2,
        parentId: 1,
        Motor_230V: "HD56JQ230",
        Motor_460V: "HD56JQ460",
        Motor_575V: "HD56JQ575",
        Stator: "48TM005556",
        Rotor: "48TM005558",
        Casing: "48TM005555",
        Min_speed: "250",
        Max_speed: "2000",
        _cfm_ton_1_speed: "1660",
        default_SVU_speed: "1560",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",


      },
      {
        voltageid: 2,
        reheatid: 2,
        parentId: 1,
        heading: "Manufacture and Part Number",
        Compressor_230: "ABG039RAA1",
        Compressor_capacity: "39,500BTU/hr",
        Heading2: "Expansion Device",
        Expansion_Device_Type_Qty: "TXV(QTy 1)",
        expansiondevice1: "1/2 ID x7/8OD"



      }, {
        voltageid: 2,
        reheatid: 1,
        parentId: 1,
        Compressor1460V: "Compressor 1 - 460V",
        Compressor2460V: "ABG039WAA",
        Compressor1_460V: "39,500 BTU/hr",
        Compressor2_460V: "39,500 BTU/hr",
        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",


      },
      {
        voltageid: 3,
        reheatid: 2,
        parentId: 2,
        Compressor1230V: "ABG039RAA",
        Compressor2460V: "ABG039RAA",
        Compressor1_460V: "39,500 BTU/hr",
        Compressor2_460V: "39,500 BTU/hr",
        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",



      },
      {
        voltageid: 3,
        reheatid: 1,
        parentId: 1,
        Compressor1575V: "ABG039TAA",
        Compressor2460V: "ABG039TAA",
        Compressor1_460V: "39,500 BTU/hr",
        Compressor2_460V: "39,500 BTU/hr",
        Reference_Reheat_Coil: "new",
        LBTS_in: "38",
        height_in: "24",
        rows: "2",
        tube_diameter: "5/16",
        ckts: "6",
        FPI: "18",
        surface_area_ft2: "6.3",
        Carrier_p_n_valve: "EF16JS212",
        Manufacturer_p_n_valve: "SB5D5C",
        Carrier_p_n_coil: "EF19XS020",
        Manufacturer_p_n_coil: "MKC-1TS-24/50-60",
        Expansion_Device_Type_Qty: "TXV (Qty 1)",
        Expansion_Device_1: "1/2" + "ID x 7/8" + "OD",
        Expansion_Device_2: "null",
        Expansion_Device_Size_1_Setting_Superheat_PSIG: "83.5",
        Expansion_Device_Size_2_Setting_Superheat_PSIG: "null",
        Distributor_Cap_Tube_size: "0.252/0.255 (Qty 1)",
        Distributor_ckts: "12",
        Distributor_Length_in: "22",
        Nozzle_orifice_dia: "0.221",




      },
      {
        eid: 2,
        name: "AHU"
      },
      {
        eid: 2,
        name: "RTU"
      },
      {
        eid: 2,
        name: "CCD"
      },
      {
        eid: 2,
        name: "INDY"
      },
      {
        eid: 3,
        name: "Montluel"
      },
      {
        eid: 3,
        name: "CIAT"
      }, {
        eid: 3,
        name: "Profroid"
      },
    ]
  }
}


