---
title: "swmmJSON"
metaTitle: "swmm files in JSON format"
metaDescription: "Specifications of the JSON formats for swmm files."
---

There are currently two specifications for EPA-SWMM (Environmental Protection Agency-Stormwater Management Model) files in JSON. The first is the Interface-Friendly Format (IF), and the second is the User-Friendly Format (UF). The UF is best for debugging and hand-writing the inp file. The IF is used by a swmm-js program when processing an input file. Both files should be capable of transpilation given a proper version number. In all cases where a UF json is different from an IF json, a string is used in place of an integer or floating point number.

```javascript
{
    "Title": [ str, ... ],
    "OPTIONS": {
        "FLOW_UNITS"            : int,      // FlowUnits        // FlowUnitWords[FlowUnits]
        "INFILTRATION"          : int,      // InfilModel       // InfilModelWords[InfilModel]
        "FLOW_ROUTING"          : int,      // RouteModel       // RouteModelWords[RouteModel]
        "START_DATE"            : float,    // StartDate        // StartDate
        "START_TIME"            : float,    // StartTime        // StartTime
        "END_DATE"              : float,    // EndDate          // EndDate
        "END_TIME"              : float,    // EndTime          // EndTime
        "REPORT_START_DATE"     : float,    // ReportStartDate  // ReportStartDate
        "REPORT_START_TIME"     : float,    // ReportStartTime  // ReportStartTime
        "SWEEP_START"           : int,      // SweepStart       // SweepStart
        "SWEEP_END"             : int,      // SweepEnd         // SweepStart
        "DRY_DAYS"              : float,    // StartDryDays     // StartDryDays
        "WET_STEP"              : int,      // WetStep          // WetStep
        "DRY_STEP"              : int,      // DryStep          // DryStep
        "REPORT_STEP"           : int,      // ReportStep       // ReportStep
        "RULE_STEP"             : int,      // RuleStep         // RuleStep
        "INERTIAL_DAMPING"      : int,      // InertDamping     // InertDampingWords[InertDamping]
        "ALLOW_PONDING"         : int,      // AllowPonding     // NoYesWords[AllowPonding]
        "SLOPE_WEIGHTING"       : int,      // SlopeWeighting   // NoYesWords[SlopeWeighting]
        "SKIP_STEADY_STATE"     : int,      // SkipSteadyState  // NoYesWords[SlopeWeighting]
        "IGNORE_RAINFALL"       : int,      // IgnoreRainfall   // NoYesWords[IgnoreRainfall]
        "IGNORE_SNOWMELT"       : int,      // IgnoreSnowmelt   // NoYesWords[IgnoreSnowmelt]
        "IGNORE_GROUNDWATER"    : int,      // IgnoreGwater     // NoYesWords[IgnoreGwater]
        "IGNORE_ROUTING"        : int,      // IgnoreRouting    // NoYesWords[IgnoreRouting]
        "IGNORE_QUALITY"        : int,      // IgnoreQuality    // NoYesWords[IgnoreQuality]
        "IGNORE_RDII"           : int,      // IgnoreRDII       // NoYesWords[IgnoreRDII]
        "NORMAL_FLOW_LIMITED"   : int,      // NormalFlowLtd    // NormalFlowWords[IgnoreRDII]
        "FORCE_MAIN_EQUATION"   : int,      // ForceMainEqn     // ForceMainEqnWords[ForceMainEqn]
        "LINK_OFFSETS"          : int,      // LinkOffsets      // LinkOffsetWords[LinkOffsets]
        "COMPATIBILITY"         : int,      // Compatibility    // Compatibility
        "ROUTING_STEP"          : int,      // RouteStep        // RouteStep
        "LENGTHENING_STEP"      : float,    // LengtheningStep  // LengtheningStep
        "MINIMUM_STEP"          : float,    // MinRouteStep     // MinRouteStep
        "THREADS"               : int,      // NumThreads       // NumThreads
        "VARIABLE_STEP"         : float,    // CourantFactor    // CourantFactor
        "MIN_SURFAREA"          : float,    // MinSurfArea      // MinSurfArea
        "MIN_SLOPE"             : float,    // MinSlope         // MinSlope      // MinSlope*100 in dialogs
        "MAX_TRIALS"            : int,      // MaxTrials        // MaxTrials      
        "HEAD_TOLERANCE"        : float,    // HeadTol          // HeadTol  
        "SYS_FLOW_TOL"          : float,    // SysFlowTol       // SysFlowTol  // SysFlowTol*100 in dialogs
        "LAT_FLOW_TOL"          : float,    // LatFlowTol       // LatFlowTol  // LatFlowTol*100 in dialogs
        "SURCHARGE_METHOD"      : int,      // SurchargeMethod  // SurchargeMethod
        "TEMPDIR"               : string    // TempDir          // TempDir
    },
    "Pattern": [
        {
            "ID"                : string,   // Pattern[i].ID
            "count"             : int,      // Pattern[i].count
            "factor"            : [ 
                float, ...                  // Pattern[i].factor[ii]
            ],
            "type"              : int       // Pattern[i].type
        }, ... xNobjects[TIMEPATTERN]
    ],
    "Tseries": [
        {
            "ID"                : string,   // Tseries[i].ID
            "curveType"         : int,      // Tseries[i].curveType
            "refersTo"          : int,      // Tseries[i].refersTo
            "dxMin"             : float,    // Tseries[i].dxMin
            "lastDate"          : float,    // Tseries[i].lastDate
            "x1"                : float,    // Tseries[i].x1
            "x2"                : float,    // Tseries[i].x2
            "y1"                : float,    // Tseries[i].y1
            "y2"                : float,    // Tseries[i].y2
            "file"              : {
                "name"          : string,   // Tseries[i].file.name
                "mode"          : int       // Tseries[i].file.mode
            },
            "Table"             : [
                {
                    "x"         : float,    // Tseries[i].Entry->x
                    "y"         : float     // Tseries[i].Entry->y
                }, ...
            ]
        }, ... xNobjects[TSERIES]
    ],
    "Evap": {
        "dryOnly"               : int,      // Evap.dryOnly
        "monthlyEvap"           : [ 
                                    float, x12  // Evap.monthlyEvap[i]
        ],
        "panCoeff"              : [ 
                                    float, x12  // Evap.panCoeff[i]
        ],
        "recoveryFactor"        : float,    // Evap.recoveryFactor
        "recoveryPattern"       : float,    // Evap.recoveryPattern
        "tSeries"               : int,      // Evap.tSeries
        "type"                  : int,      // Evap.type
        "rate"                  : int       // Evap.rate
    },
    "Adjust": {
        "rainFactor"            : float,    // Adjust.rainFactor
        "hydconFactor"          : float,    // Adjust.hydconFactor
        "temp"                  : [ 
                                    float, x12  // Adjust.temp[i]
        ],
        "evap"                  : [ 
                                    float, x12  // Adjust.evap[i]
        ],
        "rain"                  : [ 
                                    float, x12  // Adjust.rain[i]
        ],
        "hydcon"                : [ 
                                    float, x12  // Adjust.hydcon[i]
        ]
    },
    "Gage": [
        {
            "ID"                : string,       // Gage.ID
            "dataSource"        : int,          // Gage.dataSource
            "tSeries"           : int,          // Gage.tSeries
            "fname"             : string,       // Gage.fname
            "staID"             : string,       // Gage.staID
            "startFileDate"     : float,        // Gage.startFileDate
            "endFileDate"       : float,        // Gage.endFileDate
            "rainType"          : int,          // Gage.rainType
            "rainInterval"      : int,          // Gage.rainInterval
            "rainUnits"         : int,          // Gage.rainUnits
            "snowFactor"        : float,        // Gage.snowFactor
            "unitsFactor"       : float,        // Gage.unitsFactor
            "coGage"            : int           // Gage.coGage
        }, ... xNobjects[GAGE]
    ],
    "Temp": {
        "dataSource"            : int,          // Temp.dataSource
        "tSeries"               : int,          // Temp.tSeries
        "fileStartDate"         : float,        // Temp.fileStartDate
        "anglat"                : float,        // Temp.anglat
        "dtlong"                : float         // Temp.dtlong
    },
    "Fclimate": {
        "name"                  : string,       // Fclimate.name
        "mode"                  : int,          // Fclimate.mode
        "state"                 : int           // Fclimate.state
    },
    "Wind": {
        "type"                  : int,          // Wind.type
        "aws"                   : [ 
                                    float, x12  // Adjust.temp[i]
        ]
    },
    "Snow": {
        "snotmp"                : float,        // Snow.snotmp
        "tipm"                  : float,        // Snow.tipm
        "rnm"                   : float,        // Snow.rnm
        "adc"                   : [ 
                                    [
                                    float, x10  // Snow.adc[i][ii]
                                ], x2
        ]
    },
    "Subcatch": [
        {
            "ID"                    : string,       // Subcatch[i].ID
            "rptFlag"               : int,          // Subcatch[i].rptFlag
            "gage"                  : int,          // Subcatch[i].gage
            "outNode"               : int,          // Subcatch[i].outNode
            "outSubcatch"           : int,          // Subcatch[i].outSubcatch
            "infilModel"            : int,          // Subcatch[i].infilModel
            "infil"                 : int,          // Subcatch[i].infil
            "subArea"               : [
                    {
                        "routeTo"   : int,          // Subcatch[i].subArea[j].routeTo
                        "fOutlet"   : float,        // Subcatch[i].subArea[j].fOutlet
                        "N"         : float,        // Subcatch[i].subArea[j].N
                        "fArea"     : float,        // Subcatch[i].subArea[j].fArea
                        "dStore"    : float         // Subcatch[i].subArea[j].dStore
                }, ...
            ],
            "width"                 : float,        // Subcatch[i].width
            "area"                  : float,        // Subcatch[i].area
            "fracImperv"            : float,        // Subcatch[i].fracImperv
            "slope"                 : float,        // Subcatch[i].slope
            "curbLength"            : float,        // Subcatch[i].curbLength
            "initBuildup"           : [ 
                                        float, xNobjects[POLLUT]  // Subcatch[i].initBuildup[j]
            ],
            "landFactor"            : [
                {
                    "fraction"      : float,        // Subcatch[i].landFactor[j].fraction
                    "buildup"       : [ 
                                        float, xNobjects[POLLUT]  // Subcatch[i].landFactor[j].buildup[k]
                    ],
                    "lastSwept"      : float        // Subcatch[i].landFactor[j].lastSwept
                }, ... xNobjects[LANDUSE]
            ], 
            "groundwater"           : null | {
                "aquifer"           : int,          // Subcatch[i].groundwater->aquifer
                "node"              : int,          // Subcatch[i].groundwater->node
                "surfElev"          : float,        // Subcatch[i].groundwater->surfElev
                "a1"                : float,        // Subcatch[i].groundwater->a1
                "a2"                : float,        // Subcatch[i].groundwater->a2
                "a3"                : float,        // Subcatch[i].groundwater->a3
                "b1"                : float,        // Subcatch[i].groundwater->b1
                "b2"                : float,        // Subcatch[i].groundwater->b2
                "fixedDepth"        : float,        // Subcatch[i].groundwater->fixedDepth
                "nodeElev"          : float,        // Subcatch[i].groundwater->nodeElev
                "bottomElev"        : float,        // Subcatch[i].groundwater->bottomElev
                "waterTableElev"    : float,        // Subcatch[i].groundwater->waterTableElev
                "upperMoisture"     : float         // Subcatch[i].groundwater->upperMoisture
            }, 
            "gwLatFlowExpr"         : [ 
                {
                    "opcode"        : int,          // Subcatch[i].gwLatFlowExpr->opcode
                    "ivar"          : int,          // Subcatch[i].gwLatFlowExpr->ivar
                    "fvalue"        : float         // Subcatch[i].gwLatFlowExpr->fvalue
                }, ...
            ],
            "gwDeepFlowExpr"        : [ 
                {
                    "opcode"        : int,          // Subcatch[i].gwLatFlowExpr->opcode
                    "ivar"          : int,          // Subcatch[i].gwLatFlowExpr->ivar
                    "fvalue"        : float         // Subcatch[i].gwLatFlowExpr->fvalue
                }, ...
            ], 
            "snowpack"              : null | {
                "snowmeltIndex"     : int,          // Subcatch[i].snowpack->snowmeltIndex
                "fArea"             : [ 
                                        float, x3   // Subcatch[i].snowpack->fArea[j]
                ],
                "wsnow"             : [ 
                                        float, x3   // Subcatch[i].snowpack->wsnow[j]
                ],
                "fw"                : [ 
                                        float, x3   // Subcatch[i].snowpack->fw[j]
                ],
                "coldc"             : [ 
                                        float, x3   // Subcatch[i].snowpack->coldc[j]
                ],
                "ati"               : [ 
                                        float, x3   // Subcatch[i].snowpack->ati[j]
                ],
                "sba"               : [ 
                                        float, x3   // Subcatch[i].snowpack->sba[j]
                ],
                "awe"               : [ 
                                        float, x3   // Subcatch[i].snowpack->awe[j]
                ],
                "sbws"              : [ 
                                        float, x3   // Subcatch[i].snowpack->sbws[j]
                ],
                "imelt"             : [ 
                                        float, x3   // Subcatch[i].snowpack->imelt[j]
                ]
            },
            "nPervPattern"          : int,          // Subcatch[i].nPervPattern
            "dStorePattern"         : int,          // Subcatch[i].dStorePattern
            "infilPattern"          : int           // Subcatch[i].infilPattern

        }, ... xNobjects[SUBCATCH]
    ],
    "Node": [
        {
            "ID"                    : string,       // Node[i].ID
            "type"                  : int,          // Node[i].type
            "subIndex"              : int,          // Node[i].subIndex
            "rptFlag"               : int,          // Node[i].rptFlag
            "invertElev"            : float,        // Node[i].invertElev
            "initDepth"             : float,        // Node[i].initDepth
            "fullDepth"             : float,        // Node[i].fullDepth
            "surDepth"              : float,        // Node[i].surDepth
            "pondedArea"            : float,        // Node[i].pondedArea
            "extInflow"             : [ 
                {
                    "param"         : int,          // Node[i].extInflow->param
                    "type"          : int,          // Node[i].extInflow->type
                    "tSeries"       : int           // Node[i].extInflow->tSeries
                    "basePat"       : int           // Node[i].extInflow->basePat
                    "cFactor"       : float,        // Node[i].extInflow->cFactor
                    "baseline"      : float,        // Node[i].extInflow->baseline
                    "sFactor"       : float,        // Node[i].extInflow->sFactor
                    "extIfaceInflow": float         // Node[i].extInflow->extIfaceInflow
                }, ...
            ],
            "dwfInflow"             : [ 
                {
                    "param"         : int,          // Node[i].dwfInflow->param
                    "avgValue"      : float,        // Node[i].dwfInflow->avgValue
                    "patterns"      : [ 
                                        int, x4     // Node[i].dwfInflow->patterns[j]
                    ]
                }, ...
            ],
            "rdiiInflow"            : null | {
                "unitHyd"           : int,          // Node[i].dwfInflow->param
                "area"              : float         // Node[i].dwfInflow->avgValue
            },
            "treatment"             : null | {
                "treatType"         : int,          // Node[i].treatment->treatType
                "equation"          : [
                    {
                        "opcode"    : int,          // Node[i].treatment->equation->opcode
                        "ivar"      : int,          // Node[i].treatment->equation->ivar
                        "fvalue"    : float         // Node[i].treatment->equation->fvalue
                    }, ...
                ]
            },
        }, ...  xNobjects[NODE]
    ],
    "Infil": [
        {
            "horton"                : null | {
                "f0"                : float,        // horton_getInput(i, p)=>p[0]
                "fmin"              : float,        // horton_getInput(i, p)=>p[1]
                "Fmax"              : float,        // horton_getInput(i, p)=>p[2]
                "decay"             : float,        // horton_getInput(i, p)=>p[3]
                "regen"             : float         // horton_getInput(i, p)=>p[4]
            },
            "grnAmpt"               : null | {
                "S"                 : float,        // grnampt_getInput(i, p)=>p[0]
                "Ks"                : float,        // grnampt_getInput(i, p)=>p[1]
                "IMDmax"            : float         // grnampt_getInput(i, p)=>p[2]
            },
            "curveNum"              : null | {
                "Smax"              : float,        // grnampt_getInput(i, p)=>p[0]
                "regen"             : float,        // grnampt_getInput(i, p)=>p[1]
                "Tmax"              : float         // grnampt_getInput(i, p)=>p[2]
            }
        }, ... xNobjects[SUBCATCH]
    ],
    "Aquifer": [
        {
            "ID"                    : string,       // Aquifer[i].ID
            "porosity"              : float,        // Aquifer[i].porosity
            "wiltingPoint"          : float,        // Aquifer[i].wiltingPoint
            "fieldCapacity"         : float,        // Aquifer[i].fieldCapacity
            "conductivity"          : float,        // Aquifer[i].conductivity
            "conductSlope"          : float,        // Aquifer[i].conductSlope
            "tensionSlope"          : float,        // Aquifer[i].tensionSlope
            "upperEvapFrac"         : float,        // Aquifer[i].upperEvapFrac
            "lowerEvapDepth"        : float,        // Aquifer[i].lowerEvapDepth
            "lowerLossCoeff"        : float,        // Aquifer[i].lowerLossCoeff
            "bottomElev"            : float,        // Aquifer[i].bottomElev
            "waterTableElev"        : float,        // Aquifer[i].waterTableElev
            "upperMoisture"         : float,        // Aquifer[i].upperMoisture
            "upperEvapPat"          : float         // Aquifer[i].upperEvapPat
        }, ... xNobjects[AQUIFER]
    ],
    "Snowmelt": [
        {
            "ID"                    : string,       // Snowmelt[i].ID
            "snn"                   : float,        // Snowmelt[i].snn
            "si"                    : [ 
                                    float, x3       // Snowmelt[i].si[j]
            ],  
            "dhmin"                 : [ 
                                    float, x3       // Snowmelt[i].dhmin[j]
            ], 
            "dhmax"                 : [ 
                                    float, x3       // Snowmelt[i].dhmax[j]
            ], 
            "tbase"                 : [ 
                                    float, x3       // Snowmelt[i].tbase[j]
            ], 
            "fwfrac"                : [ 
                                    float, x3       // Snowmelt[i].fwfrac[j]
            ], 
            "wsnow"                 : [ 
                                    float, x3       // Snowmelt[i].wsnow[j]
            ],  
            "fwnow"                 : [ 
                                    float, x3       // Snowmelt[i].fwnow[j]
            ], 
            "weplow"                : float,        // Snowmelt[i].weplow
            "sfrac"                 : [ 
                                    float, x5       // Snowmelt[i].sfrac[j]
            ], 
            "toSubcatch"            : int           // Snowmelt[i].toSubcatch
        }, ... xNobjects[SNOWMELT]
    ],
    "Outfall": [
        {
            "type"                  : int,          // Outfall[i].type
            "hasFlapGate"           : int,          // Outfall[i].hasFlapGate
            "fixedStage"            : float,        // Outfall[i].fixedStage
            "tideCurve"             : int,          // Outfall[i].tideCurve
            "stageSeries"           : int,          // Outfall[i].stageSeries
            "routeTo"               : int,          // Outfall[i].routeTo
            "vRouted"               : float,        // Outfall[i].vRouted
            "wRouted"               : [ 
                                    float, xNobjects[POLLUT] // Outfall[i].wRouted[j]
            ] 
        }, ... xNnodes[OUTFALL]
    ],
    "Storage": [
        {
            "fEvap"                 : float,        // Storage[i].fEvap
            "aConst"                : float,        // Storage[i].aConst
            "aCoeff"                : float,        // Storage[i].aCoeff
            "aExpon"                : float,        // Storage[i].aExpon
            "aCurve"                : int,          // Storage[i].aCurve
            "exfil"                 : null | {
                "btmExfil"          : null | {
                    "S"             : float,        // Storage[i].exfil->btmExfil->S
                    "Ks"            : float,        // Storage[i].exfil->btmExfil->Ks
                    "IMDmax"        : float         // Storage[i].exfil->btmExfil->IMDmax
                },    
                "bankExfil"          : null | {
                    "S"             : float,        // Storage[i].exfil->bankExfil->S
                    "Ks"            : float,        // Storage[i].exfil->bankExfil->Ks
                    "IMDmax"        : float         // Storage[i].exfil->bankExfil->IMDmax
                },
                "btmArea"           : float,        // Storage[i].exfil->btmArea
                "bankMinDepth"      : float,        // Storage[i].exfil->bankMinDepth
                "bankMaxDepth"      : float,        // Storage[i].exfil->bankMaxDepth
                "bankMaxArea"       : float         // Storage[i].exfil->bankMaxArea
            }
        }, ... xNnodes[STORAGE]
    ],
    "Divider": [
        {
            "link"                  : int,          // Divider[i].link
            "type"                  : int,          // Divider[i].type
            "qMin"                  : float,        // Divider[i].qMin
            "qMax"                  : float,        // Divider[i].qMax
            "dhMax"                 : float,        // Divider[i].dhMax
            "cWeir"                 : float,        // Divider[i].cWeir
            "flowCurve"             : int           // Divider[i].flowCurve
        }, ... xNnodes[DIVIDER]
    ],
    "Conduit": [
        {
            "length"                : float,        // Conduit[i].length
            "roughness"             : float,        // Conduit[i].roughness
            "barrels"               : int           // Conduit[i].barrels
        }, ... xNlinks[CONDUIT]
    ],
    "Pump": [
        {
            "type"                  : int,          // Pump[i].type
            "pumpCurve"             : int,          // Pump[i].pumpCurve
            "initSetting"           : float,        // Pump[i].initSetting
            "yOn"                   : float,        // Pump[i].yOn
            "yOff"                  : float,        // Pump[i].yOff
            "xMin"                  : float,        // Pump[i].xMin
            "xMax"                  : float         // Pump[i].xMax
        }, ... xNlinks[PUMP]
    ],
    "Orifice": [
        {
            "type"                  : int,          // Orifice[i].type
            "shape"                 : int,          // Orifice[i].shape
            "cDisch"                : float,        // Orifice[i].cDisch
            "orate"                 : float         // Orifice[i].orate
        }, ... xNlinks[ORIFICE]
    ],
    "Weir": [
        {
            "type"                  : int,          // Weir[i].type
            "cDisch1"               : float,        // Weir[i].cDisch1
            "cDisch2"               : float,        // Weir[i].cDisch2
            "endCon"                : float,        // Weir[i].endCon
            "canSurcharge"          : int,          // Weir[i].canSurcharge
            "roadWidth"             : float,        // Weir[i].roadWidth
            "roadSurface"           : int,          // Weir[i].roadSurface
            "cdCurve"               : int           // Weir[i].cdCurve
        }, ... xNlinks[WEIR]
    ],
    "Outlet": [
        {
            "qCoeff"                : float,        // Outlet[i].qCoeff
            "qExpon"                : float,        // Outlet[i].qExpon
            "qCurve"                : int,          // Outlet[i].qCurve
            "curveType"             : int,          // Outlet[i].curveType
        }, ... xNlinks[OUTLET]
    ],
    "Link": [
        {
            "ID"                    : string,       // Link[i].ID
            "type"                  : int,          // Link[i].type
            "subIndex"              : int,          // Link[i].subIndex
            "rptFlag"               : int,          // Link[i].rptFlag
            "node1"                 : int,          // Link[i].node1
            "node2"                 : int,          // Link[i].node2
            "offset1"               : float,        // Link[i].offset1
            "offset2"               : float,        // Link[i].offset2
            "xsect"                 : {
                "type"              : int,          // Link[i].xsect.type
                "culvertCode"       : int,          // Link[i].xsect.culvertCode
                "transect"          : int,          // Link[i].xsect.transect
                "yFull"             : float,        // Link[i].xsect.yFull
                "wMax"              : float,        // Link[i].xsect.wMax
                "ywMax"             : float,        // Link[i].xsect.ywMax
                "aFull"             : float,        // Link[i].xsect.aFull
                "rFull"             : float,        // Link[i].xsect.rFull
                "sFull"             : float,        // Link[i].xsect.sFull
                "sMax"              : float,        // Link[i].xsect.sMax
            },
            "q0"                    : float,        // Link[i].q0
            "qLimit"                : float,        // Link[i].qLimit
            "cLossInlet"            : float,        // Link[i].cLossInlet
            "cLossOutlet"           : float,        // Link[i].cLossOutlet
            "cLossAvg"              : float,        // Link[i].cLossAvg
            "seepRate"              : float,        // Link[i].seepRate
            "hasFlapGate"           : int           // Link[i].hasFlapGate
        }, ... xNobjects[LINK]
    ],
    "Transect": [
        {
            "ID"                    : string,       // Transect[i].ID
            "yFull"                 : float,        // Transect[i].yFull
            "aFull"                 : float,        // Transect[i].aFull
            "rFull"                 : float,        // Transect[i].rFull
            "wMax"                  : float,        // Transect[i].wMax
            "ywMax"                 : float,        // Transect[i].ywMax
            "sMax"                  : float,        // Transect[i].sMax
            "aMax"                  : float,        // Transect[i].aMax
            "lengthFactor"          : float         // Transect[i].lengthFactor
        }, ... xNobjects[TRANSECT]
    ],
    "Shape": [
        {
            "curve"                 : int,       // Shape[i].curve
            "nTbl"                  : int,       // Shape[i].nTbl
            "aFull"                 : float,     // Shape[i].aFull
            "rFull"                 : float,     // Shape[i].rFull
            "wMax"                  : float,     // Shape[i].wMax
            "sMax"                  : float,     // Shape[i].sMax
            "aMax"                  : float,     // Shape[i].aMax
            "areaTbl"               : [
                                        float, xN_SHAPE_TBL // Shape[i].areaTbl[j]
            ],       
            "hradTbl"               : [
                                        float, xN_SHAPE_TBL // Shape[i].hradTbl[j]
            ],
            "widthTbl"              : [
                                        float, xN_SHAPE_TBL // Shape[i].widthTbl[j]
            ]
        }, ... xNobjects[SHAPE]
    ],
    "Pollut": [
        {
            "ID"                    : string,   // Pollut[i].ID
            "units"                 : int,      // Pollut[i].units
            "mcf"                   : float,    // Pollut[i].mcf
            "dwfConcen"             : float,    // Pollut[i].dwfConcen
            "pptConcen"             : float,    // Pollut[i].pptConcen
            "gwConcen"              : float,    // Pollut[i].gwConcen
            "rdiiConcen"            : float,    // Pollut[i].rdiiConcen
            "initConcen"            : float,    // Pollut[i].initConcen
            "kDecay"                : float,    // Pollut[i].kDecay
            "coPollut"              : int,      // Pollut[i].coPollut
            "coFraction"            : float,    // Pollut[i].coFraction
            "snowOnly"              : int       // Pollut[i].snowOnly
        }, ... xNobjects[POLLUT]
    ],
    "Landuse": [
        {
            "ID"                    : string,   // Landuse[i].ID
            "sweepInterval"         : float,    // Landuse[i].sweepInterval
            "sweepRemoval"          : float,    // Landuse[i].sweepRemoval
            "sweepDays0"            : float,    // Landuse[i].sweepDays0
            "buildupFunc"           : [
                {
                    "normalizer"    : int,      // Landuse[i].buildupFunc[j].normalizer
                    "sweepInterval" : int,      // Landuse[i].buildupFunc[j].sweepInterval
                    "coeff"         : [
                                        float, x3 //  Landuse[i].buildupFunc[j].coeff[k]
                    ],
                    "maxDays"       : float     // Landuse[i].buildupFunc[j].maxDays
                }, ... xNobjects[POLLUT]
            ],
            "washoffFunc"           : [
                {
                    "funcType"      : int,      // Landuse[i].washoffFunc[j].funcType
                    "coeff"         : float,    // Landuse[i].washoffFunc[j].coeff
                    "expon"         : float,    // Landuse[i].washoffFunc[j].expon
                    "sweepEffic"    : float,    // Landuse[i].washoffFunc[j].sweepEffic
                    "bmpEffic"      : float     // Landuse[i].washoffFunc[j].bmpEffic
                }, ... xNobjects[POLLUT]
            ],
        }, ... xNobjects[LANDUSE]
    ],
    "UnitHyd": [
        {
            "ID"                    : string,   // UnitHyd[i].ID
            "rainGage"              : int,      // UnitHyd[i].rainGage
            "iaMax"                 : [ 
                                        [
                                        float, x3  // UnitHyd[i].iaMax[j][k]
                                    ], x12
            ],
            "iaRecov"               : [ 
                                        [
                                        float, x3  // UnitHyd[i].iaRecov[j][k]
                                    ], x12
            ],
            "iaInit"                : [ 
                                        [
                                        float, x3  // UnitHyd[i].iaInit[j][k]
                                    ], x12
            ],
            "r"                     : [ 
                                        [
                                        float, x3  // UnitHyd[i].r[j][k]
                                    ], x12
            ],
            "tBase"                 : [ 
                                        [
                                        int, x3  // UnitHyd[i].tBase[j][k]
                                    ], x12
            ],
            "tPeak"                 : [ 
                                        [
                                        int, x3  // UnitHyd[i].tPeak[j][k]
                                    ], x12
            ]
        }, ... xNobjects[UNITHYD]
    ],
    "Curve": [
        {
            "ID"                    : string,   // Curve[i].ID
            "curveType"             : int,      // Curve[i].curveType
            "refersTo"              : int,      // Curve[i].refersTo
            "dxMin"                 : float,    // Curve[i].dxMin
            "lastDate"              : float,    // Curve[i].lastDate
            "x1"                    : float,    // Curve[i].x1
            "x2"                    : float,    // Curve[i].x2
            "y1"                    : float,    // Curve[i].y1
            "y2"                    : float,    // Curve[i].y2
            "file"                  : {
                "name"              : string,   // Curve[i].file.name
                "mode"              : int       // Curve[i].file.mode
            },
            "Table"                 : [
                {
                    "x",            : float     // Curve[i].Table->x
                    "y"             : float     // Curve[i].Table->y
                }, ... 
            ]
        }, ... xNobjects[CURVE]
    ],
    "Control": [
        {
            "ID"                    : string,   // Rules[i].ID
            "priority"              : float,    // Rules[i].priority
            "Premises"              : [
                {
                    "type"          : int,      // Rules[i].Premise->type
                    "lhsVar"        : {
                        "node"      : int,      // Rules[i].Premise->lhsVar.node
                        "link"      : int,      // Rules[i].Premise->lhsVar.link
                        "attribute" : int       // Rules[i].Premise->lhsVar.attribute
                    },
                    "rhsVar"        : {
                        "node"      : int,      // Rules[i].Premise->lhsVar.node
                        "link"      : int,      // Rules[i].Premise->lhsVar.link
                        "attribute" : int       // Rules[i].Premise->lhsVar.attribute
                    },
                    "relation"      : int,      // Rules[i].Premise->relation
                    "value"         : float     // Rules[i].Premise->value
                }, ... 
            ],
            "thenActions"           : [
                {
                    "rule"          : int,      // Rules[i].thenActions->rule
                    "link"          : int,      // Rules[i].thenActions->link
                    "attribute"     : int,      // Rules[i].thenActions->attribute
                    "curve"         : int,      // Rules[i].thenActions->curve
                    "tseries"       : int,      // Rules[i].thenActions->tseries
                    "value"         : float,    // Rules[i].thenActions->value
                    "kp"            : float,    // Rules[i].thenActions->kp
                    "ki"            : float,    // Rules[i].thenActions->ki
                    "kd"            : float,    // Rules[i].thenActions->kd
                    "e1"            : float,    // Rules[i].thenActions->e1
                    "e2"            : float     // Rules[i].thenActions->e2
                }, ... 
            ],
            "thenActions"           : [
                {
                    "rule"          : int,      // Rules[i].elseActions->rule
                    "link"          : int,      // Rules[i].elseActions->link
                    "attribute"     : int,      // Rules[i].elseActions->attribute
                    "curve"         : int,      // Rules[i].elseActions->curve
                    "tseries"       : int,      // Rules[i].elseActions->tseries
                    "value"         : float,    // Rules[i].elseActions->value
                    "kp"            : float,    // Rules[i].elseActions->kp
                    "ki"            : float,    // Rules[i].elseActions->ki
                    "kd"            : float,    // Rules[i].elseActions->kd
                    "e1"            : float,    // Rules[i].elseActions->e1
                    "e2"            : float     // Rules[i].elseActions->e2
                }, ... 
            ]
        }, ... xNobjects[CONTROL]
    ],
    "RptFlags": {
        "report"                    : int,      // RptFlags.report
        "input"                     : int,      // RptFlags.input
        "subcatchments"             : int,      // RptFlags.subcatchments
        "nodes"                     : int,      // RptFlags.nodes
        "links"                     : int,      // RptFlags.links
        "continuity"                : int,      // RptFlags.continuity
        "flowStats"                 : int,      // RptFlags.flowStats
        "nodeStats"                 : int,      // RptFlags.nodeStats
        "controls"                  : int,      // RptFlags.controls
        "averages"                  : int,      // RptFlags.averages
        "linesPerPage"              : int       // RptFlags.linesPerPage
    },
    "LidProcs": [
        {
            "ID"                        : string,   // LidProcs[i].ID
            "lidType"                   : int,      // LidProcs[i].lidType
            "surface"                   : {
                "thickness"             : float,    // LidProcs[i].surface.thickness
                "voidFrac"              : float,    // LidProcs[i].surface.voidFrac
                "roughness"             : float,    // LidProcs[i].surface.roughness
                "surfSlope"             : float,    // LidProcs[i].surface.surfSlope
                "sideSlope"             : float,    // LidProcs[i].surface.sideSlope
                "alpha"                 : float,    // LidProcs[i].surface.alpha
                "canOverflow"           : float     // LidProcs[i].surface.canOverflow
            },
            "pavement"                  : {
                "thickness"             : float,    // LidProcs[i].pavement.thickness
                "voidFrac"              : float,    // LidProcs[i].pavement.voidFrac
                "impervFrac"            : float,    // LidProcs[i].pavement.impervFrac
                "kSat"                  : float,    // LidProcs[i].pavement.kSat
                "clogFactor"            : float,    // LidProcs[i].pavement.clogFactor
                "regenDays"             : float,    // LidProcs[i].pavement.regenDays
                "regenDegree"           : float     // LidProcs[i].pavement.regenDegree
            },
            "soil"                      : {
                "thickness"             : float,    // LidProcs[i].soil.thickness
                "porosity"              : float,    // LidProcs[i].soil.porosity
                "fieldCap"              : float,    // LidProcs[i].soil.fieldCap
                "wiltPoint"             : float,    // LidProcs[i].soil.wiltPoint
                "suction"               : float,    // LidProcs[i].soil.suction
                "kSat"                  : float,    // LidProcs[i].soil.kSat
                "kSlope"                : float     // LidProcs[i].soil.kSlope
            },
            "storage"                   : {
                "thickness"             : float,    // LidProcs[i].storage.thickness
                "voidFrac"              : float,    // LidProcs[i].storage.voidFrac
                "kSat"                  : float,    // LidProcs[i].storage.kSat
                "clogFactor"            : float     // LidProcs[i].storage.clogFactor
            },
            "drain"                     : {
                "coeff"                 : float,    // LidProcs[i].drain.coeff
                "expon"                 : float,    // LidProcs[i].drain.expon
                "offset"                : float,    // LidProcs[i].drain.offset
                "delay"                 : float,    // LidProcs[i].drain.delay
                "hOpen"                 : float,    // LidProcs[i].drain.hOpen
                "hClose"                : float,    // LidProcs[i].drain.hClose
                "qCurve"                : int       // LidProcs[i].drain.qCurve
            },
            "drainMat"                  : {
                "thickness"             : float,    // LidProcs[i].drainMat.thickness
                "voidFrac"              : float,    // LidProcs[i].drainMat.voidFrac
                "roughness"             : float,    // LidProcs[i].drainMat.roughness
                "alpha"                 : float,    // LidProcs[i].drainMat.alpha
            },
            "drainRmvl"                 : [
                                            float, xNobjects[POLLUT] //  LidProcs[i].drainRmvl[j]
            ]
        }, ... xLidCount
    ]
}