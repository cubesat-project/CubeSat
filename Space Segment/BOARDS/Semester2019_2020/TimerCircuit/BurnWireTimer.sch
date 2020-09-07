<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE eagle SYSTEM "eagle.dtd">
<eagle version="8.4.1">
<drawing>
<settings>
<setting alwaysvectorfont="no"/>
<setting verticaltext="up"/>
</settings>
<grid distance="0.1" unitdist="inch" unit="inch" style="lines" multiple="1" display="no" altdistance="0.01" altunitdist="inch" altunit="inch"/>
<layers>
<layer number="1" name="Top" color="4" fill="1" visible="no" active="no"/>
<layer number="16" name="Bottom" color="1" fill="1" visible="no" active="no"/>
<layer number="17" name="Pads" color="2" fill="1" visible="no" active="no"/>
<layer number="18" name="Vias" color="2" fill="1" visible="no" active="no"/>
<layer number="19" name="Unrouted" color="6" fill="1" visible="no" active="no"/>
<layer number="20" name="Dimension" color="15" fill="1" visible="no" active="no"/>
<layer number="21" name="tPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="22" name="bPlace" color="7" fill="1" visible="no" active="no"/>
<layer number="23" name="tOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="24" name="bOrigins" color="15" fill="1" visible="no" active="no"/>
<layer number="25" name="tNames" color="7" fill="1" visible="no" active="no"/>
<layer number="26" name="bNames" color="7" fill="1" visible="no" active="no"/>
<layer number="27" name="tValues" color="7" fill="1" visible="no" active="no"/>
<layer number="28" name="bValues" color="7" fill="1" visible="no" active="no"/>
<layer number="29" name="tStop" color="7" fill="3" visible="no" active="no"/>
<layer number="30" name="bStop" color="7" fill="6" visible="no" active="no"/>
<layer number="31" name="tCream" color="7" fill="4" visible="no" active="no"/>
<layer number="32" name="bCream" color="7" fill="5" visible="no" active="no"/>
<layer number="33" name="tFinish" color="6" fill="3" visible="no" active="no"/>
<layer number="34" name="bFinish" color="6" fill="6" visible="no" active="no"/>
<layer number="35" name="tGlue" color="7" fill="4" visible="no" active="no"/>
<layer number="36" name="bGlue" color="7" fill="5" visible="no" active="no"/>
<layer number="37" name="tTest" color="7" fill="1" visible="no" active="no"/>
<layer number="38" name="bTest" color="7" fill="1" visible="no" active="no"/>
<layer number="39" name="tKeepout" color="4" fill="11" visible="no" active="no"/>
<layer number="40" name="bKeepout" color="1" fill="11" visible="no" active="no"/>
<layer number="41" name="tRestrict" color="4" fill="10" visible="no" active="no"/>
<layer number="42" name="bRestrict" color="1" fill="10" visible="no" active="no"/>
<layer number="43" name="vRestrict" color="2" fill="10" visible="no" active="no"/>
<layer number="44" name="Drills" color="7" fill="1" visible="no" active="no"/>
<layer number="45" name="Holes" color="7" fill="1" visible="no" active="no"/>
<layer number="46" name="Milling" color="3" fill="1" visible="no" active="no"/>
<layer number="47" name="Measures" color="7" fill="1" visible="no" active="no"/>
<layer number="48" name="Document" color="7" fill="1" visible="no" active="no"/>
<layer number="49" name="Reference" color="7" fill="1" visible="no" active="no"/>
<layer number="51" name="tDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="52" name="bDocu" color="7" fill="1" visible="no" active="no"/>
<layer number="88" name="SimResults" color="9" fill="1" visible="yes" active="yes"/>
<layer number="89" name="SimProbes" color="9" fill="1" visible="yes" active="yes"/>
<layer number="90" name="Modules" color="5" fill="1" visible="yes" active="yes"/>
<layer number="91" name="Nets" color="2" fill="1" visible="yes" active="yes"/>
<layer number="92" name="Busses" color="1" fill="1" visible="yes" active="yes"/>
<layer number="93" name="Pins" color="2" fill="1" visible="no" active="yes"/>
<layer number="94" name="Symbols" color="4" fill="1" visible="yes" active="yes"/>
<layer number="95" name="Names" color="7" fill="1" visible="yes" active="yes"/>
<layer number="96" name="Values" color="7" fill="1" visible="yes" active="yes"/>
<layer number="97" name="Info" color="7" fill="1" visible="yes" active="yes"/>
<layer number="98" name="Guide" color="6" fill="1" visible="yes" active="yes"/>
<layer number="99" name="SpiceOrder" color="7" fill="1" visible="yes" active="yes"/>
</layers>
<schematic xreflabel="%F%N/%S.%C%R" xrefpart="/%S.%C%R">
<libraries>
<library name="ECE2240+Project">
<description>Generated from &lt;b&gt;Project 2240.sch&lt;/b&gt;&lt;p&gt;
by exp-lbrs.ulp</description>
<packages>
<package name="0309/10">
<description>&lt;b&gt;RESISTOR&lt;/b&gt;&lt;p&gt;
type 0309, grid 10mm</description>
<wire x1="-4.699" y1="0" x2="-5.08" y2="0" width="0.6096" layer="51"/>
<wire x1="-4.318" y1="1.27" x2="-4.064" y2="1.524" width="0.1524" layer="21" curve="-90"/>
<wire x1="-4.318" y1="-1.27" x2="-4.064" y2="-1.524" width="0.1524" layer="21" curve="90"/>
<wire x1="4.064" y1="-1.524" x2="4.318" y2="-1.27" width="0.1524" layer="21" curve="90"/>
<wire x1="4.064" y1="1.524" x2="4.318" y2="1.27" width="0.1524" layer="21" curve="-90"/>
<wire x1="-4.318" y1="-1.27" x2="-4.318" y2="1.27" width="0.1524" layer="51"/>
<wire x1="-4.064" y1="1.524" x2="-3.429" y2="1.524" width="0.1524" layer="21"/>
<wire x1="-3.302" y1="1.397" x2="-3.429" y2="1.524" width="0.1524" layer="21"/>
<wire x1="-4.064" y1="-1.524" x2="-3.429" y2="-1.524" width="0.1524" layer="21"/>
<wire x1="-3.302" y1="-1.397" x2="-3.429" y2="-1.524" width="0.1524" layer="21"/>
<wire x1="3.302" y1="1.397" x2="3.429" y2="1.524" width="0.1524" layer="21"/>
<wire x1="3.302" y1="1.397" x2="-3.302" y2="1.397" width="0.1524" layer="21"/>
<wire x1="3.302" y1="-1.397" x2="3.429" y2="-1.524" width="0.1524" layer="21"/>
<wire x1="3.302" y1="-1.397" x2="-3.302" y2="-1.397" width="0.1524" layer="21"/>
<wire x1="4.064" y1="1.524" x2="3.429" y2="1.524" width="0.1524" layer="21"/>
<wire x1="4.064" y1="-1.524" x2="3.429" y2="-1.524" width="0.1524" layer="21"/>
<wire x1="4.318" y1="-1.27" x2="4.318" y2="1.27" width="0.1524" layer="51"/>
<wire x1="5.08" y1="0" x2="4.699" y2="0" width="0.6096" layer="51"/>
<rectangle x1="-4.6228" y1="-0.3048" x2="-4.318" y2="0.3048" layer="51"/>
<rectangle x1="4.318" y1="-0.3048" x2="4.6228" y2="0.3048" layer="51"/>
<pad name="1" x="-5.08" y="0" drill="0.8" diameter="1.778"/>
<pad name="2" x="5.08" y="0" drill="0.8128" diameter="1.778" shape="octagon"/>
<text x="-4.191" y="1.905" size="1.27" layer="25" ratio="10">&gt;NAME</text>
<text x="-3.175" y="-0.6858" size="1.27" layer="27" ratio="10">&gt;VALUE</text>
</package>
<package name="C5B3">
<description>&lt;B&gt;MKS2&lt;/B&gt;, 7.5 x 3 mm, grid 5.08 mm</description>
<wire x1="-0.3048" y1="0.635" x2="-0.3048" y2="0" width="0.3048" layer="21"/>
<wire x1="-0.3048" y1="0" x2="-0.3048" y2="-0.635" width="0.3048" layer="21"/>
<wire x1="-0.3048" y1="0" x2="-1.524" y2="0" width="0.1524" layer="21"/>
<wire x1="0.3302" y1="0.635" x2="0.3302" y2="0" width="0.3048" layer="21"/>
<wire x1="0.3302" y1="0" x2="0.3302" y2="-0.635" width="0.3048" layer="21"/>
<wire x1="0.3302" y1="0" x2="1.524" y2="0" width="0.1524" layer="21"/>
<wire x1="-3.683" y1="1.27" x2="-3.683" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-3.429" y1="-1.524" x2="3.429" y2="-1.524" width="0.1524" layer="21"/>
<wire x1="3.683" y1="-1.27" x2="3.683" y2="1.27" width="0.1524" layer="21"/>
<wire x1="3.429" y1="1.524" x2="-3.429" y2="1.524" width="0.1524" layer="21"/>
<wire x1="3.429" y1="1.524" x2="3.683" y2="1.27" width="0.1524" layer="21" curve="-90"/>
<wire x1="3.429" y1="-1.524" x2="3.683" y2="-1.27" width="0.1524" layer="21" curve="90"/>
<wire x1="-3.683" y1="-1.27" x2="-3.429" y2="-1.524" width="0.1524" layer="21" curve="90"/>
<wire x1="-3.683" y1="1.27" x2="-3.429" y2="1.524" width="0.1524" layer="21" curve="-90"/>
<pad name="1" x="-2.54" y="0" drill="0.8128" diameter="1.6002" shape="octagon"/>
<pad name="2" x="2.54" y="0" drill="0.8128" diameter="1.6002" shape="octagon"/>
<text x="-2.54" y="1.778" size="1.27" layer="25" ratio="10">&gt;NAME</text>
<text x="-2.54" y="-3.048" size="1.27" layer="27" ratio="10">&gt;VALUE</text>
</package>
</packages>
<symbols>
<symbol name="R-US">
<wire x1="-2.54" y1="0" x2="-2.159" y2="1.016" width="0.2032" layer="94"/>
<wire x1="-2.159" y1="1.016" x2="-1.524" y2="-1.016" width="0.2032" layer="94"/>
<wire x1="-1.524" y1="-1.016" x2="-0.889" y2="1.016" width="0.2032" layer="94"/>
<wire x1="-0.889" y1="1.016" x2="-0.254" y2="-1.016" width="0.2032" layer="94"/>
<wire x1="-0.254" y1="-1.016" x2="0.381" y2="1.016" width="0.2032" layer="94"/>
<wire x1="0.381" y1="1.016" x2="1.016" y2="-1.016" width="0.2032" layer="94"/>
<wire x1="1.016" y1="-1.016" x2="1.651" y2="1.016" width="0.2032" layer="94"/>
<wire x1="1.651" y1="1.016" x2="2.286" y2="-1.016" width="0.2032" layer="94"/>
<wire x1="2.286" y1="-1.016" x2="2.54" y2="0" width="0.2032" layer="94"/>
<pin name="1" x="-5.08" y="0" visible="off" length="short" direction="pas" swaplevel="1"/>
<pin name="2" x="5.08" y="0" visible="off" length="short" direction="pas" swaplevel="1" rot="R180"/>
<text x="-3.81" y="1.4986" size="1.778" layer="95">&gt;NAME</text>
<text x="-3.81" y="-3.302" size="1.778" layer="96">&gt;VALUE</text>
</symbol>
<symbol name="GND">
<wire x1="-1.905" y1="0" x2="1.905" y2="0" width="0.254" layer="94"/>
<pin name="GND" x="0" y="2.54" visible="off" length="short" direction="sup" rot="R270"/>
<text x="-2.54" y="-2.54" size="1.778" layer="96">&gt;VALUE</text>
</symbol>
<symbol name="C">
<rectangle x1="-2.032" y1="-1.016" x2="2.032" y2="-0.508" layer="94"/>
<rectangle x1="-2.032" y1="-2.032" x2="2.032" y2="-1.524" layer="94"/>
<wire x1="0" y1="-2.54" x2="0" y2="-2.032" width="0.1524" layer="94"/>
<wire x1="0" y1="0" x2="0" y2="-0.508" width="0.1524" layer="94"/>
<pin name="1" x="0" y="2.54" visible="off" length="short" direction="pas" swaplevel="1" rot="R270"/>
<pin name="2" x="0" y="-5.08" visible="off" length="short" direction="pas" swaplevel="1" rot="R90"/>
<text x="1.524" y="0.381" size="1.778" layer="95">&gt;NAME</text>
<text x="1.524" y="-4.699" size="1.778" layer="96">&gt;VALUE</text>
</symbol>
</symbols>
<devicesets>
<deviceset name="R-US_" prefix="R" uservalue="yes">
<description>&lt;B&gt;RESISTOR&lt;/B&gt;, American symbol</description>
<gates>
<gate name="G$1" symbol="R-US" x="0" y="0"/>
</gates>
<devices>
<device name="0309/10" package="0309/10">
<connects>
<connect gate="G$1" pin="1" pad="1"/>
<connect gate="G$1" pin="2" pad="2"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
<deviceset name="GND" prefix="GND">
<description>&lt;b&gt;SUPPLY SYMBOL&lt;/b&gt;</description>
<gates>
<gate name="1" symbol="GND" x="0" y="0"/>
</gates>
<devices>
<device name="">
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
<deviceset name="C" prefix="C" uservalue="yes">
<description>&lt;B&gt;CAPACITOR&lt;/B&gt;&lt;p&gt;
naming: grid - package width</description>
<gates>
<gate name="G$1" symbol="C" x="0" y="0"/>
</gates>
<devices>
<device name="5/3" package="C5B3">
<connects>
<connect gate="G$1" pin="1" pad="1"/>
<connect gate="G$1" pin="2" pad="2"/>
</connects>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="maxim" urn="urn:adsk.eagle:library:269">
<description>&lt;b&gt;Maxim Components&lt;/b&gt;&lt;p&gt;

