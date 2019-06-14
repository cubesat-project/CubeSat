stk.v.11.0
WrittenBy    STK_v11.5.0

BEGIN Facility

    Name		 Edmonton

    BEGIN CentroidPosition

        CentralBody		 Earth
        DisplayCoords		 Geodetic
        EcfLatitude		  5.3678199999999997e+01
        EcfLongitude		 -1.1331616600000000e+02
        EcfAltitude		  6.4000000000000000e+02
        HeightAboveGround		  0.0000000000000000e+00
        ComputeTrnMaskAsNeeded		 Off
        DisplayAltRef		 Ellipsoid
        UseTerrainInfo		 Off
        NumAzRaysInMask		 360
        TerrainNormalMode		 UseCbShape

    END CentroidPosition

    BEGIN Extensions

        BEGIN LaserCAT
        END LaserCAT

        BEGIN ExternData
        END ExternData

        BEGIN RFI
        END RFI

        BEGIN ADFFileData
        END ADFFileData

        BEGIN AccessConstraints
            LineOfSight IncludeIntervals
            ElevationAngle Min  1.0000000000e+01 IncludeIntervals
        END AccessConstraints

        BEGIN ObjectCoverage
        END ObjectCoverage

        BEGIN Desc
            BEGIN LongText
Facility Name  Edmonton Geolut
Network        Other
Latitude       53.6782 deg
Longitude      -113.316166 deg
Altitude       640 m
Central Body   Earth
            END LongText
        END Desc

        BEGIN Atmosphere
<?xml version = "1.0" standalone = "yes"?>
<VAR name = "STK_Atmosphere_Extension">
    <SCOPE Class = "AtmosphereExtension">
        <VAR name = "Version">
            <STRING>&quot;1.0.0 a&quot;</STRING>
        </VAR>
        <VAR name = "STKVersion">
            <INT>1140</INT>
        </VAR>
        <VAR name = "ComponentName">
            <STRING>&quot;STK_Atmosphere_Extension&quot;</STRING>
        </VAR>
        <VAR name = "Description">
            <STRING>&quot;STK Atmosphere Extension&quot;</STRING>
        </VAR>
        <VAR name = "Type">
            <STRING>&quot;STK Atmosphere Extension&quot;</STRING>
        </VAR>
        <VAR name = "UserComment">
            <STRING>&quot;STK Atmosphere Extension&quot;</STRING>
        </VAR>
        <VAR name = "ReadOnly">
            <BOOL>false</BOOL>
        </VAR>
        <VAR name = "Clonable">
            <BOOL>true</BOOL>
        </VAR>
        <VAR name = "Category">
            <STRING>&quot;&quot;</STRING>
        </VAR>
        <VAR name = "InheritAtmosAbsorptionModel">
            <BOOL>true</BOOL>
        </VAR>
        <VAR name = "AtmosAbsorptionModel">
            <VAR name = "Simple_Satcom">
                <SCOPE Class = "AtmosphericAbsorptionModel">
                    <VAR name = "Version">
                        <STRING>&quot;1.0.1 a&quot;</STRING>
                    </VAR>
                    <VAR name = "STKVersion">
                        <INT>1140</INT>
                    </VAR>
                    <VAR name = "ComponentName">
                        <STRING>&quot;Simple_Satcom&quot;</STRING>
                    </VAR>
                    <VAR name = "Description">
                        <STRING>&quot;Simple Satcom gaseous absorption model&quot;</STRING>
                    </VAR>
                    <VAR name = "Type">
                        <STRING>&quot;Simple Satcom&quot;</STRING>
                    </VAR>
                    <VAR name = "UserComment">
                        <STRING>&quot;Simple Satcom gaseous absorption model&quot;</STRING>
                    </VAR>
                    <VAR name = "ReadOnly">
                        <BOOL>false</BOOL>
                    </VAR>
                    <VAR name = "Clonable">
                        <BOOL>true</BOOL>
                    </VAR>
                    <VAR name = "Category">
                        <STRING>&quot;&quot;</STRING>
                    </VAR>
                    <VAR name = "SurfaceTemperature">
                        <QUANTITY Dimension = "Temperature" Unit = "K">
                            <REAL>293.15</REAL>
                        </QUANTITY>
                    </VAR>
                    <VAR name = "WaterVaporConcentration">
                        <QUANTITY Dimension = "Density" Unit = "g*m^-3">
                            <REAL>7.5</REAL>
                        </QUANTITY>
                    </VAR>
                </SCOPE>
            </VAR>
        </VAR>
        <VAR name = "EnableLocalRainData">
            <BOOL>false</BOOL>
        </VAR>
        <VAR name = "LocalRainIsoHeight">
            <QUANTITY Dimension = "DistanceUnit" Unit = "m">
                <REAL>2000</REAL>
            </QUANTITY>
        </VAR>
        <VAR name = "LocalRainRate">
            <QUANTITY Dimension = "SlowRate" Unit = "mm*hr^-1">
                <REAL>1</REAL>
            </QUANTITY>
        </VAR>
        <VAR name = "LocalSurfaceTemp">
            <QUANTITY Dimension = "Temperature" Unit = "K">
                <REAL>293.15</REAL>
            </QUANTITY>
        </VAR>
    </SCOPE>
