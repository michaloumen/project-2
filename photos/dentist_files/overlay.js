google.maps.__gjsload__('overlay', function(_){var $y=function(a){this.g=a},Laa=function(){},az=function(a){a.Th=a.Th||new Laa;return a.Th},bz=function(a){this.Fa=new _.Hi(function(){var b=a.Th;if(a.getPanes()){if(a.getProjection()){if(!b.jh&&a.onAdd)a.onAdd();b.jh=!0;a.draw()}}else{if(b.jh)if(a.onRemove)a.onRemove();else a.remove();b.jh=!1}},0)},Maa=function(a,b){function c(){return _.Ii(e.Fa)}var d=az(a),e=d.zg;e||(e=d.zg=new bz(a));_.A(d.Da||[],_.K.removeListener);var f=d.Ka=d.Ka||new _.yv,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.nk=d.nk||new $y(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Da=[_.K.addListener(a,"panes_changed",c),_.K.addListener(g,"zoom_changed",c),_.K.addListener(g,"offset_changed",c),_.K.addListener(b,"projection_changed",c),_.K.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.cg&&(_.P(b,"Ox"),
_.$n("Ox","-p",a))},fz=function(a){if(a){var b=a.getMap();if(Naa(a)!==b&&b&&b instanceof _.cg){var c=b.__gm;c.overlayLayer?a.__gmop=new cz(b,a,c.overlayLayer):c.i.then(function(d){d=d.lb;var e=new dz(b,d);d.kb(e);c.overlayLayer=e;ez(a);fz(a)})}}},ez=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,_.ao("Ox","-p",b.g),b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.j.nd(b),b.i&&(b.i=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},Naa=function(a){return(a=a.__gmop)?a.map:null},
cz=function(a,b,c){this.map=a;this.g=b;this.j=c;this.i=!1;_.P(this.map,"Ox");_.$n("Ox","-p",this.g);c.hd(this)},gz=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},dz=function(a,b){this.o=a;this.j=b;this.g=null;this.i=[]};_.z($y,_.M);
$y.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.Me(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var hz={};_.z(bz,_.M);hz.hd=function(a){if(a){var b=a.getMap();(az(a).Zj||null)!==b&&(b&&Maa(a,b),az(a).Zj=b)}};hz.nd=function(a){var b=az(a),c=b.Ka;c&&c.unbindAll();(c=b.nk)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Da&&_.A(b.Da,_.K.removeListener);b.Da=null;b.zg&&(b.zg.Fa.Ob(),b.zg=null);_.ao("Ox","-p",a);delete az(a).Zj};var iz={};cz.prototype.draw=function(){this.i||(this.i=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};dz.prototype.dispose=function(){};dz.prototype.Sb=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.Pq(this.o,this.j,function(){});k.Sb(a,b,c,d,e,f,g,h);a=_.p(this.i);for(b=a.next();!b.done;b=a.next())b=b.value,gz(b,k),b.draw()};dz.prototype.hd=function(a){this.i.push(a);this.g&&gz(a,this.g);this.j.refresh()};dz.prototype.nd=function(a){_.Za(this.i,a)};iz.hd=fz;iz.nd=ez;_.Jf("overlay",{Yi:function(a){if(a){(0,hz.nd)(a);(0,iz.nd)(a);var b=a.getMap();b&&(b instanceof _.cg?(0,iz.hd)(a):(0,hz.hd)(a))}},preventMapHitsFrom:function(a){_.Jr(a,{onClick:function(b){return _.er(b.event)},Ib:function(b){return _.br(b)},Ud:function(b){return _.cr(b)},Zb:function(b){return _.cr(b)},Lb:function(b){return _.dr(b)}}).ze(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.Nf);a.addEventListener("contextmenu",_.Nf);a.addEventListener("dblclick",_.Nf);a.addEventListener("mousedown",
_.Nf);a.addEventListener("mousemove",_.Nf);a.addEventListener("MSPointerDown",_.Nf);a.addEventListener("pointerdown",_.Nf);a.addEventListener("touchstart",_.Nf);a.addEventListener("wheel",_.Nf)}});});