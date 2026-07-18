import { useEffect } from 'react';

/**
 * Renders a Vidalytics video embed. The official snippet is a target <div>
 * (matched by id) plus a loader script that must run after the div exists —
 * so we render the div in JSX and run the loader in an effect. The player
 * fills the div, which reserves a 16:9 box via padding-top.
 */
function VidalyticsEmbed({ embedId, embedUrl, className }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `(function (v, i, d, a, l, y, t, c, s) {
      y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
      if (!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
      };}
      vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
    })(window, document, 'Vidalytics', '${embedId}', '${embedUrl}');`;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [embedId, embedUrl]);

  return (
    <div className={className}>
      <div
        id={embedId}
        style={{ width: '100%', position: 'relative', paddingTop: '56.25%' }}
      />
    </div>
  );
}

export default VidalyticsEmbed;