</VAR>        END Atmosphere

        BEGIN RadarCrossSection
<?xml version = "1.0" standalone = "yes"?>
<VAR name = "STK_Radar_RCS_Extension">
    <SCOPE Class = "RadarRCSExtension">
        <VAR name = "Version">
            <STRING>&quot;1.0.0 a&quot;</STRING>
        </VAR>
        <VAR name = "STKVersion">
            <INT>1140</INT>
        </VAR>
        <VAR name = "ComponentName">
            <STRING>&quot;STK_Radar_RCS_Extension&quot;</STRING>
        </VAR>
        <VAR name = "Description">
            <STRING>&quot;STK Radar RCS Extension&quot;</STRING>
        </VAR>
        <VAR name = "Type">
            <STRING>&quot;STK Radar RCS Extension&quot;</STRING>
        </VAR>
        <VAR name = "UserComment">
            <STRING>&quot;STK Radar RCS Extension&quot;</STRING>
        </VAR>
        <VAR name = "ReadOnly">
            <BOOL>false</BOOL>
        </VAR>
        <VAR name = "Clonable">
            <BOOL>true</BOOL>
        </VAR>
        <VAR name = "Category">
            <STRING>&quot;&quot;</STRING>
        </VAR>
        <VAR name = "Inherit">
            <BOOL>true</BOOL>
        </VAR>
    </SCOPE>
</VAR>        END RadarCrossSection

        BEGIN RadarClutter
<?xml version = "1.0" standalone = "yes"?>
<VAR name = "STK_Radar_Clutter_Extension">
    <SCOPE Class = "RadarClutterExtension">
        <VAR name = "Version">
            <STRING>&quot;1.0.0 a&quot;</STRING>
        </VAR>
        <VAR name = "STKVersion">
            <INT>1140</INT>
        </VAR>
        <VAR name = "ComponentName">
            <STRING>&quot;STK_Radar_Clutter_Extension&quot;</STRING>
        </VAR>
        <VAR name = "Description">
            <STRING>&quot;STK Radar Clutter Extension&quot;</STRING>
        </VAR>
        <VAR name = "Type">
            <STRING>&quot;STK Radar Clutter Extension&quot;</STRING>
        </VAR>
        <VAR name = "UserComment">
            <STRING>&quot;STK Radar Clutter Extension&quot;</STRING>
        </VAR>
        <VAR name = "ReadOnly">
            <BOOL>false</BOOL>
        </VAR>
        <VAR name = "Clonable">
            <BOOL>true</BOOL>
        </VAR>
        <VAR name = "Category">
            <STRING>&quot;&quot;</STRING>
        </VAR>
        <VAR name = "Inherit">
            <BOOL>true</BOOL>
        </VAR>
    </SCOPE>