&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="DIL08" urn="urn:adsk.eagle:footprint:17114/1" library_version="1">
<description>&lt;b&gt;Dual In Line Package&lt;/b&gt;</description>
<wire x1="5.08" y1="2.921" x2="-5.08" y2="2.921" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="-2.921" x2="5.08" y2="-2.921" width="0.1524" layer="21"/>
<wire x1="5.08" y1="2.921" x2="5.08" y2="-2.921" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="2.921" x2="-5.08" y2="1.016" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="-2.921" x2="-5.08" y2="-1.016" width="0.1524" layer="21"/>
<wire x1="-5.08" y1="1.016" x2="-5.08" y2="-1.016" width="0.1524" layer="21" curve="-180"/>
<pad name="1" x="-3.81" y="-3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="2" x="-1.27" y="-3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="7" x="-1.27" y="3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="8" x="-3.81" y="3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="3" x="1.27" y="-3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="4" x="3.81" y="-3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="6" x="1.27" y="3.81" drill="0.8128" shape="long" rot="R90"/>
<pad name="5" x="3.81" y="3.81" drill="0.8128" shape="long" rot="R90"/>
<text x="-5.334" y="-2.921" size="1.27" layer="25" ratio="10" rot="R90">&gt;NAME</text>
<text x="-3.556" y="-0.635" size="1.27" layer="27" ratio="10">&gt;VALUE</text>
</package>
</packages>
<packages3d>
<package3d name="DIL08" urn="urn:adsk.eagle:package:17510/1" type="box" library_version="1">
<description>Dual In Line Package</description>
</package3d>
</packages3d>
<symbols>
<symbol name="ICM7555" urn="urn:adsk.eagle:symbol:17180/1" library_version="1">
<wire x1="7.62" y1="-12.7" x2="-10.16" y2="-12.7" width="0.4064" layer="94"/>
<wire x1="-10.16" y1="12.7" x2="-10.16" y2="-12.7" width="0.4064" layer="94"/>
<wire x1="-10.16" y1="12.7" x2="7.62" y2="12.7" width="0.4064" layer="94"/>
<wire x1="7.62" y1="-12.7" x2="7.62" y2="12.7" width="0.4064" layer="94"/>
<wire x1="-7.747" y1="1.143" x2="-0.889" y2="1.143" width="0.1524" layer="95"/>
<wire x1="-7.747" y1="-9.017" x2="-2.794" y2="-9.017" width="0.1524" layer="95"/>
<text x="-10.16" y="13.335" size="1.778" layer="95">&gt;NAME</text>
<text x="-10.16" y="-15.24" size="1.778" layer="96">&gt;VALUE</text>
<pin name="OUT" x="12.7" y="10.16" length="middle" direction="out" rot="R180"/>
<pin name="V+" x="12.7" y="-5.08" length="middle" direction="pwr" rot="R180"/>
<pin name="GND" x="12.7" y="-10.16" length="middle" direction="pwr" rot="R180"/>
<pin name="DISCH" x="-15.24" y="10.16" length="middle" direction="in"/>
<pin name="RESET" x="-15.24" y="0" length="middle" direction="in" function="dot"/>
<pin name="CV" x="-15.24" y="-5.08" length="middle" direction="pas"/>
<pin name="TRIG" x="-15.24" y="-10.16" length="middle" function="dot"/>
<pin name="TRSH" x="-15.24" y="5.08" length="middle" direction="in"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="ICM7555" urn="urn:adsk.eagle:component:17644/1" prefix="IC" library_version="1">
<description>&lt;b&gt;TIMER&lt;/b&gt;</description>
<gates>
<gate name="G$1" symbol="ICM7555" x="0" y="0"/>
</gates>
<devices>
<device name="" package="DIL08">
<connects>
<connect gate="G$1" pin="CV" pad="5"/>
<connect gate="G$1" pin="DISCH" pad="7"/>
<connect gate="G$1" pin="GND" pad="1"/>
<connect gate="G$1" pin="OUT" pad="3"/>
<connect gate="G$1" pin="RESET" pad="4"/>
<connect gate="G$1" pin="TRIG" pad="2"/>
<connect gate="G$1" pin="TRSH" pad="6"/>
<connect gate="G$1" pin="V+" pad="8"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:17510/1"/>
</package3dinstances>
<technologies>
<technology name="">
<attribute name="MF" value="MAXIM" constant="no"/>
<attribute name="MPN" value="ICM7555IPA+" constant="no"/>
<attribute name="OC_FARNELL" value="9663762" constant="no"/>
<attribute name="OC_NEWARK" value="68K4387" constant="no"/>
</technology>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="switch" urn="urn:adsk.eagle:library:380">
<description>&lt;b&gt;Switches&lt;/b&gt;&lt;p&gt;
Marquardt, Siemens, C&amp;K, ITT, and others&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="5501" urn="urn:adsk.eagle:footprint:27648/1" library_version="1">
<description>&lt;b&gt;PUSHBUTTON SERIES 5500 SWITCHES&lt;/b&gt;&lt;p&gt;
Source: www.e-switch.com .. 5500.pdf</description>
<wire x1="-8.6549" y1="-6.1001" x2="-2.9649" y2="-6.1001" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="-6.1001" x2="8.6549" y2="-6.1001" width="0.2032" layer="21"/>
<wire x1="8.6549" y1="-6.1001" x2="8.6549" y2="6.1001" width="0.2032" layer="21"/>
<wire x1="8.6549" y1="6.1001" x2="-2.9649" y2="6.1001" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="6.1001" x2="-8.6549" y2="6.1001" width="0.2032" layer="21"/>
<wire x1="-8.6549" y1="6.1001" x2="-8.6549" y2="-6.1001" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="-6.1001" x2="-2.9649" y2="6.1001" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="-6.1001" x2="-1.27" y2="-4.699" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="-4.699" x2="-1.27" y2="4.699" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="4.699" x2="-2.9649" y2="6.1001" width="0.2032" layer="21"/>
<wire x1="8.6549" y1="-6.1001" x2="7.239" y2="-4.699" width="0.2032" layer="21"/>
<wire x1="7.239" y1="-4.699" x2="7.239" y2="4.699" width="0.2032" layer="21"/>
<wire x1="7.239" y1="4.699" x2="8.6549" y2="6.1001" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="4.699" x2="7.239" y2="4.699" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="-4.699" x2="7.239" y2="-4.699" width="0.2032" layer="21"/>
<pad name="NO" x="5.08" y="3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<pad name="1A" x="0" y="3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<pad name="1B" x="0" y="-3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<pad name="NC" x="5.08" y="-3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<text x="-8.89" y="-5.08" size="1.27" layer="25" rot="R90">&gt;NAME</text>
<text x="3.81" y="-3.81" size="1.27" layer="27" rot="R90">&gt;VALUE</text>
<hole x="-7.62" y="3.81" drill="1.1"/>
<hole x="7.62" y="-3.81" drill="1.1"/>
</package>
<package name="5511" urn="urn:adsk.eagle:footprint:27647/1" library_version="1">
<description>&lt;b&gt;PUSHBUTTON SERIES 5511 SWITCHES&lt;/b&gt;&lt;p&gt;
Source: www.e-switch.com .. 5500.pdf</description>
<wire x1="-8.6549" y1="-8.5501" x2="-2.9649" y2="-8.5501" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="-8.5501" x2="8.6549" y2="-8.5501" width="0.2032" layer="21"/>
<wire x1="8.6549" y1="-8.5501" x2="8.6549" y2="8.5501" width="0.2032" layer="21"/>
<wire x1="8.6549" y1="8.5501" x2="-2.9649" y2="8.5501" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="8.5501" x2="-8.6549" y2="8.5501" width="0.2032" layer="21"/>
<wire x1="-8.6549" y1="8.5501" x2="-8.6549" y2="-8.5501" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="-8.5501" x2="-2.9649" y2="8.5501" width="0.2032" layer="21"/>
<wire x1="-2.9649" y1="-8.5501" x2="-1.27" y2="-7.149" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="-7.149" x2="-1.27" y2="7.149" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="7.149" x2="-2.9649" y2="8.5501" width="0.2032" layer="21"/>
<wire x1="8.6549" y1="-8.5501" x2="7.239" y2="-7.149" width="0.2032" layer="21"/>
<wire x1="7.239" y1="-7.149" x2="7.239" y2="7.149" width="0.2032" layer="21"/>
<wire x1="7.239" y1="7.149" x2="8.6549" y2="8.5501" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="7.149" x2="7.239" y2="7.149" width="0.2032" layer="21"/>
<wire x1="-1.27" y1="-7.149" x2="7.239" y2="-7.149" width="0.2032" layer="21"/>
<pad name="NO" x="5.08" y="3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<pad name="1A" x="0" y="3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<pad name="1B" x="0" y="-3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<pad name="NC" x="5.08" y="-3.81" drill="0.9" diameter="1.5" shape="square" rot="R90"/>
<text x="-8.89" y="-5.08" size="1.27" layer="25" rot="R90">&gt;NAME</text>
<text x="3.81" y="-3.81" size="1.27" layer="27" rot="R90">&gt;VALUE</text>
<hole x="-7.62" y="3.81" drill="1.1"/>
<hole x="7.62" y="-3.81" drill="1.1"/>
</package>
</packages>
<packages3d>
<package3d name="5501" urn="urn:adsk.eagle:package:27750/1" type="box" library_version="1">
<description>PUSHBUTTON SERIES 5500 SWITCHES
Source: www.e-switch.com .. 5500.pdf</description>
</package3d>
<package3d name="5511" urn="urn:adsk.eagle:package:27758/1" type="box" library_version="1">
<description>PUSHBUTTON SERIES 5511 SWITCHES
Source: www.e-switch.com .. 5500.pdf</description>
</package3d>
</packages3d>
<symbols>
<symbol name="NO-NC-2" urn="urn:adsk.eagle:symbol:27646/1" library_version="1">
<wire x1="-2.54" y1="0" x2="-2.54" y2="-2.54" width="0.1524" layer="94"/>
<wire x1="-1.27" y1="0" x2="3.048" y2="1.778" width="0.2032" layer="94"/>
<wire x1="0.762" y1="1.016" x2="0.762" y2="1.524" width="0.2032" layer="94"/>
<wire x1="0.762" y1="2.032" x2="0.762" y2="2.794" width="0.2032" layer="94"/>
<wire x1="0.762" y1="2.794" x2="0.762" y2="3.048" width="0.2032" layer="94"/>
<wire x1="0.762" y1="3.556" x2="0.762" y2="4.064" width="0.2032" layer="94"/>
<wire x1="1.27" y1="4.064" x2="0.762" y2="4.064" width="0.2032" layer="94"/>
<wire x1="0.762" y1="4.064" x2="0.254" y2="4.064" width="0.2032" layer="94"/>
<wire x1="0.254" y1="2.286" x2="0.762" y2="2.794" width="0.1524" layer="94"/>
<wire x1="0.762" y1="2.794" x2="1.27" y2="2.286" width="0.1524" layer="94"/>
<wire x1="-2.54" y1="0" x2="-1.27" y2="0" width="0.2032" layer="94"/>
<wire x1="2.54" y1="-1.778" x2="2.54" y2="-2.54" width="0.1524" layer="94"/>
<wire x1="2.54" y1="2.54" x2="2.54" y2="1.778" width="0.1524" layer="94"/>
<circle x="-2.54" y="0" radius="0.508" width="0" layer="94"/>
<text x="-3.048" y="4.826" size="1.778" layer="95">&gt;NAME</text>
<text x="-3.81" y="-5.588" size="1.778" layer="96">&gt;VALUE</text>
<pin name="1A" x="-5.08" y="0" visible="off" length="short" direction="pas" swaplevel="1"/>
<pin name="1B" x="-5.08" y="-2.54" visible="off" length="short" direction="pas" swaplevel="1"/>
<pin name="NO" x="5.08" y="-2.54" visible="off" length="short" direction="pas" swaplevel="2" rot="R180"/>
<pin name="NC" x="5.08" y="2.54" visible="off" length="short" direction="pas" swaplevel="2" rot="R180"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="55?" urn="urn:adsk.eagle:component:27846/1" prefix="S" library_version="1">
<description>&lt;b&gt;PUSHBUTTON SERIES 5500 SWITCHES&lt;/b&gt;&lt;p&gt;
Source: www.e-switch.com .. 5500.pdf</description>
<gates>
<gate name="G$1" symbol="NO-NC-2" x="0" y="0"/>
</gates>
<devices>
<device name="01" package="5501">
<connects>
<connect gate="G$1" pin="1A" pad="1A"/>
<connect gate="G$1" pin="1B" pad="1B"/>
<connect gate="G$1" pin="NC" pad="NC"/>
<connect gate="G$1" pin="NO" pad="NO"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:27750/1"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
<device name="11" package="5511">
<connects>
<connect gate="G$1" pin="1A" pad="1A"/>
<connect gate="G$1" pin="1B" pad="1B"/>
<connect gate="G$1" pin="NC" pad="NC"/>
<connect gate="G$1" pin="NO" pad="NO"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:27758/1"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="74xx-little-de" urn="urn:adsk.eagle:library:86">
<description>&lt;b&gt;Single and Dual Gates Family, US symbols&lt;/b&gt;&lt;p&gt;
Little logic devices from Texas Instruments&lt;br&gt;
TinyLogic(R) from FAIRCHILD Semiconductor TM
&lt;p&gt;
&lt;author&gt;Created by evgeni@eniks.com&lt;/author&gt;&lt;br&gt;
&lt;author&gt;Extended by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="SOT23-5" urn="urn:adsk.eagle:footprint:2364/1" library_version="1">
<description>&lt;b&gt;Small Outline Transistor&lt;/b&gt;&lt;p&gt;
SOT753 - Philips Semiconductors&lt;br&gt;
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
<wire x1="0" y1="-1.29" x2="0" y2="-1.3" width="0.01" layer="21"/>
<wire x1="1.42" y1="0.8" x2="1.42" y2="-0.8" width="0.127" layer="21"/>
<wire x1="1.42" y1="-0.8" x2="-1.42" y2="-0.8" width="0.127" layer="51"/>
<wire x1="-1.42" y1="-0.8" x2="-1.42" y2="0.8" width="0.127" layer="21"/>
<wire x1="-1.42" y1="0.8" x2="1.42" y2="0.8" width="0.127" layer="51"/>
<wire x1="-1.27" y1="0.65" x2="1.28" y2="0.65" width="0.075" layer="21"/>
<wire x1="1.28" y1="0.65" x2="1.28" y2="-0.66" width="0.075" layer="21"/>
<wire x1="1.28" y1="-0.66" x2="-1.27" y2="-0.66" width="0.075" layer="21"/>
<wire x1="-1.27" y1="-0.66" x2="-1.27" y2="0.65" width="0.075" layer="21"/>
<wire x1="-1.75" y1="2.25" x2="1.75" y2="2.25" width="0.254" layer="39"/>
<wire x1="1.75" y1="2.25" x2="1.75" y2="-2.25" width="0.254" layer="39"/>
<wire x1="1.75" y1="-2.25" x2="-1.75" y2="-2.25" width="0.254" layer="39"/>
<wire x1="-1.75" y1="-2.25" x2="-1.75" y2="2.25" width="0.254" layer="39"/>
<smd name="1" x="-0.95" y="-1.29" dx="0.69" dy="0.99" layer="1"/>
<smd name="2" x="0" y="-1.29" dx="0.69" dy="0.99" layer="1"/>
<smd name="3" x="0.95" y="-1.29" dx="0.69" dy="0.99" layer="1"/>
<smd name="4" x="0.95" y="1.3" dx="0.69" dy="0.99" layer="1"/>
<smd name="5" x="-0.95" y="1.3" dx="0.69" dy="0.99" layer="1"/>
<text x="-2.54" y="2.54" size="1.27" layer="25">&gt;NAME</text>
<text x="-2.54" y="-3.81" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="-1.11" y1="0.68" x2="-0.78" y2="1.43" layer="51"/>
<rectangle x1="0.79" y1="0.67" x2="1.12" y2="1.42" layer="51"/>
<rectangle x1="-1.11" y1="-1.42" x2="-0.78" y2="-0.67" layer="51"/>
<rectangle x1="-0.16" y1="-1.42" x2="0.17" y2="-0.67" layer="51"/>
<rectangle x1="0.79" y1="-1.42" x2="1.12" y2="-0.67" layer="51"/>
</package>
<package name="SC70-5" urn="urn:adsk.eagle:footprint:2365/1" library_version="1">
<description>&lt;b&gt;SMT SC70-5&lt;/b&gt;&lt;p&gt;
SOT353 - Philips Semiconductors&lt;br&gt;
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
<wire x1="1" y1="0.55" x2="-1" y2="0.55" width="0.127" layer="51"/>
<wire x1="-1" y1="0.55" x2="-1" y2="-0.55" width="0.127" layer="21"/>
<wire x1="-1" y1="-0.55" x2="1" y2="-0.55" width="0.127" layer="51"/>
<wire x1="1" y1="-0.55" x2="1" y2="0.55" width="0.127" layer="21"/>
<smd name="1" x="-0.65" y="-0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="2" x="0" y="-0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="3" x="0.65" y="-0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="4" x="0.65" y="0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="5" x="-0.65" y="0.85" dx="0.4" dy="0.7" layer="1"/>
<text x="-2.54" y="1.27" size="1.27" layer="25">&gt;NAME</text>
<text x="-2.54" y="-2.54" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="-0.125" y1="-1.05" x2="0.125" y2="-0.6" layer="51"/>
<rectangle x1="-0.775" y1="-1.05" x2="-0.525" y2="-0.6" layer="51"/>
<rectangle x1="0.525" y1="-1.05" x2="0.775" y2="-0.6" layer="51"/>
<rectangle x1="-0.775" y1="0.6" x2="-0.525" y2="1.05" layer="51"/>
<rectangle x1="0.525" y1="0.6" x2="0.775" y2="1.05" layer="51"/>
</package>
</packages>
<packages3d>
<package3d name="SOT23-5" urn="urn:adsk.eagle:package:2406/1" type="box" library_version="1">
<description>Small Outline Transistor
SOT753 - Philips Semiconductors
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
</package3d>
<package3d name="SC70-5" urn="urn:adsk.eagle:package:2405/1" type="box" library_version="1">
<description>SMT SC70-5
SOT353 - Philips Semiconductors
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
</package3d>
</packages3d>
<symbols>
<symbol name="PWRN" urn="urn:adsk.eagle:symbol:2363/1" library_version="1">
<text x="-0.635" y="-0.635" size="1.778" layer="95">&gt;NAME</text>
<text x="1.905" y="-6.35" size="1.27" layer="95" rot="R90">GND</text>
<text x="1.905" y="2.54" size="1.27" layer="95" rot="R90">VCC</text>
<pin name="GND" x="0" y="-7.62" visible="pad" length="middle" direction="pwr" rot="R90"/>
<pin name="VCC" x="0" y="7.62" visible="pad" length="middle" direction="pwr" rot="R270"/>
</symbol>
<symbol name="7404" urn="urn:adsk.eagle:symbol:2362/1" library_version="1">
<wire x1="-2.54" y1="5.08" x2="5.08" y2="0" width="0.4064" layer="94"/>
<wire x1="5.08" y1="0" x2="-2.54" y2="-5.08" width="0.4064" layer="94"/>
<wire x1="-2.54" y1="-5.08" x2="-2.54" y2="5.08" width="0.4064" layer="94"/>
<text x="2.54" y="3.175" size="1.778" layer="95">&gt;NAME</text>
<text x="2.54" y="-5.08" size="1.778" layer="96">&gt;VALUE</text>
<pin name="I" x="-5.08" y="0" visible="pad" length="short" direction="in"/>
<pin name="O" x="10.16" y="0" visible="pad" length="middle" direction="out" function="dot" rot="R180"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="74*1G04" urn="urn:adsk.eagle:component:2423/1" prefix="IC" library_version="1">
<description>&lt;b&gt;INVERTER&lt;/b&gt; Gate</description>
<gates>
<gate name="A" symbol="7404" x="17.78" y="0"/>
<gate name="P" symbol="PWRN" x="-5.08" y="-10.16" addlevel="request"/>
</gates>
<devices>
<device name="DBV" package="SOT23-5">
<connects>
<connect gate="A" pin="I" pad="2"/>
<connect gate="A" pin="O" pad="4"/>
<connect gate="P" pin="GND" pad="3"/>
<connect gate="P" pin="VCC" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:2406/1"/>
</package3dinstances>
<technologies>
<technology name="AHC"/>
<technology name="AHCT"/>
<technology name="AUC"/>
<technology name="LVC"/>
</technologies>
</device>
<device name="DCK" package="SC70-5">
<connects>
<connect gate="A" pin="I" pad="2"/>
<connect gate="A" pin="O" pad="4"/>
<connect gate="P" pin="GND" pad="3"/>
<connect gate="P" pin="VCC" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:2405/1"/>
</package3dinstances>
<technologies>
<technology name="AHC"/>
<technology name="AHCT"/>
<technology name="AUC"/>
<technology name="LVC"/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="pinhead" urn="urn:adsk.eagle:library:325">
<description>&lt;b&gt;Pin Header Connectors&lt;/b&gt;&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="1X01" urn="urn:adsk.eagle:footprint:22382/1" library_version="2">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<wire x1="-0.635" y1="1.27" x2="0.635" y2="1.27" width="0.1524" layer="21"/>
<wire x1="0.635" y1="1.27" x2="1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="0.635" x2="1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-0.635" x2="0.635" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="0.635" x2="-1.27" y2="-0.635" width="0.1524" layer="21"/>
<wire x1="-0.635" y1="1.27" x2="-1.27" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-1.27" y1="-0.635" x2="-0.635" y2="-1.27" width="0.1524" layer="21"/>
<wire x1="0.635" y1="-1.27" x2="-0.635" y2="-1.27" width="0.1524" layer="21"/>
<pad name="1" x="0" y="0" drill="1.016" shape="octagon"/>
<text x="-1.3462" y="1.8288" size="1.27" layer="25" ratio="10">&gt;NAME</text>
<text x="-1.27" y="-3.175" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="-0.254" y1="-0.254" x2="0.254" y2="0.254" layer="51"/>
</package>
</packages>
<packages3d>
<package3d name="1X01" urn="urn:adsk.eagle:package:22485/1" type="box" library_version="2">
<description>PIN HEADER</description>
</package3d>
</packages3d>
<symbols>
<symbol name="PINHD1" urn="urn:adsk.eagle:symbol:22381/1" library_version="2">
<wire x1="-6.35" y1="-2.54" x2="1.27" y2="-2.54" width="0.4064" layer="94"/>
<wire x1="1.27" y1="-2.54" x2="1.27" y2="2.54" width="0.4064" layer="94"/>
<wire x1="1.27" y1="2.54" x2="-6.35" y2="2.54" width="0.4064" layer="94"/>
<wire x1="-6.35" y1="2.54" x2="-6.35" y2="-2.54" width="0.4064" layer="94"/>
<text x="-6.35" y="3.175" size="1.778" layer="95">&gt;NAME</text>
<text x="-6.35" y="-5.08" size="1.778" layer="96">&gt;VALUE</text>
<pin name="1" x="-2.54" y="0" visible="pad" length="short" direction="pas" function="dot"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="PINHD-1X1" urn="urn:adsk.eagle:component:22540/1" prefix="JP" uservalue="yes" library_version="2">
<description>&lt;b&gt;PIN HEADER&lt;/b&gt;</description>
<gates>
<gate name="G$1" symbol="PINHD1" x="0" y="0"/>
</gates>
<devices>
<device name="" package="1X01">
<connects>
<connect gate="G$1" pin="1" pad="1"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:22485/1"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="relay" urn="urn:adsk.eagle:library:339">
<description>&lt;b&gt;Relays&lt;/b&gt;&lt;p&gt;
&lt;ul&gt;
&lt;li&gt;Eichhoff
&lt;li&gt;Finder
&lt;li&gt;Fujitsu
&lt;li&gt;HAMLIN
&lt;li&gt;OMRON
&lt;li&gt;Matsushita
&lt;li&gt;NAiS
&lt;li&gt;Siemens
&lt;li&gt;Schrack
&lt;/ul&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="G6C-1117P" urn="urn:adsk.eagle:footprint:23972/1" library_version="1">
<description>&lt;b&gt;RELAY&lt;/b&gt;&lt;p&gt;
1 x norm. open, 10 A/240 V, Omron</description>
<wire x1="-10.033" y1="7.366" x2="-10.033" y2="5.969" width="0.1524" layer="21"/>
<wire x1="-10.033" y1="5.969" x2="-10.033" y2="4.191" width="0.1524" layer="51"/>
<wire x1="-10.033" y1="4.191" x2="-10.033" y2="-4.191" width="0.1524" layer="21"/>
<wire x1="-10.033" y1="-4.191" x2="-10.033" y2="-5.969" width="0.1524" layer="51"/>
<wire x1="-10.033" y1="-5.969" x2="-10.033" y2="-7.366" width="0.1524" layer="21"/>
<wire x1="-10.033" y1="-7.366" x2="10.033" y2="-7.366" width="0.1524" layer="21"/>
<wire x1="10.033" y1="-7.366" x2="10.033" y2="-5.969" width="0.1524" layer="21"/>
<wire x1="10.033" y1="-5.969" x2="10.033" y2="-4.191" width="0.1524" layer="51"/>
<wire x1="10.033" y1="-4.191" x2="10.033" y2="7.366" width="0.1524" layer="21"/>
<wire x1="10.033" y1="7.366" x2="-10.033" y2="7.366" width="0.1524" layer="21"/>
<wire x1="-7.493" y1="5.08" x2="-6.35" y2="5.08" width="0.1524" layer="21"/>
<wire x1="-6.35" y1="5.08" x2="-6.35" y2="0.635" width="0.1524" layer="21"/>
<wire x1="-6.35" y1="0.635" x2="-7.62" y2="0.635" width="0.254" layer="21"/>
<wire x1="-7.62" y1="0.635" x2="-7.62" y2="-0.635" width="0.254" layer="21"/>
<wire x1="-5.08" y1="-0.635" x2="-5.08" y2="0.635" width="0.254" layer="21"/>
<wire x1="-5.08" y1="0.635" x2="-6.35" y2="0.635" width="0.254" layer="21"/>
<wire x1="-7.62" y1="-0.635" x2="-6.35" y2="-0.635" width="0.254" layer="21"/>
<wire x1="-6.35" y1="-0.635" x2="-6.35" y2="-5.08" width="0.1524" layer="21"/>
<wire x1="-6.35" y1="-0.635" x2="-5.08" y2="-0.635" width="0.254" layer="21"/>
<wire x1="-6.35" y1="-5.08" x2="-7.493" y2="-5.08" width="0.1524" layer="21"/>
<wire x1="-7.62" y1="-0.635" x2="-5.08" y2="0.635" width="0.1524" layer="21"/>
<wire x1="8.89" y1="-3.683" x2="8.89" y2="-2.54" width="0.1524" layer="21"/>
<wire x1="6.223" y1="-1.397" x2="3.81" y2="-2.54" width="0.1524" layer="21"/>
<wire x1="3.81" y1="-2.54" x2="1.27" y2="-2.54" width="0.1524" layer="21"/>
<wire x1="1.27" y1="-2.54" x2="1.27" y2="-3.683" width="0.1524" layer="21"/>
<wire x1="8.89" y1="-2.54" x2="6.35" y2="-2.54" width="0.1524" layer="21"/>
<pad name="1" x="-8.89" y="-5.08" drill="1.1176" shape="long" rot="R90"/>
<pad name="8" x="-8.89" y="5.08" drill="1.1176" shape="long" rot="R90"/>
<pad name="P" x="1.27" y="-5.08" drill="1.1176" shape="long" rot="R90"/>
<pad name="S" x="8.89" y="-5.08" drill="1.1176" shape="long" rot="R90"/>
<text x="12.319" y="-7.366" size="1.778" layer="25" ratio="10" rot="R90">&gt;NAME</text>
<text x="-2.54" y="0" size="1.778" layer="27" ratio="10">&gt;VALUE</text>
<text x="-2.54" y="2.54" size="1.778" layer="51" ratio="10">G6C</text>
<text x="-8.001" y="-3.81" size="1.27" layer="21" ratio="10">1</text>
<text x="-8.001" y="2.54" size="1.27" layer="21" ratio="10">8</text>
<text x="-5.715" y="1.27" size="1.27" layer="21" ratio="10">+</text>
</package>
</packages>
<packages3d>
<package3d name="G6C-1117P" urn="urn:adsk.eagle:package:24312/1" type="box" library_version="1">
<description>RELAY
1 x norm. open, 10 A/240 V, Omron</description>
</package3d>
</packages3d>
<symbols>
<symbol name="K" urn="urn:adsk.eagle:symbol:23941/1" library_version="1">
<wire x1="-3.81" y1="-1.905" x2="-1.905" y2="-1.905" width="0.254" layer="94"/>
<wire x1="3.81" y1="-1.905" x2="3.81" y2="1.905" width="0.254" layer="94"/>
<wire x1="3.81" y1="1.905" x2="1.905" y2="1.905" width="0.254" layer="94"/>
<wire x1="-3.81" y1="1.905" x2="-3.81" y2="-1.905" width="0.254" layer="94"/>
<wire x1="0" y1="-2.54" x2="0" y2="-1.905" width="0.1524" layer="94"/>
<wire x1="0" y1="-1.905" x2="3.81" y2="-1.905" width="0.254" layer="94"/>
<wire x1="0" y1="2.54" x2="0" y2="1.905" width="0.1524" layer="94"/>
<wire x1="0" y1="1.905" x2="-3.81" y2="1.905" width="0.254" layer="94"/>
<wire x1="-1.905" y1="-1.905" x2="1.905" y2="1.905" width="0.1524" layer="94"/>
<wire x1="-1.905" y1="-1.905" x2="0" y2="-1.905" width="0.254" layer="94"/>
<wire x1="1.905" y1="1.905" x2="0" y2="1.905" width="0.254" layer="94"/>
<text x="1.27" y="2.921" size="1.778" layer="96">&gt;VALUE</text>
<text x="1.27" y="5.08" size="1.778" layer="95">&gt;PART</text>
<pin name="2" x="0" y="-5.08" visible="pad" length="short" direction="pas" rot="R90"/>
<pin name="1" x="0" y="5.08" visible="pad" length="short" direction="pas" rot="R270"/>
</symbol>
<symbol name="S" urn="urn:adsk.eagle:symbol:23960/1" library_version="1">
<wire x1="0" y1="3.175" x2="0" y2="1.905" width="0.254" layer="94"/>
<wire x1="0" y1="-3.175" x2="0" y2="-1.905" width="0.254" layer="94"/>
<wire x1="0" y1="-1.905" x2="-1.27" y2="1.905" width="0.254" layer="94"/>
<circle x="0" y="-1.905" radius="0.127" width="0.4064" layer="94"/>
<text x="-2.54" y="-2.54" size="1.778" layer="95" rot="R90">&gt;PART</text>
<pin name="P" x="0" y="-5.08" visible="pad" length="short" direction="pas" swaplevel="1" rot="R90"/>
<pin name="S" x="0" y="5.08" visible="pad" length="short" direction="pas" swaplevel="1" rot="R270"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="G6C-1117P" urn="urn:adsk.eagle:component:24586/1" prefix="K" library_version="1">
<description>&lt;b&gt;RELAY&lt;/b&gt;&lt;p&gt;
1 x norm. open, 10 A/240 V, Omron</description>
<gates>
<gate name="1" symbol="K" x="0" y="0" addlevel="must"/>
<gate name="2" symbol="S" x="15.24" y="0" addlevel="always"/>
</gates>
<devices>
<device name="" package="G6C-1117P">
<connects>
<connect gate="1" pin="1" pad="1"/>
<connect gate="1" pin="2" pad="8"/>
<connect gate="2" pin="P" pad="P"/>
<connect gate="2" pin="S" pad="S"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:24312/1"/>
</package3dinstances>
<technologies>
<technology name="">
<attribute name="MF" value="" constant="no"/>
<attribute name="MPN" value="" constant="no"/>
<attribute name="OC_FARNELL" value="unknown" constant="no"/>
<attribute name="OC_NEWARK" value="unknown" constant="no"/>
</technology>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="74xx-little-us" urn="urn:adsk.eagle:library:87">
<description>&lt;b&gt;Single and Dual Gates Family, US symbols&lt;/b&gt;&lt;p&gt;
Little logic devices from Texas Instruments&lt;br&gt;
TinyLogic(R) from FAIRCHILD Semiconductor TM
&lt;p&gt;
&lt;author&gt;Created by evgeni@eniks.com&lt;/author&gt;&lt;br&gt;
&lt;author&gt;Extended by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="SOT23-5" urn="urn:adsk.eagle:footprint:2446/1" library_version="1">
<description>&lt;b&gt;Small Outline Transistor&lt;/b&gt;&lt;p&gt;
SOT753 - Philips Semiconductors&lt;br&gt;
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
<wire x1="0" y1="-1.29" x2="0" y2="-1.3" width="0.01" layer="21"/>
<wire x1="1.42" y1="0.8" x2="1.42" y2="-0.8" width="0.127" layer="21"/>
<wire x1="1.42" y1="-0.8" x2="-1.42" y2="-0.8" width="0.127" layer="51"/>
<wire x1="-1.42" y1="-0.8" x2="-1.42" y2="0.8" width="0.127" layer="21"/>
<wire x1="-1.42" y1="0.8" x2="1.42" y2="0.8" width="0.127" layer="51"/>
<wire x1="-1.27" y1="0.65" x2="1.28" y2="0.65" width="0.075" layer="21"/>
<wire x1="1.28" y1="0.65" x2="1.28" y2="-0.66" width="0.075" layer="21"/>
<wire x1="1.28" y1="-0.66" x2="-1.27" y2="-0.66" width="0.075" layer="21"/>
<wire x1="-1.27" y1="-0.66" x2="-1.27" y2="0.65" width="0.075" layer="21"/>
<wire x1="-1.75" y1="2.25" x2="1.75" y2="2.25" width="0.254" layer="39"/>
<wire x1="1.75" y1="2.25" x2="1.75" y2="-2.25" width="0.254" layer="39"/>
<wire x1="1.75" y1="-2.25" x2="-1.75" y2="-2.25" width="0.254" layer="39"/>
<wire x1="-1.75" y1="-2.25" x2="-1.75" y2="2.25" width="0.254" layer="39"/>
<smd name="1" x="-0.95" y="-1.29" dx="0.69" dy="0.99" layer="1"/>
<smd name="2" x="0" y="-1.29" dx="0.69" dy="0.99" layer="1"/>
<smd name="3" x="0.95" y="-1.29" dx="0.69" dy="0.99" layer="1"/>
<smd name="4" x="0.95" y="1.3" dx="0.69" dy="0.99" layer="1"/>
<smd name="5" x="-0.95" y="1.3" dx="0.69" dy="0.99" layer="1"/>
<text x="-2.54" y="2.54" size="1.27" layer="25">&gt;NAME</text>
<text x="-2.54" y="-3.81" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="-1.11" y1="0.68" x2="-0.78" y2="1.43" layer="51"/>
<rectangle x1="0.79" y1="0.67" x2="1.12" y2="1.42" layer="51"/>
<rectangle x1="-1.11" y1="-1.42" x2="-0.78" y2="-0.67" layer="51"/>
<rectangle x1="-0.16" y1="-1.42" x2="0.17" y2="-0.67" layer="51"/>
<rectangle x1="0.79" y1="-1.42" x2="1.12" y2="-0.67" layer="51"/>
</package>
<package name="SC70-5" urn="urn:adsk.eagle:footprint:2447/1" library_version="1">
<description>&lt;b&gt;SMT SC70-5&lt;/b&gt;&lt;p&gt;
SOT353 - Philips Semiconductors&lt;br&gt;
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
<wire x1="1" y1="0.55" x2="-1" y2="0.55" width="0.127" layer="51"/>
<wire x1="-1" y1="0.55" x2="-1" y2="-0.55" width="0.127" layer="21"/>
<wire x1="-1" y1="-0.55" x2="1" y2="-0.55" width="0.127" layer="51"/>
<wire x1="1" y1="-0.55" x2="1" y2="0.55" width="0.127" layer="21"/>
<smd name="1" x="-0.65" y="-0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="2" x="0" y="-0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="3" x="0.65" y="-0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="4" x="0.65" y="0.85" dx="0.4" dy="0.7" layer="1"/>
<smd name="5" x="-0.65" y="0.85" dx="0.4" dy="0.7" layer="1"/>
<text x="-2.54" y="1.27" size="1.27" layer="25">&gt;NAME</text>
<text x="-2.54" y="-2.54" size="1.27" layer="27">&gt;VALUE</text>
<rectangle x1="-0.125" y1="-1.05" x2="0.125" y2="-0.6" layer="51"/>
<rectangle x1="-0.775" y1="-1.05" x2="-0.525" y2="-0.6" layer="51"/>
<rectangle x1="0.525" y1="-1.05" x2="0.775" y2="-0.6" layer="51"/>
<rectangle x1="-0.775" y1="0.6" x2="-0.525" y2="1.05" layer="51"/>
<rectangle x1="0.525" y1="0.6" x2="0.775" y2="1.05" layer="51"/>
</package>
</packages>
<packages3d>
<package3d name="SOT23-5" urn="urn:adsk.eagle:package:2482/1" type="box" library_version="1">
<description>Small Outline Transistor
SOT753 - Philips Semiconductors
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
</package3d>
<package3d name="SC70-5" urn="urn:adsk.eagle:package:2483/1" type="box" library_version="1">
<description>SMT SC70-5
SOT353 - Philips Semiconductors
Source: http://www.semiconductors.philips.com/acrobat_download/datasheets/74HC_HCT1G66_3.pdf</description>
</package3d>
</packages3d>
<symbols>
<symbol name="7402" urn="urn:adsk.eagle:symbol:2450/1" library_version="1">
<wire x1="-1.27" y1="5.08" x2="-7.62" y2="5.08" width="0.4064" layer="94"/>
<wire x1="-1.27" y1="-5.08" x2="-7.62" y2="-5.08" width="0.4064" layer="94"/>
<wire x1="-7.62" y1="2.54" x2="-6.096" y2="2.54" width="0.1524" layer="94"/>
<wire x1="-7.62" y1="-2.54" x2="-6.096" y2="-2.54" width="0.1524" layer="94"/>
<wire x1="-1.2446" y1="-5.0678" x2="7.5439" y2="0.0507" width="0.4064" layer="94" curve="60.147106" cap="flat"/>
<wire x1="-1.2446" y1="5.0678" x2="7.5442" y2="-0.0505" width="0.4064" layer="94" curve="-60.148802" cap="flat"/>
<wire x1="-7.62" y1="5.08" x2="-7.62" y2="-5.08" width="0.4064" layer="94" curve="-90"/>
<text x="-7.62" y="5.715" size="1.778" layer="95">&gt;NAME</text>
<text x="-7.62" y="-7.62" size="1.778" layer="96">&gt;VALUE</text>
<pin name="O" x="12.7" y="0" visible="pad" length="middle" direction="out" function="dot" rot="R180"/>
<pin name="I0" x="-12.7" y="2.54" visible="pad" length="middle" direction="in" swaplevel="1"/>
<pin name="I1" x="-12.7" y="-2.54" visible="pad" length="middle" direction="in" swaplevel="1"/>
</symbol>
<symbol name="PWRN" urn="urn:adsk.eagle:symbol:2445/1" library_version="1">
<text x="-0.635" y="-0.635" size="1.778" layer="95">&gt;NAME</text>
<text x="1.905" y="-6.35" size="1.27" layer="95" rot="R90">GND</text>
<text x="1.905" y="2.54" size="1.27" layer="95" rot="R90">VCC</text>
<pin name="GND" x="0" y="-7.62" visible="pad" length="middle" direction="pwr" rot="R90"/>
<pin name="VCC" x="0" y="7.62" visible="pad" length="middle" direction="pwr" rot="R270"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="74*1G02" urn="urn:adsk.eagle:component:2502/1" prefix="IC" library_version="1">
<description>2-input &lt;b&gt;NOR&lt;/b&gt; gate</description>
<gates>
<gate name="A" symbol="7402" x="12.7" y="5.08"/>
<gate name="P" symbol="PWRN" x="-5.08" y="0" addlevel="request"/>
</gates>
<devices>
<device name="DBV" package="SOT23-5">
<connects>
<connect gate="A" pin="I0" pad="1"/>
<connect gate="A" pin="I1" pad="2"/>
<connect gate="A" pin="O" pad="4"/>
<connect gate="P" pin="GND" pad="3"/>
<connect gate="P" pin="VCC" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:2482/1"/>
</package3dinstances>
<technologies>
<technology name="AHC"/>
<technology name="AHCT"/>
<technology name="AUC"/>
<technology name="LVC"/>
</technologies>
</device>
<device name="DCK" package="SC70-5">
<connects>
<connect gate="A" pin="I0" pad="1"/>
<connect gate="A" pin="I1" pad="2"/>
<connect gate="A" pin="O" pad="4"/>
<connect gate="P" pin="GND" pad="3"/>
<connect gate="P" pin="VCC" pad="5"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:2483/1"/>
</package3dinstances>
<technologies>
<technology name="AHC"/>
<technology name="AHCT"/>
<technology name="AUC"/>
<technology name="LVC"/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
<library name="con-pc104" urn="urn:adsk.eagle:library:171">
<description>&lt;b&gt;PC/104 Standard/Plus connector&lt;/b&gt;&lt;p&gt;
Sources :
&lt;ul&gt;
&lt;li&gt;&lt;b&gt;pc104standard.pdf&lt;/b&gt;&lt;p&gt;
PC/104 Specification, Version 2.3, June 1996&lt;p&gt;
Copyright 1992-96, PC/104 Consortium
&lt;li&gt;&lt;b&gt;PC104plus.pdf&lt;/b&gt;&lt;p&gt;
PC/104-Plus Specification, Version 1.1, June 1997&lt;p&gt;
Copyright 1992-98, PC/104 Consortium
&lt;/ul&gt;
include &lt;b&gt;Commcon Connector PC/104&lt;/b&gt;, con-commcon.lbr&lt;p&gt;
&lt;author&gt;Created by librarian@cadsoft.de&lt;/author&gt;</description>
<packages>
<package name="1184C" urn="urn:adsk.eagle:footprint:9294/1" library_version="1">
<description>&lt;b&gt;COMMCON CONNECTOR PC/104&lt;/b&gt;</description>
<wire x1="-40.64" y1="0" x2="-30.48" y2="0" width="0.254" layer="21"/>
<wire x1="-30.48" y1="0" x2="-30.48" y2="5.08" width="0.254" layer="21"/>
<wire x1="-30.48" y1="5.08" x2="20.32" y2="5.08" width="0.254" layer="21"/>
<wire x1="20.32" y1="5.08" x2="20.32" y2="0" width="0.254" layer="21"/>
<wire x1="20.32" y1="0" x2="40.64" y2="0" width="0.254" layer="21"/>
<wire x1="40.64" y1="0" x2="40.64" y2="-5.08" width="0.254" layer="21"/>
<wire x1="40.64" y1="-5.08" x2="-40.64" y2="-5.08" width="0.254" layer="21"/>
<wire x1="-40.64" y1="-5.08" x2="-40.64" y2="0" width="0.254" layer="21"/>
<pad name="A1" x="-39.37" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B1" x="-39.37" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A2" x="-36.83" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B2" x="-36.83" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A3" x="-34.29" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B3" x="-34.29" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A4" x="-31.75" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B4" x="-31.75" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A5" x="-29.21" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B5" x="-29.21" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A6" x="-26.67" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B6" x="-26.67" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A7" x="-24.13" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B7" x="-24.13" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A8" x="-21.59" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B8" x="-21.59" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A9" x="-19.05" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B9" x="-19.05" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A10" x="-16.51" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B10" x="-16.51" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A11" x="-13.97" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B11" x="-13.97" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A12" x="-11.43" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B12" x="-11.43" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A13" x="-8.89" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B13" x="-8.89" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A14" x="-6.35" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B14" x="-6.35" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A15" x="-3.81" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B15" x="-3.81" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A16" x="-1.27" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B16" x="-1.27" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A17" x="1.27" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B17" x="1.27" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A18" x="3.81" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B18" x="3.81" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A19" x="6.35" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B19" x="6.35" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A20" x="8.89" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B20" x="8.89" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A21" x="11.43" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B21" x="11.43" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A22" x="13.97" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B22" x="13.97" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A23" x="16.51" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B23" x="16.51" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A24" x="19.05" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B24" x="19.05" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A25" x="21.59" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B25" x="21.59" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A26" x="24.13" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B26" x="24.13" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A27" x="26.67" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B27" x="26.67" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A28" x="29.21" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B28" x="29.21" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A29" x="31.75" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B29" x="31.75" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A30" x="34.29" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B30" x="34.29" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A31" x="36.83" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B31" x="36.83" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A32" x="39.37" y="-1.27" drill="1.1176" shape="octagon"/>
<pad name="B32" x="39.37" y="-3.81" drill="1.1176" shape="octagon"/>
<pad name="A33" x="-29.21" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B33" x="-29.21" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A34" x="-26.67" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B34" x="-26.67" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A35" x="-24.13" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B35" x="-24.13" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A36" x="-21.59" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B36" x="-21.59" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A37" x="-19.05" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B37" x="-19.05" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A38" x="-16.51" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B38" x="-16.51" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A39" x="-13.97" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B39" x="-13.97" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A40" x="-11.43" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B40" x="-11.43" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A41" x="-8.89" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B41" x="-8.89" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A42" x="-6.35" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B42" x="-6.35" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A43" x="-3.81" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B43" x="-3.81" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A44" x="-1.27" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B44" x="-1.27" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A45" x="1.27" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B45" x="1.27" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A46" x="3.81" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B46" x="3.81" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A47" x="6.35" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B47" x="6.35" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A48" x="8.89" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B48" x="8.89" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A49" x="11.43" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B49" x="11.43" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A50" x="13.97" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B50" x="13.97" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A51" x="16.51" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B51" x="16.51" y="1.27" drill="1.1176" shape="octagon"/>
<pad name="A52" x="19.05" y="3.81" drill="1.1176" shape="octagon"/>
<pad name="B52" x="19.05" y="1.27" drill="1.1176" shape="octagon"/>
<text x="21.59" y="3.81" size="1.27" layer="25">&gt;NAME</text>
<text x="21.59" y="1.27" size="1.27" layer="27">&gt;VALUE</text>
</package>
</packages>
<packages3d>
<package3d name="1184C" urn="urn:adsk.eagle:package:9300/1" type="box" library_version="1">
<description>COMMCON CONNECTOR PC/104</description>
</package3d>
</packages3d>
<symbols>
<symbol name="PIN-V" urn="urn:adsk.eagle:symbol:9292/1" library_version="1">
<wire x1="1.016" y1="0.508" x2="0" y2="0.508" width="0.3048" layer="94"/>
<wire x1="0" y1="0.508" x2="0" y2="-0.508" width="0.3048" layer="94"/>
<wire x1="0" y1="-0.508" x2="1.016" y2="-0.508" width="0.3048" layer="94"/>
<text x="1.524" y="-0.762" size="1.778" layer="95">&gt;NAME</text>
<text x="2.54" y="2.54" size="1.778" layer="96">&gt;VALUE</text>
<pin name="1" x="-2.54" y="0" visible="off" length="short" direction="pas"/>
</symbol>
<symbol name="PIN-B" urn="urn:adsk.eagle:symbol:9293/1" library_version="1">
<wire x1="1.016" y1="0.508" x2="0" y2="0.508" width="0.3048" layer="94"/>
<wire x1="0" y1="0.508" x2="0" y2="-0.508" width="0.3048" layer="94"/>
<wire x1="0" y1="-0.508" x2="1.016" y2="-0.508" width="0.3048" layer="94"/>
<text x="1.524" y="-0.762" size="1.778" layer="95">&gt;NAME</text>
<pin name="1" x="-2.54" y="0" visible="off" length="short" direction="pas"/>
</symbol>
</symbols>
<devicesets>
<deviceset name="1184C" urn="urn:adsk.eagle:component:9302/1" prefix="X" uservalue="yes" library_version="1">
<description>&lt;b&gt;COMMCON CONNECTOR PC/104&lt;/b&gt;</description>
<gates>
<gate name="-A1" symbol="PIN-V" x="-5.08" y="38.1" swaplevel="1"/>
<gate name="-A2" symbol="PIN-B" x="-5.08" y="35.56" addlevel="always" swaplevel="1"/>
<gate name="-A3" symbol="PIN-B" x="-5.08" y="33.02" addlevel="always" swaplevel="1"/>
<gate name="-A4" symbol="PIN-B" x="-5.08" y="30.48" addlevel="always" swaplevel="1"/>
<gate name="-A5" symbol="PIN-B" x="-5.08" y="27.94" addlevel="always" swaplevel="1"/>
<gate name="-A6" symbol="PIN-B" x="-5.08" y="25.4" addlevel="always" swaplevel="1"/>
<gate name="-A7" symbol="PIN-B" x="-5.08" y="22.86" addlevel="always" swaplevel="1"/>
<gate name="-A8" symbol="PIN-B" x="-5.08" y="20.32" addlevel="always" swaplevel="1"/>
<gate name="-A9" symbol="PIN-B" x="-5.08" y="17.78" addlevel="always" swaplevel="1"/>
<gate name="-A10" symbol="PIN-B" x="-5.08" y="15.24" addlevel="always" swaplevel="1"/>
<gate name="-A11" symbol="PIN-B" x="-5.08" y="12.7" addlevel="always" swaplevel="1"/>
<gate name="-A12" symbol="PIN-B" x="-5.08" y="10.16" addlevel="always" swaplevel="1"/>
<gate name="-A13" symbol="PIN-B" x="-5.08" y="7.62" addlevel="always" swaplevel="1"/>
<gate name="-A14" symbol="PIN-B" x="-5.08" y="5.08" addlevel="always" swaplevel="1"/>
<gate name="-A15" symbol="PIN-B" x="-5.08" y="2.54" addlevel="always" swaplevel="1"/>
<gate name="-A16" symbol="PIN-B" x="-5.08" y="0" addlevel="always" swaplevel="1"/>
<gate name="-A17" symbol="PIN-B" x="-5.08" y="-2.54" addlevel="always" swaplevel="1"/>
<gate name="-A18" symbol="PIN-B" x="-5.08" y="-5.08" addlevel="always" swaplevel="1"/>
<gate name="-A19" symbol="PIN-B" x="-5.08" y="-7.62" addlevel="always" swaplevel="1"/>
<gate name="-A20" symbol="PIN-B" x="-5.08" y="-10.16" addlevel="always" swaplevel="1"/>
<gate name="-A21" symbol="PIN-B" x="-5.08" y="-12.7" addlevel="always" swaplevel="1"/>
<gate name="-A22" symbol="PIN-B" x="-5.08" y="-15.24" addlevel="always" swaplevel="1"/>
<gate name="-A23" symbol="PIN-B" x="-5.08" y="-17.78" addlevel="always" swaplevel="1"/>
<gate name="-A24" symbol="PIN-B" x="-5.08" y="-20.32" addlevel="always" swaplevel="1"/>
<gate name="-A25" symbol="PIN-B" x="-5.08" y="-22.86" addlevel="always" swaplevel="1"/>
<gate name="-A26" symbol="PIN-B" x="-5.08" y="-25.4" addlevel="always" swaplevel="1"/>
<gate name="-A27" symbol="PIN-B" x="-5.08" y="-27.94" addlevel="always" swaplevel="1"/>
<gate name="-A28" symbol="PIN-B" x="-5.08" y="-30.48" addlevel="always" swaplevel="1"/>
<gate name="-A29" symbol="PIN-B" x="-5.08" y="-33.02" addlevel="always" swaplevel="1"/>
<gate name="-A30" symbol="PIN-B" x="-5.08" y="-35.56" addlevel="always" swaplevel="1"/>
<gate name="-A31" symbol="PIN-B" x="-5.08" y="-38.1" addlevel="always" swaplevel="1"/>
<gate name="-A32" symbol="PIN-B" x="-5.08" y="-40.64" addlevel="always" swaplevel="1"/>
<gate name="-B1" symbol="PIN-V" x="17.78" y="38.1" addlevel="always" swaplevel="1"/>
<gate name="-B2" symbol="PIN-B" x="17.78" y="35.56" addlevel="always" swaplevel="1"/>
<gate name="-B3" symbol="PIN-B" x="17.78" y="33.02" addlevel="always" swaplevel="1"/>
<gate name="-B4" symbol="PIN-B" x="17.78" y="30.48" addlevel="always" swaplevel="1"/>
<gate name="-B5" symbol="PIN-B" x="17.78" y="27.94" addlevel="always" swaplevel="1"/>
<gate name="-B6" symbol="PIN-B" x="17.78" y="25.4" addlevel="always" swaplevel="1"/>
<gate name="-B7" symbol="PIN-B" x="17.78" y="22.86" addlevel="always" swaplevel="1"/>
<gate name="-B8" symbol="PIN-B" x="17.78" y="20.32" addlevel="always" swaplevel="1"/>
<gate name="-B9" symbol="PIN-B" x="17.78" y="17.78" addlevel="always" swaplevel="1"/>
<gate name="-B10" symbol="PIN-B" x="17.78" y="15.24" addlevel="always" swaplevel="1"/>
<gate name="-B11" symbol="PIN-B" x="17.78" y="12.7" addlevel="always" swaplevel="1"/>
<gate name="-B12" symbol="PIN-B" x="17.78" y="10.16" addlevel="always" swaplevel="1"/>
<gate name="-B13" symbol="PIN-B" x="17.78" y="7.62" addlevel="always" swaplevel="1"/>
<gate name="-B14" symbol="PIN-B" x="17.78" y="5.08" addlevel="always" swaplevel="1"/>
<gate name="-B15" symbol="PIN-B" x="17.78" y="2.54" addlevel="always" swaplevel="1"/>
<gate name="-B16" symbol="PIN-B" x="17.78" y="0" addlevel="always" swaplevel="1"/>
<gate name="-B17" symbol="PIN-B" x="17.78" y="-2.54" addlevel="always" swaplevel="1"/>
<gate name="-B18" symbol="PIN-B" x="17.78" y="-5.08" addlevel="always" swaplevel="1"/>
<gate name="-B19" symbol="PIN-B" x="17.78" y="-7.62" addlevel="always" swaplevel="1"/>
<gate name="-B20" symbol="PIN-B" x="17.78" y="-10.16" addlevel="always" swaplevel="1"/>
<gate name="-B21" symbol="PIN-B" x="17.78" y="-12.7" addlevel="always" swaplevel="1"/>
<gate name="-B22" symbol="PIN-B" x="17.78" y="-15.24" addlevel="always" swaplevel="1"/>
<gate name="-B23" symbol="PIN-B" x="17.78" y="-17.78" addlevel="always" swaplevel="1"/>
<gate name="-B24" symbol="PIN-B" x="17.78" y="-20.32" addlevel="always" swaplevel="1"/>
<gate name="-B25" symbol="PIN-B" x="17.78" y="-22.86" addlevel="always" swaplevel="1"/>
<gate name="-B26" symbol="PIN-B" x="17.78" y="-25.4" addlevel="always" swaplevel="1"/>
<gate name="-B27" symbol="PIN-B" x="17.78" y="-27.94" addlevel="always" swaplevel="1"/>
<gate name="-B28" symbol="PIN-B" x="17.78" y="-30.48" addlevel="always" swaplevel="1"/>
<gate name="-B29" symbol="PIN-B" x="17.78" y="-33.02" addlevel="always" swaplevel="1"/>
<gate name="-B30" symbol="PIN-B" x="17.78" y="-35.56" addlevel="always" swaplevel="1"/>
<gate name="-B31" symbol="PIN-B" x="17.78" y="-38.1" addlevel="always" swaplevel="1"/>
<gate name="-B32" symbol="PIN-B" x="17.78" y="-40.64" addlevel="always" swaplevel="1"/>
<gate name="-A33" symbol="PIN-B" x="43.18" y="38.1" addlevel="always" swaplevel="1"/>
<gate name="-A34" symbol="PIN-B" x="43.18" y="35.56" addlevel="always" swaplevel="1"/>
<gate name="-A35" symbol="PIN-B" x="43.18" y="33.02" addlevel="always" swaplevel="1"/>
<gate name="-A36" symbol="PIN-B" x="43.18" y="30.48" addlevel="always" swaplevel="1"/>
<gate name="-A37" symbol="PIN-B" x="43.18" y="27.94" addlevel="always" swaplevel="1"/>
<gate name="-A38" symbol="PIN-B" x="43.18" y="25.4" addlevel="always" swaplevel="1"/>
<gate name="-A39" symbol="PIN-B" x="43.18" y="22.86" addlevel="always" swaplevel="1"/>
<gate name="-A40" symbol="PIN-B" x="43.18" y="20.32" addlevel="always" swaplevel="1"/>
<gate name="-A41" symbol="PIN-B" x="43.18" y="17.78" addlevel="always" swaplevel="1"/>
<gate name="-A42" symbol="PIN-B" x="43.18" y="15.24" addlevel="always" swaplevel="1"/>
<gate name="-A43" symbol="PIN-B" x="43.18" y="12.7" addlevel="always" swaplevel="1"/>
<gate name="-A44" symbol="PIN-B" x="43.18" y="10.16" addlevel="always" swaplevel="1"/>
<gate name="-A45" symbol="PIN-B" x="43.18" y="7.62" addlevel="always" swaplevel="1"/>
<gate name="-A46" symbol="PIN-B" x="43.18" y="5.08" addlevel="always" swaplevel="1"/>
<gate name="-A47" symbol="PIN-B" x="43.18" y="2.54" addlevel="always" swaplevel="1"/>
<gate name="-A48" symbol="PIN-B" x="43.18" y="0" addlevel="always" swaplevel="1"/>
<gate name="-A49" symbol="PIN-B" x="43.18" y="-2.54" addlevel="always" swaplevel="1"/>
<gate name="-A50" symbol="PIN-B" x="43.18" y="-5.08" addlevel="always" swaplevel="1"/>
<gate name="-A51" symbol="PIN-B" x="43.18" y="-7.62" addlevel="always" swaplevel="1"/>
<gate name="-A52" symbol="PIN-B" x="43.18" y="-10.16" addlevel="always" swaplevel="1"/>
<gate name="-B33" symbol="PIN-B" x="63.5" y="38.1" addlevel="always" swaplevel="1"/>
<gate name="-B34" symbol="PIN-B" x="63.5" y="35.56" addlevel="always" swaplevel="1"/>
<gate name="-B35" symbol="PIN-B" x="63.5" y="33.02" addlevel="always" swaplevel="1"/>
<gate name="-B36" symbol="PIN-B" x="63.5" y="30.48" addlevel="always" swaplevel="1"/>
<gate name="-B37" symbol="PIN-B" x="63.5" y="27.94" addlevel="always" swaplevel="1"/>
<gate name="-B38" symbol="PIN-B" x="63.5" y="25.4" addlevel="always" swaplevel="1"/>
<gate name="-B39" symbol="PIN-B" x="63.5" y="22.86" addlevel="always" swaplevel="1"/>
<gate name="-B40" symbol="PIN-B" x="63.5" y="20.32" addlevel="always" swaplevel="1"/>
<gate name="-B41" symbol="PIN-B" x="63.5" y="17.78" addlevel="always" swaplevel="1"/>
<gate name="-B42" symbol="PIN-B" x="63.5" y="15.24" addlevel="always" swaplevel="1"/>
<gate name="-B43" symbol="PIN-B" x="63.5" y="12.7" addlevel="always" swaplevel="1"/>
<gate name="-B44" symbol="PIN-B" x="63.5" y="10.16" addlevel="always" swaplevel="1"/>
<gate name="-B45" symbol="PIN-B" x="63.5" y="7.62" addlevel="always" swaplevel="1"/>
<gate name="-B46" symbol="PIN-B" x="63.5" y="5.08" addlevel="always" swaplevel="1"/>
<gate name="-B47" symbol="PIN-B" x="63.5" y="2.54" addlevel="always" swaplevel="1"/>
<gate name="-B48" symbol="PIN-B" x="63.5" y="0" addlevel="always" swaplevel="1"/>
<gate name="-B49" symbol="PIN-B" x="63.5" y="-2.54" addlevel="always" swaplevel="1"/>
<gate name="-B50" symbol="PIN-B" x="63.5" y="-5.08" addlevel="always" swaplevel="1"/>
<gate name="-B51" symbol="PIN-B" x="63.5" y="-7.62" addlevel="always" swaplevel="1"/>
<gate name="-B52" symbol="PIN-B" x="63.5" y="-10.16" addlevel="always" swaplevel="1"/>
</gates>
<devices>
<device name="" package="1184C">
<connects>
<connect gate="-A1" pin="1" pad="A1"/>
<connect gate="-A10" pin="1" pad="A10"/>
<connect gate="-A11" pin="1" pad="A11"/>
<connect gate="-A12" pin="1" pad="A12"/>
<connect gate="-A13" pin="1" pad="A13"/>
<connect gate="-A14" pin="1" pad="A14"/>
<connect gate="-A15" pin="1" pad="A15"/>
<connect gate="-A16" pin="1" pad="A16"/>
<connect gate="-A17" pin="1" pad="A17"/>
<connect gate="-A18" pin="1" pad="A18"/>
<connect gate="-A19" pin="1" pad="A19"/>
<connect gate="-A2" pin="1" pad="A2"/>
<connect gate="-A20" pin="1" pad="A20"/>
<connect gate="-A21" pin="1" pad="A21"/>
<connect gate="-A22" pin="1" pad="A22"/>
<connect gate="-A23" pin="1" pad="A23"/>
<connect gate="-A24" pin="1" pad="A24"/>
<connect gate="-A25" pin="1" pad="A25"/>
<connect gate="-A26" pin="1" pad="A26"/>
<connect gate="-A27" pin="1" pad="A27"/>
<connect gate="-A28" pin="1" pad="A28"/>
<connect gate="-A29" pin="1" pad="A29"/>
<connect gate="-A3" pin="1" pad="A3"/>
<connect gate="-A30" pin="1" pad="A30"/>
<connect gate="-A31" pin="1" pad="A31"/>
<connect gate="-A32" pin="1" pad="A32"/>
<connect gate="-A33" pin="1" pad="A33"/>
<connect gate="-A34" pin="1" pad="A34"/>
<connect gate="-A35" pin="1" pad="A35"/>
<connect gate="-A36" pin="1" pad="A36"/>
<connect gate="-A37" pin="1" pad="A37"/>
<connect gate="-A38" pin="1" pad="A38"/>
<connect gate="-A39" pin="1" pad="A39"/>
<connect gate="-A4" pin="1" pad="A4"/>
<connect gate="-A40" pin="1" pad="A40"/>
<connect gate="-A41" pin="1" pad="A41"/>
<connect gate="-A42" pin="1" pad="A42"/>
<connect gate="-A43" pin="1" pad="A43"/>
<connect gate="-A44" pin="1" pad="A44"/>
<connect gate="-A45" pin="1" pad="A45"/>
<connect gate="-A46" pin="1" pad="A46"/>
<connect gate="-A47" pin="1" pad="A47"/>
<connect gate="-A48" pin="1" pad="A48"/>
<connect gate="-A49" pin="1" pad="A49"/>
<connect gate="-A5" pin="1" pad="A5"/>
<connect gate="-A50" pin="1" pad="A50"/>
<connect gate="-A51" pin="1" pad="A51"/>
<connect gate="-A52" pin="1" pad="A52"/>
<connect gate="-A6" pin="1" pad="A6"/>
<connect gate="-A7" pin="1" pad="A7"/>
<connect gate="-A8" pin="1" pad="A8"/>
<connect gate="-A9" pin="1" pad="A9"/>
<connect gate="-B1" pin="1" pad="B1"/>
<connect gate="-B10" pin="1" pad="B10"/>
<connect gate="-B11" pin="1" pad="B11"/>
<connect gate="-B12" pin="1" pad="B12"/>
<connect gate="-B13" pin="1" pad="B13"/>
<connect gate="-B14" pin="1" pad="B14"/>
<connect gate="-B15" pin="1" pad="B15"/>
<connect gate="-B16" pin="1" pad="B16"/>
<connect gate="-B17" pin="1" pad="B17"/>
<connect gate="-B18" pin="1" pad="B18"/>
<connect gate="-B19" pin="1" pad="B19"/>
<connect gate="-B2" pin="1" pad="B2"/>
<connect gate="-B20" pin="1" pad="B20"/>
<connect gate="-B21" pin="1" pad="B21"/>
<connect gate="-B22" pin="1" pad="B22"/>
<connect gate="-B23" pin="1" pad="B23"/>
<connect gate="-B24" pin="1" pad="B24"/>
<connect gate="-B25" pin="1" pad="B25"/>
<connect gate="-B26" pin="1" pad="B26"/>
<connect gate="-B27" pin="1" pad="B27"/>
<connect gate="-B28" pin="1" pad="B28"/>
<connect gate="-B29" pin="1" pad="B29"/>
<connect gate="-B3" pin="1" pad="B3"/>
<connect gate="-B30" pin="1" pad="B30"/>
<connect gate="-B31" pin="1" pad="B31"/>
<connect gate="-B32" pin="1" pad="B32"/>
<connect gate="-B33" pin="1" pad="B33"/>
<connect gate="-B34" pin="1" pad="B34"/>
<connect gate="-B35" pin="1" pad="B35"/>
<connect gate="-B36" pin="1" pad="B36"/>
<connect gate="-B37" pin="1" pad="B37"/>
<connect gate="-B38" pin="1" pad="B38"/>
<connect gate="-B39" pin="1" pad="B39"/>
<connect gate="-B4" pin="1" pad="B4"/>
<connect gate="-B40" pin="1" pad="B40"/>
<connect gate="-B41" pin="1" pad="B41"/>
<connect gate="-B42" pin="1" pad="B42"/>
<connect gate="-B43" pin="1" pad="B43"/>
<connect gate="-B44" pin="1" pad="B44"/>
<connect gate="-B45" pin="1" pad="B45"/>
<connect gate="-B46" pin="1" pad="B46"/>
<connect gate="-B47" pin="1" pad="B47"/>
<connect gate="-B48" pin="1" pad="B48"/>
<connect gate="-B49" pin="1" pad="B49"/>
<connect gate="-B5" pin="1" pad="B5"/>
<connect gate="-B50" pin="1" pad="B50"/>
<connect gate="-B51" pin="1" pad="B51"/>
<connect gate="-B52" pin="1" pad="B52"/>
<connect gate="-B6" pin="1" pad="B6"/>
<connect gate="-B7" pin="1" pad="B7"/>
<connect gate="-B8" pin="1" pad="B8"/>
<connect gate="-B9" pin="1" pad="B9"/>
</connects>
<package3dinstances>
<package3dinstance package3d_urn="urn:adsk.eagle:package:9300/1"/>
</package3dinstances>
<technologies>
<technology name=""/>
</technologies>
</device>
</devices>
</deviceset>
</devicesets>
</library>
</libraries>
<attributes>
</attributes>
<variantdefs>
</variantdefs>
<classes>
<class number="0" name="default" width="0" drill="0">
</class>
</classes>
<parts>
<part name="R1" library="ECE2240+Project" deviceset="R-US_" device="0309/10" value="132k"/>
<part name="R2" library="ECE2240+Project" deviceset="R-US_" device="0309/10" value="132k"/>
<part name="R3" library="ECE2240+Project" deviceset="R-US_" device="0309/10" value="73k"/>
<part name="IC1" library="maxim" library_urn="urn:adsk.eagle:library:269" deviceset="ICM7555" device="" package3d_urn="urn:adsk.eagle:package:17510/1"/>
<part name="S1" library="switch" library_urn="urn:adsk.eagle:library:380" deviceset="55?" device="01" package3d_urn="urn:adsk.eagle:package:27750/1"/>
<part name="RSWITCH" library="ECE2240+Project" deviceset="R-US_" device="0309/10" value="10k"/>
<part name="GND1" library="ECE2240+Project" deviceset="GND" device=""/>
<part name="S2" library="switch" library_urn="urn:adsk.eagle:library:380" deviceset="55?" device="01" package3d_urn="urn:adsk.eagle:package:27750/1"/>
<part name="IC3" library="74xx-little-de" library_urn="urn:adsk.eagle:library:86" deviceset="74*1G04" device="DBV" package3d_urn="urn:adsk.eagle:package:2406/1" technology="AHC"/>
<part name="JP1" library="pinhead" library_urn="urn:adsk.eagle:library:325" deviceset="PINHD-1X1" device="" package3d_urn="urn:adsk.eagle:package:22485/1" value="5V"/>
<part name="JP2" library="pinhead" library_urn="urn:adsk.eagle:library:325" deviceset="PINHD-1X1" device="" package3d_urn="urn:adsk.eagle:package:22485/1"/>
<part name="K1" library="relay" library_urn="urn:adsk.eagle:library:339" deviceset="G6C-1117P" device="" package3d_urn="urn:adsk.eagle:package:24312/1"/>
<part name="RBURN" library="ECE2240+Project" deviceset="R-US_" device="0309/10" value="4.7"/>
<part name="C1" library="ECE2240+Project" deviceset="C" device="5/3" value="1800u"/>
<part name="C2" library="ECE2240+Project" deviceset="C" device="5/3" value="1800u"/>
<part name="C3" library="ECE2240+Project" deviceset="C" device="5/3" value="1800u"/>
<part name="IC2" library="74xx-little-us" library_urn="urn:adsk.eagle:library:87" deviceset="74*1G02" device="DBV" package3d_urn="urn:adsk.eagle:package:2482/1" technology="AHC"/>
<part name="X1" library="con-pc104" library_urn="urn:adsk.eagle:library:171" deviceset="1184C" device="" package3d_urn="urn:adsk.eagle:package:9300/1"/>
</parts>
<sheets>
<sheet>
<plain>
</plain>
<instances>
<instance part="R1" gate="G$1" x="-7.62" y="106.68" rot="R90"/>
<instance part="R2" gate="G$1" x="-7.62" y="86.36" rot="R90"/>
<instance part="R3" gate="G$1" x="-7.62" y="66.04" rot="R90"/>
<instance part="IC1" gate="G$1" x="68.58" y="73.66"/>
<instance part="S1" gate="G$1" x="27.94" y="106.68" rot="R90"/>
<instance part="RSWITCH" gate="G$1" x="15.24" y="73.66" rot="R90"/>
<instance part="GND1" gate="1" x="68.58" y="25.4"/>
<instance part="S2" gate="G$1" x="12.7" y="55.88" rot="R90"/>
<instance part="IC3" gate="A" x="111.76" y="71.12"/>
<instance part="JP1" gate="G$1" x="121.92" y="116.84" rot="R180"/>
<instance part="JP2" gate="G$1" x="93.98" y="2.54"/>
<instance part="K1" gate="1" x="154.94" y="68.58"/>
<instance part="K1" gate="2" x="172.72" y="68.58"/>
<instance part="RBURN" gate="G$1" x="172.72" y="50.8" rot="R90"/>
<instance part="C1" gate="G$1" x="-15.24" y="15.24"/>
<instance part="C2" gate="G$1" x="-2.54" y="15.24"/>
<instance part="C3" gate="G$1" x="10.16" y="15.24"/>
<instance part="IC2" gate="A" x="139.7" y="81.28"/>
<instance part="X1" gate="-A1" x="-111.76" y="127"/>
<instance part="X1" gate="-A2" x="-111.76" y="124.46"/>
<instance part="X1" gate="-A3" x="-111.76" y="121.92"/>
<instance part="X1" gate="-A4" x="-111.76" y="119.38"/>
<instance part="X1" gate="-A5" x="-111.76" y="116.84"/>
<instance part="X1" gate="-A6" x="-111.76" y="114.3"/>
<instance part="X1" gate="-A7" x="-111.76" y="111.76"/>
<instance part="X1" gate="-A8" x="-111.76" y="109.22"/>
<instance part="X1" gate="-A9" x="-111.76" y="106.68"/>
<instance part="X1" gate="-A10" x="-111.76" y="104.14"/>
<instance part="X1" gate="-A11" x="-111.76" y="101.6"/>
<instance part="X1" gate="-A12" x="-111.76" y="99.06"/>
<instance part="X1" gate="-A13" x="-111.76" y="96.52"/>
<instance part="X1" gate="-A14" x="-111.76" y="93.98"/>
<instance part="X1" gate="-A15" x="-111.76" y="91.44"/>
<instance part="X1" gate="-A16" x="-111.76" y="88.9"/>
<instance part="X1" gate="-A17" x="-111.76" y="86.36"/>
<instance part="X1" gate="-A18" x="-111.76" y="83.82"/>
<instance part="X1" gate="-A19" x="-111.76" y="81.28"/>
<instance part="X1" gate="-A20" x="-111.76" y="78.74"/>
<instance part="X1" gate="-A21" x="-111.76" y="76.2"/>
<instance part="X1" gate="-A22" x="-111.76" y="73.66"/>
<instance part="X1" gate="-A23" x="-111.76" y="71.12"/>
<instance part="X1" gate="-A24" x="-111.76" y="68.58"/>
<instance part="X1" gate="-A25" x="-111.76" y="66.04"/>
<instance part="X1" gate="-A26" x="-111.76" y="63.5"/>
<instance part="X1" gate="-A27" x="-111.76" y="60.96"/>
<instance part="X1" gate="-A28" x="-111.76" y="58.42"/>
<instance part="X1" gate="-A29" x="-111.76" y="55.88"/>
<instance part="X1" gate="-A30" x="-111.76" y="53.34"/>
<instance part="X1" gate="-A31" x="-111.76" y="50.8"/>
<instance part="X1" gate="-A32" x="-111.76" y="48.26"/>
<instance part="X1" gate="-B1" x="-88.9" y="127"/>
<instance part="X1" gate="-B2" x="-88.9" y="124.46"/>
<instance part="X1" gate="-B3" x="-88.9" y="121.92"/>
<instance part="X1" gate="-B4" x="-88.9" y="119.38"/>
<instance part="X1" gate="-B5" x="-88.9" y="116.84"/>
<instance part="X1" gate="-B6" x="-88.9" y="114.3"/>
<instance part="X1" gate="-B7" x="-88.9" y="111.76"/>
<instance part="X1" gate="-B8" x="-88.9" y="109.22"/>
<instance part="X1" gate="-B9" x="-88.9" y="106.68"/>
<instance part="X1" gate="-B10" x="-88.9" y="104.14"/>
<instance part="X1" gate="-B11" x="-88.9" y="101.6"/>
<instance part="X1" gate="-B12" x="-88.9" y="99.06"/>
<instance part="X1" gate="-B13" x="-88.9" y="96.52"/>
<instance part="X1" gate="-B14" x="-88.9" y="93.98"/>
<instance part="X1" gate="-B15" x="-88.9" y="91.44"/>
<instance part="X1" gate="-B16" x="-88.9" y="88.9"/>
<instance part="X1" gate="-B17" x="-88.9" y="86.36"/>
<instance part="X1" gate="-B18" x="-88.9" y="83.82"/>
<instance part="X1" gate="-B19" x="-88.9" y="81.28"/>
<instance part="X1" gate="-B20" x="-88.9" y="78.74"/>
<instance part="X1" gate="-B21" x="-88.9" y="76.2"/>
<instance part="X1" gate="-B22" x="-88.9" y="73.66"/>
<instance part="X1" gate="-B23" x="-88.9" y="71.12"/>
<instance part="X1" gate="-B24" x="-88.9" y="68.58"/>
<instance part="X1" gate="-B25" x="-88.9" y="66.04"/>
<instance part="X1" gate="-B26" x="-88.9" y="63.5"/>
<instance part="X1" gate="-B27" x="-88.9" y="60.96"/>
<instance part="X1" gate="-B28" x="-88.9" y="58.42"/>
<instance part="X1" gate="-B29" x="-88.9" y="55.88"/>
<instance part="X1" gate="-B30" x="-88.9" y="53.34"/>
<instance part="X1" gate="-B31" x="-88.9" y="50.8"/>
<instance part="X1" gate="-B32" x="-88.9" y="48.26"/>
<instance part="X1" gate="-A33" x="-63.5" y="127"/>
<instance part="X1" gate="-A34" x="-63.5" y="124.46"/>
<instance part="X1" gate="-A35" x="-63.5" y="121.92"/>
<instance part="X1" gate="-A36" x="-63.5" y="119.38"/>
<instance part="X1" gate="-A37" x="-63.5" y="116.84"/>
<instance part="X1" gate="-A38" x="-63.5" y="114.3"/>
<instance part="X1" gate="-A39" x="-63.5" y="111.76"/>
<instance part="X1" gate="-A40" x="-63.5" y="109.22"/>
<instance part="X1" gate="-A41" x="-63.5" y="106.68"/>
<instance part="X1" gate="-A42" x="-63.5" y="104.14"/>
<instance part="X1" gate="-A43" x="-63.5" y="101.6"/>
<instance part="X1" gate="-A44" x="-63.5" y="99.06"/>
<instance part="X1" gate="-A45" x="-63.5" y="96.52"/>
<instance part="X1" gate="-A46" x="-63.5" y="93.98"/>
<instance part="X1" gate="-A47" x="-63.5" y="91.44"/>
<instance part="X1" gate="-A48" x="-63.5" y="88.9"/>
<instance part="X1" gate="-A49" x="-63.5" y="86.36"/>
<instance part="X1" gate="-A50" x="-63.5" y="83.82"/>
<instance part="X1" gate="-A51" x="-63.5" y="81.28"/>
<instance part="X1" gate="-A52" x="-63.5" y="78.74"/>
<instance part="X1" gate="-B33" x="-43.18" y="127"/>
<instance part="X1" gate="-B34" x="-43.18" y="124.46"/>
<instance part="X1" gate="-B35" x="-43.18" y="121.92"/>
<instance part="X1" gate="-B36" x="-43.18" y="119.38"/>
<instance part="X1" gate="-B37" x="-43.18" y="116.84"/>
<instance part="X1" gate="-B38" x="-43.18" y="114.3"/>
<instance part="X1" gate="-B39" x="-43.18" y="111.76"/>
<instance part="X1" gate="-B40" x="-43.18" y="109.22"/>
<instance part="X1" gate="-B41" x="-43.18" y="106.68"/>
<instance part="X1" gate="-B42" x="-43.18" y="104.14"/>
<instance part="X1" gate="-B43" x="-43.18" y="101.6"/>
<instance part="X1" gate="-B44" x="-43.18" y="99.06"/>
<instance part="X1" gate="-B45" x="-43.18" y="96.52"/>
<instance part="X1" gate="-B46" x="-43.18" y="93.98"/>
<instance part="X1" gate="-B47" x="-43.18" y="91.44"/>
<instance part="X1" gate="-B48" x="-43.18" y="88.9"/>
<instance part="X1" gate="-B49" x="-43.18" y="86.36"/>
<instance part="X1" gate="-B50" x="-43.18" y="83.82"/>
<instance part="X1" gate="-B51" x="-43.18" y="81.28"/>
<instance part="X1" gate="-B52" x="-43.18" y="78.74"/>
</instances>
<busses>
</busses>
<nets>
<net name="VCC" class="0">
<segment>
<wire x1="-7.62" y1="116.84" x2="15.24" y2="116.84" width="0.1524" layer="91"/>
<wire x1="15.24" y1="116.84" x2="30.48" y2="116.84" width="0.1524" layer="91"/>
<wire x1="30.48" y1="116.84" x2="93.98" y2="116.84" width="0.1524" layer="91"/>
<wire x1="93.98" y1="116.84" x2="104.14" y2="116.84" width="0.1524" layer="91"/>
<wire x1="104.14" y1="116.84" x2="124.46" y2="116.84" width="0.1524" layer="91"/>
<wire x1="-7.62" y1="116.84" x2="-7.62" y2="111.76" width="0.1524" layer="91"/>
<pinref part="R1" gate="G$1" pin="2"/>
<pinref part="S1" gate="G$1" pin="NO"/>
<wire x1="30.48" y1="111.76" x2="30.48" y2="116.84" width="0.1524" layer="91"/>
<junction x="30.48" y="116.84"/>
<wire x1="15.24" y1="116.84" x2="15.24" y2="78.74" width="0.1524" layer="91"/>
<junction x="15.24" y="116.84"/>
<pinref part="RSWITCH" gate="G$1" pin="2"/>
<pinref part="IC1" gate="G$1" pin="V+"/>
<wire x1="81.28" y1="68.58" x2="93.98" y2="68.58" width="0.1524" layer="91"/>
<wire x1="93.98" y1="68.58" x2="93.98" y2="116.84" width="0.1524" layer="91"/>
<junction x="93.98" y="116.84"/>
<pinref part="JP1" gate="G$1" pin="1"/>
<pinref part="K1" gate="2" pin="S"/>
<wire x1="172.72" y1="73.66" x2="172.72" y2="101.6" width="0.1524" layer="91"/>
<wire x1="172.72" y1="101.6" x2="104.14" y2="101.6" width="0.1524" layer="91"/>
<wire x1="104.14" y1="101.6" x2="104.14" y2="116.84" width="0.1524" layer="91"/>
<junction x="104.14" y="116.84"/>
</segment>
</net>
<net name="N$2" class="0">
<segment>
<pinref part="R2" gate="G$1" pin="2"/>
<pinref part="R1" gate="G$1" pin="1"/>
<wire x1="-7.62" y1="91.44" x2="-7.62" y2="101.6" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$3" class="0">
<segment>
<pinref part="R3" gate="G$1" pin="2"/>
<pinref part="R2" gate="G$1" pin="1"/>
<wire x1="-7.62" y1="71.12" x2="-7.62" y2="81.28" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$4" class="0">
<segment>
<pinref part="R3" gate="G$1" pin="1"/>
<wire x1="-7.62" y1="60.96" x2="-7.62" y2="55.88" width="0.1524" layer="91"/>
<wire x1="-7.62" y1="55.88" x2="0" y2="55.88" width="0.1524" layer="91"/>
<wire x1="0" y1="55.88" x2="0" y2="88.9" width="0.1524" layer="91"/>
<wire x1="0" y1="88.9" x2="43.18" y2="88.9" width="0.1524" layer="91"/>
<wire x1="43.18" y1="88.9" x2="43.18" y2="78.74" width="0.1524" layer="91"/>
<pinref part="IC1" gate="G$1" pin="TRSH"/>
<wire x1="43.18" y1="78.74" x2="53.34" y2="78.74" width="0.1524" layer="91"/>
<wire x1="-7.62" y1="55.88" x2="-7.62" y2="45.72" width="0.1524" layer="91"/>
<junction x="-7.62" y="55.88"/>
<wire x1="-7.62" y1="45.72" x2="-2.54" y2="45.72" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="45.72" x2="48.26" y2="45.72" width="0.1524" layer="91"/>
<wire x1="48.26" y1="45.72" x2="48.26" y2="83.82" width="0.1524" layer="91"/>
<pinref part="IC1" gate="G$1" pin="DISCH"/>
<wire x1="48.26" y1="83.82" x2="53.34" y2="83.82" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="45.72" x2="-2.54" y2="20.32" width="0.1524" layer="91"/>
<junction x="-2.54" y="45.72"/>
<wire x1="-2.54" y1="20.32" x2="-15.24" y2="20.32" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="20.32" x2="10.16" y2="20.32" width="0.1524" layer="91"/>
<junction x="-2.54" y="20.32"/>
<wire x1="-15.24" y1="20.32" x2="-15.24" y2="17.78" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="20.32" x2="-2.54" y2="17.78" width="0.1524" layer="91"/>
<wire x1="10.16" y1="20.32" x2="10.16" y2="17.78" width="0.1524" layer="91"/>
<pinref part="C1" gate="G$1" pin="1"/>
<pinref part="C2" gate="G$1" pin="1"/>
<pinref part="C3" gate="G$1" pin="1"/>
</segment>
</net>
<net name="N$5" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="RESET"/>
<wire x1="53.34" y1="73.66" x2="30.48" y2="73.66" width="0.1524" layer="91"/>
<wire x1="30.48" y1="73.66" x2="30.48" y2="101.6" width="0.1524" layer="91"/>
<pinref part="S1" gate="G$1" pin="1B"/>
</segment>
</net>
<net name="N$6" class="0">
<segment>
<pinref part="RSWITCH" gate="G$1" pin="1"/>
<pinref part="IC1" gate="G$1" pin="TRIG"/>
<wire x1="15.24" y1="68.58" x2="15.24" y2="63.5" width="0.1524" layer="91"/>
<wire x1="15.24" y1="63.5" x2="53.34" y2="63.5" width="0.1524" layer="91"/>
<pinref part="S2" gate="G$1" pin="NO"/>
<wire x1="15.24" y1="60.96" x2="15.24" y2="63.5" width="0.1524" layer="91"/>
<junction x="15.24" y="63.5"/>
</segment>
</net>
<net name="GND" class="0">
<segment>
<pinref part="S2" gate="G$1" pin="1B"/>
<pinref part="GND1" gate="1" pin="GND"/>
<wire x1="15.24" y1="50.8" x2="15.24" y2="27.94" width="0.1524" layer="91"/>
<wire x1="15.24" y1="27.94" x2="20.32" y2="27.94" width="0.1524" layer="91"/>
<pinref part="S2" gate="G$1" pin="NC"/>
<wire x1="20.32" y1="27.94" x2="27.94" y2="27.94" width="0.1524" layer="91"/>
<wire x1="27.94" y1="27.94" x2="43.18" y2="27.94" width="0.1524" layer="91"/>
<wire x1="43.18" y1="27.94" x2="68.58" y2="27.94" width="0.1524" layer="91"/>
<wire x1="10.16" y1="60.96" x2="5.08" y2="60.96" width="0.1524" layer="91"/>
<wire x1="5.08" y1="60.96" x2="5.08" y2="27.94" width="0.1524" layer="91"/>
<wire x1="5.08" y1="27.94" x2="12.7" y2="27.94" width="0.1524" layer="91"/>
<junction x="15.24" y="27.94"/>
<pinref part="S2" gate="G$1" pin="1A"/>
<wire x1="12.7" y1="27.94" x2="15.24" y2="27.94" width="0.1524" layer="91"/>
<wire x1="12.7" y1="50.8" x2="12.7" y2="27.94" width="0.1524" layer="91"/>
<junction x="12.7" y="27.94"/>
<pinref part="S1" gate="G$1" pin="1A"/>
<wire x1="27.94" y1="101.6" x2="27.94" y2="27.94" width="0.1524" layer="91"/>
<junction x="27.94" y="27.94"/>
<pinref part="S1" gate="G$1" pin="NC"/>
<wire x1="25.4" y1="111.76" x2="20.32" y2="111.76" width="0.1524" layer="91"/>
<wire x1="20.32" y1="111.76" x2="20.32" y2="27.94" width="0.1524" layer="91"/>
<junction x="20.32" y="27.94"/>
<junction x="68.58" y="27.94"/>
<pinref part="IC1" gate="G$1" pin="GND"/>
<wire x1="81.28" y1="63.5" x2="93.98" y2="63.5" width="0.1524" layer="91"/>
<wire x1="93.98" y1="63.5" x2="93.98" y2="27.94" width="0.1524" layer="91"/>
<wire x1="93.98" y1="27.94" x2="68.58" y2="27.94" width="0.1524" layer="91"/>
<pinref part="K1" gate="1" pin="2"/>
<wire x1="154.94" y1="63.5" x2="154.94" y2="27.94" width="0.1524" layer="91"/>
<wire x1="154.94" y1="27.94" x2="93.98" y2="27.94" width="0.1524" layer="91"/>
<junction x="93.98" y="27.94"/>
<pinref part="RBURN" gate="G$1" pin="1"/>
<wire x1="172.72" y1="45.72" x2="172.72" y2="27.94" width="0.1524" layer="91"/>
<wire x1="172.72" y1="27.94" x2="154.94" y2="27.94" width="0.1524" layer="91"/>
<junction x="154.94" y="27.94"/>
<wire x1="-15.24" y1="10.16" x2="-15.24" y2="2.54" width="0.1524" layer="91"/>
<wire x1="-15.24" y1="2.54" x2="-2.54" y2="2.54" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="2.54" x2="10.16" y2="2.54" width="0.1524" layer="91"/>
<wire x1="10.16" y1="2.54" x2="10.16" y2="10.16" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="10.16" x2="-2.54" y2="2.54" width="0.1524" layer="91"/>
<junction x="-2.54" y="2.54"/>
<wire x1="-2.54" y1="2.54" x2="-2.54" y2="0" width="0.1524" layer="91"/>
<wire x1="-2.54" y1="0" x2="43.18" y2="0" width="0.1524" layer="91"/>
<wire x1="43.18" y1="0" x2="43.18" y2="27.94" width="0.1524" layer="91"/>
<junction x="43.18" y="27.94"/>
<pinref part="C1" gate="G$1" pin="2"/>
<pinref part="C2" gate="G$1" pin="2"/>
<pinref part="C3" gate="G$1" pin="2"/>
</segment>
</net>
<net name="N$9" class="0">
<segment>
<pinref part="IC3" gate="A" pin="O"/>
<wire x1="121.92" y1="71.12" x2="124.46" y2="71.12" width="0.1524" layer="91"/>
<wire x1="124.46" y1="71.12" x2="124.46" y2="78.74" width="0.1524" layer="91"/>
<pinref part="IC2" gate="A" pin="I1"/>
<wire x1="127" y1="78.74" x2="124.46" y2="78.74" width="0.1524" layer="91"/>
</segment>
</net>
<net name="OBC" class="0">
<segment>
<pinref part="IC3" gate="A" pin="I"/>
<wire x1="106.68" y1="71.12" x2="101.6" y2="71.12" width="0.1524" layer="91"/>
<wire x1="101.6" y1="71.12" x2="101.6" y2="2.54" width="0.1524" layer="91"/>
<pinref part="JP2" gate="G$1" pin="1"/>
<wire x1="101.6" y1="2.54" x2="91.44" y2="2.54" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$1" class="0">
<segment>
<pinref part="K1" gate="1" pin="1"/>
<wire x1="154.94" y1="81.28" x2="154.94" y2="73.66" width="0.1524" layer="91"/>
<pinref part="IC2" gate="A" pin="O"/>
<wire x1="152.4" y1="81.28" x2="154.94" y2="81.28" width="0.1524" layer="91"/>
</segment>
</net>
<net name="N$10" class="0">
<segment>
<pinref part="K1" gate="2" pin="P"/>
<wire x1="172.72" y1="63.5" x2="172.72" y2="55.88" width="0.1524" layer="91"/>
<pinref part="RBURN" gate="G$1" pin="2"/>
</segment>
</net>
<net name="N$7" class="0">
<segment>
<pinref part="IC1" gate="G$1" pin="OUT"/>
<pinref part="IC2" gate="A" pin="I0"/>
<wire x1="81.28" y1="83.82" x2="127" y2="83.82" width="0.1524" layer="91"/>
</segment>
</net>
</nets>
</sheet>
</sheets>
</schematic>
</drawing>
<compatibility>
<note version="8.2" severity="warning">
Since Version 8.2, EAGLE supports online libraries. The ids
of those online libraries will not be understood (or retained)
with this version.
</note>
<note version="8.3" severity="warning">
Since Version 8.3, EAGLE supports URNs for individual library
assets (packages, symbols, and devices). The URNs of those assets
will not be understood (or retained) with this version.
</note>
<note version="8.3" severity="warning">
Since Version 8.3, EAGLE supports the association of 3D packages
with devices in libraries, schematics, and board files. Those 3D
packages will not be understood (or retained) with this version.
</note>
</compatibility>
</eagle>
