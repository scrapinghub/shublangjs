var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="python-dateutil.data";var REMOTE_PACKAGE_BASE="python-dateutil.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","dateutil",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","tz",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","parser",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/dateutil","zoneinfo",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","python_dateutil-2.8.1-py3.8.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:304777,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1303,2674,4176,5575,6958,7937,8982,9836,10905,11500,12452,13213,13826,14625,15479,16852,17999,19009,19920,21071,22438,23519,24729,25874,26667,27565,28325,29120,30145,31215,32168,32886,33734,34568,35754,37120,38165,39003,39955,40914,41934,43081,44126,45165,46250,47261,48037,48821,49699,51019,52274,53344,54735,56011,57301,58707,59978,61233,62479,63859,64899,66157,67359,68557,69654,70639,71785,73153,74414,75487,76635,77665,78772,79991,81122,82317,83459,84462,85841,86972,88113,89369,90512,91443,92262,93246,94498,95520,96242,97310,98626,100021,101474,102896,104068,104693,105828,107022,107977,108971,110110,110920,112146,113325,114476,115436,116412,117374,118436,119300,120413,121612,122812,123877,125066,126390,127629,128644,129408,130344,131163,132614,133844,134936,136022,137127,138320,139536,141147,143195,145243,147291,149339,151394,153442,155490,157538,159593,161650,163703,165741,167794,169847,171896,173944,176001,178055,180103,182151,184206,186228,188276,190329,192386,194442,196490,198538,200586,202634,204682,206730,208787,210835,212883,214931,216979,219027,221080,223128,225135,227183,229231,231288,233336,235384,237432,239480,241528,243576,245624,247672,249720,251768,253816,255863,257911,259959,262007,264055,266103,268150,270206,272254,274302,276350,278398,280446,282494,284542,286590,288638,290686,292734,294317,295700,297014,298177,299187,300363,301640,303020,304174],sizes:[1303,1371,1502,1399,1383,979,1045,854,1069,595,952,761,613,799,854,1373,1147,1010,911,1151,1367,1081,1210,1145,793,898,760,795,1025,1070,953,718,848,834,1186,1366,1045,838,952,959,1020,1147,1045,1039,1085,1011,776,784,878,1320,1255,1070,1391,1276,1290,1406,1271,1255,1246,1380,1040,1258,1202,1198,1097,985,1146,1368,1261,1073,1148,1030,1107,1219,1131,1195,1142,1003,1379,1131,1141,1256,1143,931,819,984,1252,1022,722,1068,1316,1395,1453,1422,1172,625,1135,1194,955,994,1139,810,1226,1179,1151,960,976,962,1062,864,1113,1199,1200,1065,1189,1324,1239,1015,764,936,819,1451,1230,1092,1086,1105,1193,1216,1611,2048,2048,2048,2048,2055,2048,2048,2048,2055,2057,2053,2038,2053,2053,2049,2048,2057,2054,2048,2048,2055,2022,2048,2053,2057,2056,2048,2048,2048,2048,2048,2048,2057,2048,2048,2048,2048,2048,2053,2048,2007,2048,2048,2057,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2047,2048,2048,2048,2048,2048,2047,2056,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,2048,1583,1383,1314,1163,1010,1176,1277,1380,1154,603],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_python-dateutil.data")}Module["addRunDependency"]("datafile_python-dateutil.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/dateutil/tzwin.py",start:0,end:59,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/_common.py",start:59,end:991,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/utils.py",start:991,end:2950,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/easter.py",start:2950,end:5634,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/_version.py",start:5634,end:5750,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/__init__.py",start:5750,end:5972,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/relativedelta.py",start:5972,end:30876,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/rrule.py",start:30876,end:97615,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/_factories.py",start:97615,end:100184,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/win.py",start:100184,end:113119,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/_common.py",start:113119,end:126096,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/tz.py",start:126096,end:189028,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/tz/__init__.py",start:189028,end:189472,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/_parser.py",start:189472,end:248276,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/isoparser.py",start:248276,end:261374,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/parser/__init__.py",start:261374,end:263140,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/dateutil-zoneinfo.tar.gz",start:263140,end:416455,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/rebuild.py",start:416455,end:418174,audio:0},{filename:"/lib/python3.8/site-packages/dateutil/zoneinfo/__init__.py",start:418174,end:424063,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/top_level.txt",start:424063,end:424072,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/PKG-INFO",start:424072,end:433391,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/SOURCES.txt",start:433391,end:435459,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/zip-safe",start:435459,end:435460,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/dependency_links.txt",start:435460,end:435461,audio:0},{filename:"/lib/python3.8/site-packages/python_dateutil-2.8.1-py3.8.egg-info/requires.txt",start:435461,end:435470,audio:0}],remote_package_size:308873,package_uuid:"8fcc6c55-7b3b-4162-91b9-cc367d305739"})})();