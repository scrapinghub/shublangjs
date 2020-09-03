var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="html5lib.data";var REMOTE_PACKAGE_BASE="html5lib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.8",true,true);Module["FS_createPath"]("/lib/python3.8","site-packages",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","html5lib",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","treeadapters",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","filters",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","treebuilders",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","treewalkers",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages/html5lib","_trie",true,true);Module["FS_createPath"]("/lib/python3.8/site-packages","html5lib-1.0.1-py3.8.egg-info",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:234341,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1464,2646,3632,4356,5184,5932,6607,7244,8099,8700,9462,10576,11628,12766,13912,14802,15758,16643,17527,18430,19329,20260,21185,22111,22962,23884,24814,25729,26593,27525,28441,29337,30256,31040,31909,32845,33782,34720,35581,36490,37433,38295,39509,40840,41727,42896,43894,44914,45725,46357,47136,47851,48599,49243,49899,50477,50965,51659,52342,52781,53420,54245,55178,55869,56495,57204,58e3,58849,59325,59946,60638,61280,62064,62866,63363,63980,64536,65071,65537,66380,67687,69012,70364,71605,73065,74609,75791,76722,78004,79233,80336,81416,82196,83219,84380,85534,86570,87360,87894,88631,89452,90300,91318,92247,93007,93872,95034,96026,97095,98004,98829,99549,100357,101268,102138,102911,103806,104671,105574,106474,107418,108190,108995,109962,110914,111730,112607,113463,114332,115177,116145,116943,117916,118764,119690,120549,121389,122191,123109,123833,124753,125790,126589,127504,128187,129023,130290,131527,132568,133936,135056,136212,137373,138590,139567,140579,141713,142559,143722,144687,145684,146673,147946,149162,150293,151525,152527,153445,154249,155385,156667,157679,158952,159805,160776,161717,162516,163296,163937,165025,165483,165953,166620,167337,168060,168814,169600,170657,171492,172635,173782,174836,176055,177067,178018,179232,180087,181024,181937,182814,183971,185180,186086,186898,187747,188736,189716,190699,191644,192588,193546,194379,195578,196615,197742,198924,199929,200962,201995,203354,204661,205742,206787,207892,209207,210037,211075,212151,213405,214342,215286,216117,217398,218450,219390,220393,221484,222441,223705,225010,226331,227669,228907,230197,231469,232514,233282,233781,234138],sizes:[1464,1182,986,724,828,748,675,637,855,601,762,1114,1052,1138,1146,890,956,885,884,903,899,931,925,926,851,922,930,915,864,932,916,896,919,784,869,936,937,938,861,909,943,862,1214,1331,887,1169,998,1020,811,632,779,715,748,644,656,578,488,694,683,439,639,825,933,691,626,709,796,849,476,621,692,642,784,802,497,617,556,535,466,843,1307,1325,1352,1241,1460,1544,1182,931,1282,1229,1103,1080,780,1023,1161,1154,1036,790,534,737,821,848,1018,929,760,865,1162,992,1069,909,825,720,808,911,870,773,895,865,903,900,944,772,805,967,952,816,877,856,869,845,968,798,973,848,926,859,840,802,918,724,920,1037,799,915,683,836,1267,1237,1041,1368,1120,1156,1161,1217,977,1012,1134,846,1163,965,997,989,1273,1216,1131,1232,1002,918,804,1136,1282,1012,1273,853,971,941,799,780,641,1088,458,470,667,717,723,754,786,1057,835,1143,1147,1054,1219,1012,951,1214,855,937,913,877,1157,1209,906,812,849,989,980,983,945,944,958,833,1199,1037,1127,1182,1005,1033,1033,1359,1307,1081,1045,1105,1315,830,1038,1076,1254,937,944,831,1281,1052,940,1003,1091,957,1264,1305,1321,1338,1238,1290,1272,1045,768,499,357,203],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_html5lib.data")}Module["addRunDependency"]("datafile_html5lib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.8/site-packages/html5lib/_utils.py",start:0,end:4003,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/constants.py",start:4003,end:87521,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_tokenizer.py",start:87521,end:164089,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_ihatexml.py",start:164089,end:180794,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/html5parser.py",start:180794,end:299745,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_inputstream.py",start:299745,end:332244,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/serializer.py",start:332244,end:347990,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/__init__.py",start:347990,end:349135,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treeadapters/sax.py",start:349135,end:350911,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treeadapters/genshi.py",start:350911,end:352626,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treeadapters/__init__.py",start:352626,end:353276,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/inject_meta_charset.py",start:353276,end:356221,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/optionaltags.py",start:356221,end:366809,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/whitespace.py",start:366809,end:368023,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/sanitizer.py",start:368023,end:394259,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/base.py",start:394259,end:394545,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/alphabeticalattributes.py",start:394545,end:395464,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/__init__.py",start:395464,end:395464,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/filters/lint.py",start:395464,end:399095,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/etree_lxml.py",start:399095,end:413217,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/etree.py",start:413217,end:425969,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/dom.py",start:425969,end:434804,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/base.py",start:434804,end:449371,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treebuilders/__init__.py",start:449371,end:452963,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/etree_lxml.py",start:452963,end:459260,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/etree.py",start:459260,end:463798,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/dom.py",start:463798,end:465211,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/genshi.py",start:465211,end:467520,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/base.py",start:467520,end:474996,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/treewalkers/__init__.py",start:474996,end:480710,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/datrie.py",start:480710,end:481876,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/__init__.py",start:481876,end:482165,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/_base.py",start:482165,end:483095,audio:0},{filename:"/lib/python3.8/site-packages/html5lib/_trie/py.py",start:483095,end:484858,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/top_level.txt",start:484858,end:484867,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/PKG-INFO",start:484867,end:503636,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/SOURCES.txt",start:503636,end:510047,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/dependency_links.txt",start:510047,end:510048,audio:0},{filename:"/lib/python3.8/site-packages/html5lib-1.0.1-py3.8.egg-info/requires.txt",start:510048,end:510319,audio:0}],remote_package_size:238437,package_uuid:"55b6d325-a3f8-451a-bce6-9947895dfc4c"})})();