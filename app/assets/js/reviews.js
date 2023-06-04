(function() {
  try {
    document.addEventListener('readystatechange', function(ev) {
      if (ev.target.readyState === "complete" || (ev.target.readyState !== "loading" && !document.documentElement.doScroll)) {
        _init();
      } else {
        document.addEventListener("DOMContentLoaded", _init);
      }
    }, false);

    class App {

      constructor() {
        App.api_url = 'https://api.smartwidgets.io/';
        App.debug = false;
        App.init();
      }

      static init() {
        document.dispatchEvent(new Event("swAppInit"));
        if (typeof window.swapp!='undefined') if (document.querySelector('.sw-app')!=null && !document.querySelectorAll('.sw-app')[0].hasAttribute('id')) {delete(window.swapp);} else return;
        this.id = window.swapp = `f${(~~(Math.random()*1e8)).toString(16)+(+new Date).toString(16)}`;
        window.swapp_ref = document.referrer;
        var keys = [];
        this.apps = document.body.querySelectorAll('.sw-app[data-app]');
        this.apps.forEach( function (v, k) {
          keys.push(v.getAttribute('data-app'));
          v.setAttribute('id', 'sw-app-'+v.getAttribute('data-app'));
          v.innerHTML = "";
        });
        keys = App.uniqueArray(keys);
        if (keys.length) App.xhrLoad({"key":keys, "x-referer":window.location.href, "x-device":App.identifyDevice()});
        document.dispatchEvent(new Event("swAppComplite"));
      }

      static xhrLoad(data = {}) {
        var xhr = new XMLHttpRequest();
        var timeout = 30000;
        xhr.withCredentials = true;
        xhr.onload = App.xhrSuccess;
        xhr.onerror = App.xhrError;
        xhr.callback = App.callback;
        xhr.ontimeout = function () {console.error("The request for " + App.api_url + " timed out.");};
        xhr.timeout = timeout;
        xhr.open("POST", App.api_url, true);
        xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
        var data = JSON.stringify(data);
        xhr.send(data);
      }

      static xhrSuccess(e) {
        var files = [];
        window.swapp_data = {};
        if (e.target.readyState === 4 && e.target.status === 200) {
          var json = JSON.parse(e.target.responseText);
          if (json.error==null && typeof json.data!='undefined') {
            document.querySelectorAll('script[data-sw=script]').forEach(function(v){v.remove();});
            Object.keys(json.data).forEach(function(key) {
              if (typeof this[key].type!='undefined') {
                if (typeof window.swapp_data[this[key].type]!='object') window.swapp_data[this[key].type] = {};
                if (typeof this[key]!='undefined') window.swapp_data[this[key].type][key] = this[key];
              }
              if (typeof this[key].files!='undefined') this[key].files.forEach(function(v, k) {
                files.push(v);
              });
            }, json.data);
            files = App.uniqueArray(files);
            files.forEach(function(v, k) {App.dynamicallyLoadScript(v)});
          }
          if (json.error==null && typeof json.quota!='undefined') {
            Object.keys(json.quota).forEach(function(key) {
              if (document.body.querySelector('#sw-app-'+this[key].key)!=null) document.querySelector('#sw-app-'+this[key].key).innerHTML='<div style="float: none !important;width: 100% !important;height: auto !important;padding: 20px 0 !important;text-align: center;position: relative !important;z-index: 1 !important;visibility: visible !important;opacity: 1 !important;background: transparent !important;margin: 20px 0 !important;"><div style="float: none !important;position: absolute !important;width: 100% !important;height: 100%;filter: blur(4px);-o-filter:blur(4px);-ms-filter:blur(4px);-moz-filter:blur(4px);-webkit-filter:blur(4px);top: 0;left: 0;background-color: #eeeeee;z-index: -1;"></div><div style="float: none !important;color: #212121 !important;opacity: 1 !important;display: block !important;visibility: visible !important;background: transparent !important;width: auto !important;">РџРѕРєР°Р· РІРёРґР¶РµС‚Р° РїСЂРёРѕСЃС‚Р°РЅРѕРІР»РµРЅ, <a href="https://smartwidgets.ru/?utm_source=website&utm_campaign='+document.location.host+'&utm_medium=quota" target="_blank" style="text-decoration: underline; color:#212121;">РїСЂРѕРґР»РёС‚СЊ</a>.</div><div style="float: none !important;opacity: 1 !important;display: inline-block !important;visibility: visible !important;background: transparent !important;width: auto !important;"><a target="_blank" href="https://smartwidgets.ru/?utm_source=website&utm_campaign='+document.location.host+'&utm_medium=createdby" style="display: inline-block !important;height: auto !important;opacity: 1 !important;padding: 4px 10px !important;background-color: #fafafa !important;display: flex !important;align-items: center;border-radius: 3px;margin: 20px 0 0 0 !important;font-size: 10px !important;color: grey !important;text-decoration: none;white-space: nowrap;visibility: visible !important;pointer-events: auto !important;cursor: pointer !important;width: inherit !important;max-width: inherit !important;width: auto !important;">РЎРґРµР»Р°РЅРѕ РЅР°<img loading="lazy" src="https://res.smartwidgets.ru/res/sw_logo_grey.svg" style="opacity: 1 !important;margin: 0 0 0 4px !important;width: inherit !important;max-width: inherit !important;height: 18px !important;visibility: visible !important;display: inline-block !important;background: transparent !important;width: auto !important;" alt="SmartWidgets"></a></div></div>'
            }, json.quota);
          }
        }
      }

      static xhrError(e) {
        if (App.debug===true) console.error(e.target.statusText);
      }

      static callback(e) {

      }

      static uniqueArray(array)
      {
        return array.filter((element, index) => {return array.indexOf(element) === index;});
      }

      static dynamicallyLoadScript(url) {
        var script = document.createElement("script");
        script.src = url+'?'+Math.round(Date.now()/*/1000000*/);
        script.async = false;
        script.charset = 'UTF-8';
        script.dataset.sw = 'script';
        document.head.appendChild(script);
      }

      static identifyDevice() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) ? 1 : 0);
      }
    }

    function _init() {if (document.domain=='app.smartwidgets.ru') window.swapp_ = new App(); else new App();}
    if (document.readyState === "complete") {
      document.addEventListener('DOMContentLoaded', function(ev) {
        delete(window.swapp);
        _init();
      });
    }

    var sw_autostart = setInterval(function() {if (document.readyState === "complete") {clearInterval(sw_autostart);_init();}}, 500);
    setInterval(function() {_init();}, 5);
  } catch (e) {console.error(e);}
})();