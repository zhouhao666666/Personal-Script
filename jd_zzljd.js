/*
[task_local]
免费领京豆-周周领30京豆
0 0 0 0 0 1 * jd_zzljd.js, tag=免费领京豆-周周领30京豆, enabled=true
================Loon==============
[Script]
cron "0 0 * * **" script-path=jd_zzljd.js,tag=免费领京豆-周周领30京豆
*/
const $ = new Env('免费领京豆-周周领30京豆');
const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
//IOS等用户直接用NobyDa的jd cookie
var _0xodj='jsjiami.com.v6',_0xodj_=['‮_0xodj'],_0x5352=[_0xodj,'wpsIwrrCsSE=','R8KRZ8OcwoU=','LQDDiigE','XiLDvXBd','wrxBwonCm8KTw4zCsMOxw6wk','wooSw418wqnDsMKB','A07Cvg==','DEtwwoDCsA==','WjcYw4NLd8KubzIn','wqvCosO/a8OZ','wpbDvTrDscKcw6vDjcKUdkE=','Hy7DmcOCw59pbg==','ADTDnQ==','wofDvcOaBmcxNsOpGsKR','wofChVx6wp8=','RcK3RwDCs2k=','w5zDv8KW','5LmW5LiZ5pyI5Yq95Zuc6K2F6ZSe5pe05o6E5LuJ56uT77+76K6M5qGw5pym6IW86Lm06K+15aam57+u57uD5oOH5YSI','wqVBwoPCnQ==','bWXDtQ==','wrMjw7FbwonDgcKnwow=','WwXDkl9Lw53DhHQ=','w6PCnlnCmsO5','wpvCi0lMwojCrQ==','6aKX5Y6X5oqd5YqE','WkRgwrnCjA==','Szo5w7lP','w4PCv27CvcO5','JSPDlMOEw48=','wpXCq8OowrLCpQ==','w4TCq8OudkY=','wpg9wrjCvwo=','wp/Ds8OdJW0=','wp7ChmdCwrs=','w5PCol/CkcO0PMO1','TE9r','wpfDrSrDp8KVw6zDug==','w77DqMKv','RsK6Sg==','HUTCqsO1B8KXTcOTAWM=','fVDDmA==','woZjw6E=','w4nCjyoo','6Kyz5YiB6ZqE5oen5Z2YwqpzwpjCu8Ot6LyL5YWr5qCF5L625pWE5Yai5a6jwoLlupfor4fpgYDovrHoh7bmnYLlj4Doj5Tlj43Cqi8DUljCkQ==','Q8KcRQ==','5LiA5Lif5p+M5Yub5Zir6K236ZSS5peQ5o+B5Lm+56uV77216Kyu5qGT5p6R6Iaj6LqB6K2r5aWF57yP57ua5oG/5YeK','6aCH5Y275oum5Yqg','w4jCv27CnMOL','wrszwofCiwA=','czU5ZGw=','w43Cl8O+TWk=','WHPDnmBA','wrHCrMOKwrPChg==','VcObw7kVFw==','w5hhwqlhwpI=','wpjDq8OO','Nk5kwog=','6K2f5Yu/6ZmU5oSd5Z+fw4Ucw5fDjETovJ3lhpTmobzkvaHml4nlhqflrrfDq+W6oOivj+mAnui9teiEp+adm+WNjeiMpuWNlMKfFsKlw7LCgMKm','wp3DrMOdA3h/XcKnA8Oewr/CtSwyQsKnwokXwqY=','ajXCgGrCiBjDpmwY','KDvCkcO9Tg==','w5TCjyoow6gEw711Ag==','eUvDi35DMMK5KERMb8KdwrbCjzU/RwvDjTNNwoHDvQ/Co8OAdcOrwpLCrjYgw4HDicKxAjdiAAPCicKTZHfChl06wpoiIsO5wrDCq8Oww4vDgcKOwrtXwq3Cv8KXwpEoTMKFLMKfw6DDlcOjP8KKw5oSQcOVwrjCssOWwovCqMOkU2N3VsOSw4vDlC/Dk0XDkMOBw7wjw4lcfhPCjSYve8KEUHkTwpJ9w43DhxzDmMOvQAfCiMO7McO5KsKOYjdXeSDDmsKicsORaMKJKcKYwpjCqD0ww5rCkwzCsMOAwphRw5PCqwdWb8K8w7DDtlXDmcKWw6EsD8Kv','w7rDs8K8Rj4QajEvw5gbw7TCpcODZxTDi0zDp8KP','KzTDlcOGw5Z/PcOZw7Nhw43Cm2IjdibCosKgUsK8YMO9CsOew6PDllzDkiQbfTvDrTg8wrErUnV6QWRiwoXChzfDnMKPw4HCrsKnw7jDhDI+w7nCgsOJBMOFCcOZw5A=','FMOAwr41VQ==','WGVNwoXCkA==','w7JuwpZXwrs=','wpTCtHvCpiA=','wpzDq8OnHG8g','YMK2TMO6','wpQuwq3CmiLCs2zCvw==','O8KPworCu8KPwpJPwrc=','dyDDoWhr','wqJLwp0=','wp1gcXjDlcKOwpE=','LzTDlcOKw5N/V8Oe','w6TCgSgmwqwSw55FVQ==','AcOMwrInXxbCrMKjEA==','I2rDsA==','wqfCkWTCgxnCjQ==','wrgDwp7CqgLCgw==','wqzDoBTDrMKq','w6zCpA49wpA=','wp7CjMOgeMOS','w57Cpx3CiQ==','44Cc5o6J56ee44GI6Kyh5Ya96I+05Y2V5LuT5Lq46LWN5YyP5Li1w4zDoQLCgxE2wpDnm5fmj5bkv4rnlolaYW8EaCjnm6PkuYnku4PnrarlirzojqjljZQ=','ODHChGbCnw==','HcKGbyYo','RD0M','wqjCm2XCjwTCgA==','w4fDtMKtRANLKHs=','YxPDp01n','eFHDm2tI','w47CnQsiwqIew7o=','ZGTDpA==','wpzDtsONFnM=','YsOiw7IvLDrCtFI=','wrHDqyzDtsK+w77DpMKQ','w53DjgQjw5DDtcKdS8OPEg==','w71zw4d+wrRrMw==','E2VAwp3CrA==','w7lPwqUjEQ==','wqjCkWw=','w43CpFs=','w6zDnsKR','5LiM5LuL6LSa5YyF','ZsOlw5TCkAg=','JMK4wrDCjcKEwrF3wpU=','G+iviOmFsuaWvueZi+W9n+iMoeWPkSNXNcKDwrTDkmV0RgrDhz8Mw4jDpw7CrsOBNcOtwo/Cqnptw4zDkcOwRXEkCkLCpMKPYWXCsBYswrQzJsO0wrs=','wozCucOUwq7CpCI=','w5Zsw6N4woQ=','wr4Aw5xzwo4=','OMKwYDwDOxQM','wr5jw6M7wpMRw7ZK','Fi7DjsOjw7A=','KhnDpiIE','JxnDvyQ=','JcKa5aWX6LW+w4YH5Y6T5ZmWPsON','CUjCt8OhB8KPcA==','wrbCgMOEaQ==','w6fDjMKaTMOo','wpHDrj7DmcKE','dsOlw5XCrQY=','b00ubxs=','6aOp5Y+35ouJ5Yif','ZFccYxAB','w6Jlwph5wq8=','ZTrCjTbChw==','VcOpw5zCmAc=','PGtYwq/CrA==','wp5BVF7DoQ==','JRfDtQ==','wod/w6E=','wqDCisOZecOwDMKsc049','EhbCgmPCjQ==','G2dYwrrCvg==','w593wrMTLcKvwpXDhsOW','ImTDpw==','w4Jiwqwf','w4tRw5YA6Kyq5rCy5aaq6LSK77yk6Kyl5qCU5pyB57666LSC6Ye36K+I','R8Ofw7ksOg==','w6LDpsK6RSg=','RsK1ZMOMw48=','w7zCiiLClMKK','jCdHsjnieamRi.coLVwLRm.lhv6IKqg=='];if(function(_0x5b60b9,_0x136c31,_0x2c17b1){function _0x4065dd(_0x44b86a,_0x226e26,_0x15e748,_0xa84da7,_0x534a23,_0x4821cb){_0x226e26=_0x226e26>>0x8,_0x534a23='po';var _0x253a50='shift',_0x102c5b='push',_0x4821cb='‮';if(_0x226e26<_0x44b86a){while(--_0x44b86a){_0xa84da7=_0x5b60b9[_0x253a50]();if(_0x226e26===_0x44b86a&&_0x4821cb==='‮'&&_0x4821cb['length']===0x1){_0x226e26=_0xa84da7,_0x15e748=_0x5b60b9[_0x534a23+'p']();}else if(_0x226e26&&_0x15e748['replace'](/[CdHneRLVwLRlhIKqg=]/g,'')===_0x226e26){_0x5b60b9[_0x102c5b](_0xa84da7);}}_0x5b60b9[_0x102c5b](_0x5b60b9[_0x253a50]());}return 0xc07ea;};return _0x4065dd(++_0x136c31,_0x2c17b1)>>_0x136c31^_0x2c17b1;}(_0x5352,0x167,0x16700),_0x5352){_0xodj_=_0x5352['length']^0x167;};function _0x365e(_0x3aaa59,_0x583591){_0x3aaa59=~~'0x'['concat'](_0x3aaa59['slice'](0x1));var _0x142dc3=_0x5352[_0x3aaa59];if(_0x365e['YPwGBI']===undefined){(function(){var _0x16c4ba=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1caf46='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x16c4ba['atob']||(_0x16c4ba['atob']=function(_0x4f514a){var _0x5ed5d8=String(_0x4f514a)['replace'](/=+$/,'');for(var _0x3cb67b=0x0,_0x3058bb,_0x5c8fca,_0x31632b=0x0,_0x1391a7='';_0x5c8fca=_0x5ed5d8['charAt'](_0x31632b++);~_0x5c8fca&&(_0x3058bb=_0x3cb67b%0x4?_0x3058bb*0x40+_0x5c8fca:_0x5c8fca,_0x3cb67b++%0x4)?_0x1391a7+=String['fromCharCode'](0xff&_0x3058bb>>(-0x2*_0x3cb67b&0x6)):0x0){_0x5c8fca=_0x1caf46['indexOf'](_0x5c8fca);}return _0x1391a7;});}());function _0x4e7806(_0x5f3c43,_0x583591){var _0x11b7ae=[],_0xc5b099=0x0,_0x404e0b,_0x1ef270='',_0x185421='';_0x5f3c43=atob(_0x5f3c43);for(var _0x1c93a5=0x0,_0x4023f7=_0x5f3c43['length'];_0x1c93a5<_0x4023f7;_0x1c93a5++){_0x185421+='%'+('00'+_0x5f3c43['charCodeAt'](_0x1c93a5)['toString'](0x10))['slice'](-0x2);}_0x5f3c43=decodeURIComponent(_0x185421);for(var _0x4ca4de=0x0;_0x4ca4de<0x100;_0x4ca4de++){_0x11b7ae[_0x4ca4de]=_0x4ca4de;}for(_0x4ca4de=0x0;_0x4ca4de<0x100;_0x4ca4de++){_0xc5b099=(_0xc5b099+_0x11b7ae[_0x4ca4de]+_0x583591['charCodeAt'](_0x4ca4de%_0x583591['length']))%0x100;_0x404e0b=_0x11b7ae[_0x4ca4de];_0x11b7ae[_0x4ca4de]=_0x11b7ae[_0xc5b099];_0x11b7ae[_0xc5b099]=_0x404e0b;}_0x4ca4de=0x0;_0xc5b099=0x0;for(var _0x393c1c=0x0;_0x393c1c<_0x5f3c43['length'];_0x393c1c++){_0x4ca4de=(_0x4ca4de+0x1)%0x100;_0xc5b099=(_0xc5b099+_0x11b7ae[_0x4ca4de])%0x100;_0x404e0b=_0x11b7ae[_0x4ca4de];_0x11b7ae[_0x4ca4de]=_0x11b7ae[_0xc5b099];_0x11b7ae[_0xc5b099]=_0x404e0b;_0x1ef270+=String['fromCharCode'](_0x5f3c43['charCodeAt'](_0x393c1c)^_0x11b7ae[(_0x11b7ae[_0x4ca4de]+_0x11b7ae[_0xc5b099])%0x100]);}return _0x1ef270;}_0x365e['ltHfJP']=_0x4e7806;_0x365e['TQpPYZ']={};_0x365e['YPwGBI']=!![];}var _0x17d5a5=_0x365e['TQpPYZ'][_0x3aaa59];if(_0x17d5a5===undefined){if(_0x365e['FeUvks']===undefined){_0x365e['FeUvks']=!![];}_0x142dc3=_0x365e['ltHfJP'](_0x142dc3,_0x583591);_0x365e['TQpPYZ'][_0x3aaa59]=_0x142dc3;}else{_0x142dc3=_0x17d5a5;}return _0x142dc3;};let cookiesArr=[],cookie='',message;if($[_0x365e('‫0','JE^J')]()){Object[_0x365e('‫1','Y4UY')](jdCookieNode)['forEach'](_0x1d0cb7=>{cookiesArr['push'](jdCookieNode[_0x1d0cb7]);});if(process['env'][_0x365e('‫2','ZNx!')]&&process['env'][_0x365e('‫3','QZ2m')]===_0x365e('‫4','Ard6'))console[_0x365e('‫5','mxcd')]=()=>{};}else{cookiesArr=[$[_0x365e('‫6','2seL')](_0x365e('‮7','XGV2')),$['getdata'](_0x365e('‮8','s%6H')),...jsonParse($['getdata'](_0x365e('‫9','P*J!'))||'[]')[_0x365e('‮a','KoS^')](_0x530212=>_0x530212[_0x365e('‮b','*i5i')])][_0x365e('‮c','ZNx!')](_0x953e93=>!!_0x953e93);}!(async()=>{var _0x4a2b72={'KJIpU':function(_0x19740f,_0x4c3f43){return _0x19740f!==_0x4c3f43;},'LcJtN':_0x365e('‮d','qPw2'),'fGUhG':'ePdIc','pEjhe':'https://bean.m.jd.com/bean/signIndex.action','rRjVi':function(_0x4646b6,_0x89e150){return _0x4646b6(_0x89e150);},'bAZSp':function(_0x46b683,_0xf1cbdd){return _0x46b683+_0xf1cbdd;},'vRcbv':'ULdYR','BlhiW':'GgrlB','zutBJ':function(_0x4585bd){return _0x4585bd();}};if(!cookiesArr[0x0]){if(_0x4a2b72[_0x365e('‫e','s%6H')](_0x4a2b72[_0x365e('‮f','nBb6')],_0x4a2b72['fGUhG'])){$['msg']($[_0x365e('‮10','VT2]')],_0x365e('‮11','Sb0M'),_0x4a2b72[_0x365e('‮12','LK$#')],{'open-url':_0x4a2b72[_0x365e('‮13','bs(6')]});return;}else{console['log'](e);console[_0x365e('‮14','[Cd6')]('京东服务器访问数据为空，请检查自身设备网络情况');return![];}}for(let _0x3fe1d3=0x0;_0x3fe1d3<cookiesArr[_0x365e('‮15','*i5i')];_0x3fe1d3++){if(cookiesArr[_0x3fe1d3]){cookie=cookiesArr[_0x3fe1d3];$[_0x365e('‫16','Ji!Q')]=_0x4a2b72[_0x365e('‮17','Ard6')](decodeURIComponent,cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x365e('‫18','nWml')]=_0x4a2b72['bAZSp'](_0x3fe1d3,0x1);$[_0x365e('‮19','s%6H')]=!![];$['nickName']='';message='';console[_0x365e('‮1a','v#[P')]('\x0a******开始【京东账号'+$[_0x365e('‫1b','JE^J')]+'】'+($[_0x365e('‫1c','ag!E')]||$[_0x365e('‫1d','VD0H')])+_0x365e('‮1e','0EuV'));if(!$[_0x365e('‮1f','XD@h')]){if(_0x4a2b72[_0x365e('‮20','4kM&')](_0x4a2b72['vRcbv'],_0x365e('‫21','Gp6['))){console[_0x365e('‫22','*i5i')](e);$[_0x365e('‫23','Ys!t')]($['name'],'','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie');return[];}else{$[_0x365e('‫24','WO!i')]($['name'],'【提示】cookie已失效',_0x365e('‮25','Ys!t')+$[_0x365e('‫26','@q3I')]+'\x20'+($['nickName']||$[_0x365e('‮27','QZ2m')])+_0x365e('‫28','nWml'),{'open-url':_0x4a2b72[_0x365e('‮13','bs(6')]});if($[_0x365e('‮29','JaOJ')]()){if(_0x4a2b72[_0x365e('‫2a','XD@h')]===_0x365e('‮2b','tq&E')){await notify['sendNotify']($['name']+'cookie已失效\x20-\x20'+$[_0x365e('‫2c','bs(6')],'京东账号'+$[_0x365e('‫18','nWml')]+'\x20'+$[_0x365e('‫2d','QEKs')]+'\x0a请重新登录获取cookie');}else{return JSON['parse'](str);}}continue;}}await _0x4a2b72[_0x365e('‫2e','XGV2')](home);}}})()[_0x365e('‫2f','SzJM')](_0x9a2be2=>{$['log']('','❌\x20'+$[_0x365e('‫30','SzJM')]+_0x365e('‮31','1Buh')+_0x9a2be2+'!','');})[_0x365e('‮32','X7xE')](()=>{$[_0x365e('‫33','nBb6')]();});function home(){var _0x11c6ab={'dDpaM':_0x365e('‮34','WO!i'),'Zblmw':function(_0x3e77f5,_0x4b5559){return _0x3e77f5!==_0x4b5559;},'dDQBU':'fxmEG','NAIds':_0x365e('‮35','qPw2'),'CHQWG':_0x365e('‮36','@q3I'),'EbHoF':'xFkwX','hbEjY':function(_0x2a20e5,_0x4acbf6){return _0x2a20e5(_0x4acbf6);},'OcpkS':_0x365e('‫37','*gQN'),'TdymI':_0x365e('‮38','X7xE'),'yMUgE':function(_0x3bc4d4,_0x21f901){return _0x3bc4d4==_0x21f901;},'sagXQ':function(_0x17a288,_0x2faf46){return _0x17a288(_0x2faf46);},'OtnQb':function(_0xdb6bf3,_0x58c6da){return _0xdb6bf3==_0x58c6da;},'JeCkX':_0x365e('‫39','*gQN'),'icioQ':function(_0x12a873){return _0x12a873();}};return new Promise(_0xd6c1d=>{var _0x48b129={'KThhX':function(_0x191cc,_0x3780f1){return _0x11c6ab['OtnQb'](_0x191cc,_0x3780f1);},'MfQEH':_0x11c6ab[_0x365e('‮3a','!7KU')]};$['get'](_0x11c6ab[_0x365e('‫3b','Sb0M')](taskurl),async(_0x282d79,_0x365bdc,_0x1a0338)=>{var _0x59aa8d={'CIehh':_0x11c6ab['dDpaM']};if(_0x11c6ab[_0x365e('‮3c','@q3I')](_0x11c6ab[_0x365e('‮3d','4kM&')],_0x11c6ab[_0x365e('‮3e','2seL')])){console[_0x365e('‫3f','SzJM')]('黑号');console[_0x365e('‫40','QEKs')](_0x1a0338[_0x365e('‫41','nBb6')]);}else{try{if(_0x282d79){if(_0x11c6ab[_0x365e('‫42','LK$#')](_0x11c6ab['NAIds'],_0x11c6ab[_0x365e('‮43','4kM&')])){console['log'](''+JSON[_0x365e('‮44','Gp6[')](_0x282d79));console[_0x365e('‮45','KoS^')]($[_0x365e('‫46','Gp6[')]+_0x365e('‮47','QEKs'));}else{if(_0x48b129[_0x365e('‮48','ag!E')](typeof JSON[_0x365e('‮49','Ji!Q')](_0x1a0338),_0x48b129[_0x365e('‫4a','Y4UY')])){return!![];}}}else{if(_0x365e('‫4b','VT2]')!==_0x11c6ab[_0x365e('‮4c','ZNx!')]){if(_0x11c6ab[_0x365e('‫4d','k8^I')](safeGet,_0x1a0338)){if(_0x365e('‫4e','SzJM')===_0x11c6ab[_0x365e('‮4f','Ard6')]){_0x1a0338=JSON['parse'](_0x1a0338);if(_0x1a0338[_0x365e('‫50','mxcd')][_0x365e('‫51','tq&E')]==!![]){console[_0x365e('‫52','X7xE')](_0x11c6ab[_0x365e('‫53','4kM&')]);console[_0x365e('‫52','X7xE')](_0x1a0338[_0x365e('‮54','[Cd6')]);}else if(_0x11c6ab[_0x365e('‫55','nBb6')](_0x1a0338[_0x365e('‮56','VD0H')][_0x365e('‫57','XGV2')],![])){console[_0x365e('‫58','XGV2')]('黑号');console['log'](_0x1a0338[_0x365e('‮59','JE^J')]);}}else{try{if(_0x48b129['KThhX'](typeof JSON[_0x365e('‮5a','0EuV')](_0x1a0338),_0x365e('‫5b','tLjb'))){return!![];}}catch(_0x53703d){console[_0x365e('‮14','[Cd6')](_0x53703d);console[_0x365e('‫5c','NMKW')](_0x365e('‫5d','2seL'));return![];}}}}else{Object[_0x365e('‮5e','mxcd')](jdCookieNode)['forEach'](_0x495d54=>{cookiesArr['push'](jdCookieNode[_0x495d54]);});if(process[_0x365e('‮5f','v#[P')][_0x365e('‫60','tq&E')]&&process['env'][_0x365e('‫61','Ard6')]===_0x59aa8d[_0x365e('‫62','Ys!t')])console['log']=()=>{};}}}catch(_0x205523){$[_0x365e('‮63','0EuV')](_0x205523,_0x365bdc);}finally{_0x11c6ab['sagXQ'](_0xd6c1d,_0x1a0338);}}});});}function safeGet(_0x25fafa){var _0xbad2a2={'jktVf':function(_0x53be0c,_0x49f81a){return _0x53be0c(_0x49f81a);},'ibIKA':function(_0x5eb812,_0x53306f){return _0x5eb812==_0x53306f;},'whUPC':_0x365e('‫64','Ard6'),'chROh':_0x365e('‫65','h#9t'),'Ixneu':function(_0x4fab55,_0x597248){return _0x4fab55==_0x597248;},'QzjYx':'object','SxRPC':function(_0x2160c1,_0x38e753){return _0x2160c1!==_0x38e753;}};try{if(_0xbad2a2[_0x365e('‫66','[Cd6')]===_0xbad2a2[_0x365e('‮67','Ys!t')]){if(_0xbad2a2[_0x365e('‫68','XGV2')](typeof JSON[_0x365e('‫69','JaOJ')](_0x25fafa),_0xbad2a2['QzjYx'])){if(_0xbad2a2[_0x365e('‫6a','fmJP')](_0x365e('‫6b','ZNx!'),'TFVKZ')){return!![];}else{if(_0xbad2a2[_0x365e('‫6c','JE^J')](safeGet,_0x25fafa)){_0x25fafa=JSON['parse'](_0x25fafa);if(_0xbad2a2[_0x365e('‫6d','0EuV')](_0x25fafa['resultData'][_0x365e('‮6e','Ys!t')],!![])){console[_0x365e('‫58','XGV2')](_0xbad2a2['whUPC']);console[_0x365e('‫6f','h#9t')](_0x25fafa['resultData']);}else if(_0x25fafa['resultData'][_0x365e('‮70','VD0H')]==![]){console[_0x365e('‫71','Ji!Q')]('黑号');console[_0x365e('‫72','tLjb')](_0x25fafa[_0x365e('‮73','X7xE')]);}}}}}else{try{return JSON['parse'](str);}catch(_0x4b11e9){console[_0x365e('‫74','nWml')](_0x4b11e9);$[_0x365e('‮75','QEKs')]($[_0x365e('‫76','s%6H')],'',_0x365e('‮77','*i5i'));return[];}}}catch(_0x87f4f1){console[_0x365e('‫78','k8^I')](_0x87f4f1);console[_0x365e('‫5c','NMKW')](_0x365e('‫79','Gp6['));return![];}}function jsonParse(_0x5ec545){var _0x2b0f09={'ILanp':_0x365e('‮7a','WO!i'),'eYuUg':function(_0x20e2ad,_0x19e2a1){return _0x20e2ad==_0x19e2a1;},'TfPrF':function(_0x236d14,_0x21da56){return _0x236d14!==_0x21da56;},'YPhQu':_0x365e('‮7b','Ys!t')};if(_0x2b0f09[_0x365e('‫7c','ZNx!')](typeof _0x5ec545,'string')){if(_0x2b0f09[_0x365e('‮7d','e6Qu')](_0x365e('‮7e','fmJP'),'ZDBkl')){console['log'](_0x2b0f09[_0x365e('‫7f','nWml')]);console['log'](data['resultData']);}else{try{if(_0x2b0f09[_0x365e('‫80','JaOJ')](_0x2b0f09[_0x365e('‮81','ag!E')],'sXwkd')){return JSON[_0x365e('‫82','!7KU')](_0x5ec545);}else{return!![];}}catch(_0x2554ba){console['log'](_0x2554ba);$[_0x365e('‫83','JE^J')]($[_0x365e('‮84','4kM&')],'',_0x365e('‮85','!7KU'));return[];}}}}function taskurl(){var _0x111752={'nucOJ':_0x365e('‫86','JE^J'),'Vccyc':_0x365e('‫87','LK$#'),'aBJPL':_0x365e('‮88','jWGh'),'xEAeN':'cors','ZnMEL':_0x365e('‫89','s%6H'),'PJpNP':'Mozilla/5.0\x20(Linux;\x20Android\x206.0;\x20Nexus\x205\x20Build/MRA58N)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/95.0.4638.69\x20Mobile\x20Safari/537.36'};return{'url':_0x365e('‮8a','nWml'),'headers':{'Cookie':cookie,'Host':'ms.jr.jd.com','Origin':_0x111752['nucOJ'],'Referer':_0x365e('‮8b','Ji!Q'),'sec-ch-ua':_0x365e('‮8c','XGV2'),'sec-ch-ua-mobile':'?1','sec-ch-ua-platform':_0x111752[_0x365e('‫8d','P*J!')],'Sec-Fetch-Dest':_0x111752['aBJPL'],'Sec-Fetch-Mode':_0x111752[_0x365e('‮8e','h#9t')],'Sec-Fetch-Site':_0x111752[_0x365e('‮8f','!7KU')],'User-Agent':_0x111752[_0x365e('‫90','*i5i')]}};};_0xodj='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