</VAR>        END RadarClutter

        BEGIN Identification
        END Identification

        BEGIN Crdn
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 Halifax
                Description		 Displacement vector to Halifax
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/Halifax
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 ISS_UNITY_25575
                Description		 Displacement vector to ISS_UNITY_25575
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Satellite/ISS_UNITY_25575
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 Iqaluit
                Description		 Displacement vector to Iqaluit
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/Iqaluit
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 London
                Description		 Displacement vector to London
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/London
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 Montreal
                Description		 Displacement vector to Montreal
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/Montreal
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 Saskatoon
                Description		 Displacement vector to Saskatoon
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/Saskatoon
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 St_Johns
                Description		 Displacement vector to St_Johns
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/St_Johns
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 Victoria
                Description		 Displacement vector to Vancouver
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/Victoria
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
            BEGIN VECTOR
                Type		 VECTOR_TOVECTOR
                Name		 Winnipeg
                Description		 Displacement vector to Winnipeg
                Origin		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                END POINT
                Destination		
                BEGIN POINT
                    Type		 POINT_LINKTO
                    Name		 Center
                    RelativePath		 Facility/Winnipeg
                END POINT
                LTDRefSystem		
                BEGIN SYSTEM
                    Type		 SYSTEM_LINKTO
                    Name		 BarycenterICRF
                    AbsolutePath		 CentralBody/Sun
                END SYSTEM
                Apparent		 No
                TimeConvergence		  1.0000000000000000e-03
                TimeSense		 Receive
                IgnoreAberration		 No
            END VECTOR
        END Crdn

        BEGIN Graphics

            BEGIN Attributes

                MarkerColor		 #ffff00
                LabelColor		 #ffff00
                LineStyle		 0
                MarkerStyle		 9
                FontStyle		 0

            END Attributes

            BEGIN Graphics

                Show		 Off
                Inherit		 On
                IsDynamic		 Off
                ShowLabel		 On
                ShowAzElMask		 Off
                ShowAzElFill		 Off
                AzElFillStyle		 7
                AzElFillAltTranslucency		 0.5
                UseAzElColor		 Off
                AzElColor		 #ffffff
                MinDisplayAlt		 640
                MaxDisplayAlt		 10000000
                NumAzElMaskSteps		 1
                ShowAzElAtRangeMask		 Off
                ShowAzElAtRangeFill		 Off
                AzElFillRangeTranslucency		 0.5
                AzElAtRangeFillStyle		 7
                UseAzElAtRangeColor		 Off
                AzElAtRangeColor		 #ffffff
                MinDisplayRange		 0
                MaxDisplayRange		 10000000
                NumAzElAtRangeMaskSteps		 1

                BEGIN RangeContourData
                    Show		 Off
                    ShowRangeFill		 Off
                    RangeFillTranslucency		 0.5
                    LabelUnits		 4
                    NumDecimalDigits		 3

                END RangeContourData

            END Graphics

            BEGIN DisplayTimes
                DisplayType		 AlwaysOn
            END DisplayTimes
        END Graphics

        BEGIN ContourGfx
            ShowContours		 Off
        END ContourGfx

        BEGIN Contours
            ActiveContourType		 Radar Cross Section

            BEGIN ContourSet Radar Cross Section
                Altitude		 0
                ShowAtAltitude		 Off
                Projected		 On
                Relative		 On
                ShowLabels		 Off
                LineWidth		 1
                DecimalDigits		 1
                ColorRamp		 On
                ColorRampStartColor		 #ff0000
                ColorRampEndColor		 #0000ff
                BEGIN ContourDefinition
                    BEGIN CntrAntAzEl
                        CoordinateSystem		 0
                        BEGIN AzElPatternDef
                            SetResolutionTogether		 0
                            NumAzPoints		 361
                            AzimuthRes		 1
                            MinAzimuth		 -180
                            MaxAzimuth		 180
                            NumElPoints		 91
                            ElevationRes		 1
                            MinElevation		 0
                            MaxElevation		 90
                        END AzElPatternDef
                    END CntrAntAzEl
                    BEGIN RCSContour
                        Frequency		 2997924580
                        ComputeType		 0
                    END RCSContour
                END ContourDefinition
            END ContourSet
        END Contours

        BEGIN VO
        END VO

        BEGIN 3dVolume
            ActiveVolumeType		 Radar Cross Section

            BEGIN VolumeSet Radar Cross Section
                Scale		 100
                MinimumDisplayedRcs		 1
                Frequency		  1.4500000000000000e+10
                ShowAsWireframe		 0
                BEGIN AzElPatternDef
                    SetResolutionTogether		 0
                    NumAzPoints		 50
                    AzimuthRes		 7.346938775510203
                    MinAzimuth		 -180
                    MaxAzimuth		 180
                    NumElPoints		 50
                    ElevationRes		 3.673469387755102
                    MinElevation		 0
                    MaxElevation		 180
                END AzElPatternDef
                ColorMethod		 1
                MinToMaxStartColor		 #ff0000
                MinToMaxStopColor		 #0000ff
                RelativeToMaximum		 0
            END VolumeSet
            BEGIN VolumeGraphics
                ShowContours		 No
                ShowVolume		 No
            END VolumeGraphics
        END 3dVolume

    END Extensions

    BEGIN SubObjects

    END SubObjects

END Facility

