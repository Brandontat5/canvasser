(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[304],{"+Oxi":function(e,t,a){"use strict"
a.r(t)
var n=a("ouhR")
var s=a.n(n)
var o=a("FIFq")
var r=a.n(o)
var i=a("fNL0")
var _=a("GLiE")
var l=a.n(_)
var c=a("yE80")
var d=function(e,t){for(var a in t)u.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},u={}.hasOwnProperty
var p=function(e){d(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){return this.set("groups",new o["Collection"]([],{comparator:c["a"].byGet("title")}))}
return t}(o["Model"])
var m=function(e,t){for(var a in t)f.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},f={}.hasOwnProperty
var g=function(e){m(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){return this.set("outcomes",new o["Collection"]([],{comparator:c["a"].byGet("friendly_name")}))}
t.prototype.count=function(){return this.get("outcomes").length}
t.prototype.statusCount=function(e){return this.get("outcomes").filter((function(t){return t.status()===e})).length}
t.prototype.mastery_count=function(){return this.statusCount("mastery")+this.statusCount("exceeds")}
t.prototype.remedialCount=function(){return this.statusCount("remedial")}
t.prototype.undefinedCount=function(){return this.statusCount("undefined")}
t.prototype.status=function(){return this.remedialCount()>0?"remedial":this.mastery_count()===this.count()?"mastery":this.undefinedCount()===this.count()?"undefined":"near"}
t.prototype.started=function(){return true}
t.prototype.toJSON=function(){return l.a.extend(t.__super__.toJSON.apply(this,arguments),{count:this.count(),mastery_count:this.mastery_count(),started:this.started(),status:this.status()})}
return t}(o["Model"])
var h=a("fVBa")
var b=a("btHx")
var y=function(e,t){for(var a in t)v.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},v={}.hasOwnProperty
var k=function(e){y(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.optionProperty("key")
t.prototype.parse=function(e){this.linked=e.linked
return e[this.key]}
return t}(b["a"])
class w extends b["a"]{url(){return"/api/v1/courses/".concat(this.course_id,"/outcome_groups")}}w.optionProperty("course_id")
w.prototype.model=g
class x extends b["a"]{url(){return"/api/v1/courses/".concat(this.course_id,"/outcome_group_links?outcome_style=full")}}x.optionProperty("course_id")
class j extends k{url(){return"/api/v1/courses/".concat(this.course_id,"/outcome_rollups?user_ids[]=").concat(this.user_id)}}j.optionProperty("course_id")
j.optionProperty("user_id")
j.prototype.key="rollups"
class C extends o["Collection"]{constructor(){super(...arguments)
this.fetch=()=>{const e=s.a.Deferred()
const t=l.a.values(this.rawCollections).map(e=>{e.loadAll=true
return e.fetch()})
s.a.when(...t).done(()=>this.processCollections(e))
return e}}initialize(){super.initialize(...arguments)
this.rawCollections={groups:new w([],{course_id:this.course_id}),links:new x([],{course_id:this.course_id}),rollups:new j([],{course_id:this.course_id,user_id:this.user_id})}
return this.outcomeCache=new o["Collection"]}rollups(){const e=this.rawCollections.rollups.at(0).get("scores")
const t=e.map(e=>[e.links.outcome,e])
return l.a.object(t)}populateGroupOutcomes(){const e=this.rollups()
this.outcomeCache.reset()
this.rawCollections.links.each(t=>{const a=new h["a"](t.get("outcome"))
const n=this.rawCollections.groups.get(t.get("outcome_group").id)
const s=e[a.id]
a.set("score",null!=s?s.score:void 0)
a.set("result_title",null!=s?s.title:void 0)
a.set("submission_time",null!=s?s.submitted_at:void 0)
a.set("count",(null!=s?s.count:void 0)||0)
a.group=n
n.get("outcomes").add(a)
this.outcomeCache.add(a)})}populateSectionGroups(){const e=new o["Collection"]
this.rawCollections.groups.each(t=>{let a
if(!t.get("outcomes").length)return
const n=t.get("parent_outcome_group")
const s=n?n.id:t.id;(a=e.get(s))||(a=e.add(new p({id:s,path:this.getPath(s)})))
a.get("groups").add(t)})
return this.reset(e.models)}processCollections(e){this.populateGroupOutcomes()
this.populateSectionGroups()
return e.resolve(this.models)}getPath(e){const t=this.rawCollections.groups.get(e)
const a=t.get("parent_outcome_group")
if(!a)return""
const n=this.getPath(a.id)
return(n?"".concat(n,": "):"")+t.get("title")}}C.optionProperty("course_id")
C.optionProperty("user_id")
C.prototype.comparator=c["a"].byGet("path")
var O=a("pPlI")
var S=a("pQTu")
var z=a("m0r6")
Object(z["a"])(JSON.parse('{"ar":{"exceeds_mastery_1f995dce":"تجاوز الإتقان","meets_mastery_754e1c06":"يلبي الإتقان","near_mastery_f25174a4":"قريب من الإتقان","unstarted_932f2990":"لم تبدأ","well_below_mastery_37664bdc":"أقل بكثير من الإتقان"},"cy":{"exceeds_mastery_1f995dce":"Yn well na’r lefel meistroli","meets_mastery_754e1c06":"Wedi Meistroli","near_mastery_f25174a4":"Bron wedi Meistroli","unstarted_932f2990":"Heb ddechrau","well_below_mastery_37664bdc":"Yn bell iawn o’r lefel Meistroli"},"da":{"exceeds_mastery_1f995dce":"Overstiger opfyldelse af læringsmål","meets_mastery_754e1c06":"Opfylder mål","near_mastery_f25174a4":"Tæt på opfyldelse af læringsmål","unstarted_932f2990":"Ikke startet","well_below_mastery_37664bdc":"Langt under opfyldelse af læringsmål"},"da-x-k12":{"exceeds_mastery_1f995dce":"Overstiger opfyldelse af læringsmål","meets_mastery_754e1c06":"Opfylder mål","near_mastery_f25174a4":"Tæt på opfyldelse af læringsmål","unstarted_932f2990":"Ikke startet","well_below_mastery_37664bdc":"Langt under opfyldelse af læringsmål"},"de":{"exceeds_mastery_1f995dce":"Übertrifft Leistungsziel","meets_mastery_754e1c06":"Leistungsziel erreicht","near_mastery_f25174a4":"Leistungsziel knapp erreicht","unstarted_932f2990":"Nicht gestartet","well_below_mastery_37664bdc":"Deutlich unter Leistungsziel"},"el":{"exceeds_mastery_1f995dce":"Υπερβαίνει την Μαεστρία/Τεχνογνωσία","meets_mastery_754e1c06":"Είναι σε Επίπεδο Επιδεξιότητας","near_mastery_f25174a4":"Κοντά στο Επίπεδο Επιδεξιότητας","unstarted_932f2990":"Δεν έχει ξεκινήσει","well_below_mastery_37664bdc":"Αρκετά Κάτω από το Επίπεδο Επιδεξιότητας"},"en-AU":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-AU-x-unimelb":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-CA":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB-x-lbs":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB-x-ukhe":{"exceeds_mastery_1f995dce":"Exceeds Mastery","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","unstarted_932f2990":"Unstarted","well_below_mastery_37664bdc":"Well Below Mastery"},"es":{"exceeds_mastery_1f995dce":"Excede el dominio","meets_mastery_754e1c06":"Reúne el dominio","near_mastery_f25174a4":"Cerca del dominio","unstarted_932f2990":"Sin comenzar","well_below_mastery_37664bdc":"Muy por debajo del dominio"},"fa":{"exceeds_mastery_1f995dce":"فراتر از تسلط","meets_mastery_754e1c06":"با تسلط مطابقت دارد","near_mastery_f25174a4":"نزدیک به تسلط","unstarted_932f2990":"شروع نشده","well_below_mastery_37664bdc":"پایین تر از سطح تسلط"},"fi":{"exceeds_mastery_1f995dce":"Ylittää hallinnan","meets_mastery_754e1c06":"täyttää hallinnan","near_mastery_f25174a4":"lähellä hallintaa","unstarted_932f2990":"Aloittamaton","well_below_mastery_37664bdc":"runsaasti hallinnan alapuolella"},"fr":{"exceeds_mastery_1f995dce":"Surpasse le niveau de maîtrise","meets_mastery_754e1c06":"Niveau de maîtrise atteint","near_mastery_f25174a4":"Proche du niveau de maîtrise","unstarted_932f2990":"Non commencé","well_below_mastery_37664bdc":"Bien inférieur au niveau de maîtrise"},"fr-CA":{"exceeds_mastery_1f995dce":"Surpasse le niveau de Maîtrise","meets_mastery_754e1c06":"Niveau de Maîtrise atteint","near_mastery_f25174a4":"Proche du niveau de maîtrise","unstarted_932f2990":"Non commencé","well_below_mastery_37664bdc":"Bien inférieur au niveau de maîtrise"},"he":{"exceeds_mastery_1f995dce":"מעבר לרף הנדרש למומחיות","meets_mastery_754e1c06":"עונה על דרישות ההתמחות","near_mastery_f25174a4":"קרוב להתמחות","unstarted_932f2990":"טרם החל","well_below_mastery_37664bdc":"רחוק מאד מהתמחות"},"ht":{"exceeds_mastery_1f995dce":"Depase Metriz","meets_mastery_754e1c06":"Respekte Metriz","near_mastery_f25174a4":"Pwòch Metriz","unstarted_932f2990":"Pa kòmanse","well_below_mastery_37664bdc":"Pi ba Metriz"},"hu":{"exceeds_mastery_1f995dce":"A jártassági szint fölött","meets_mastery_754e1c06":"Megfelel a jártassági szintnek","near_mastery_f25174a4":"Közel a jártassági szinthez","unstarted_932f2990":"Nincs elkezdve","well_below_mastery_37664bdc":"Jóval a jártassági szint alatt"},"hy":{"exceeds_mastery_1f995dce":"Գերազանցում է անցողիկ միավորը","meets_mastery_754e1c06":"Համապատասխանում է անցողիկ միավորին","near_mastery_f25174a4":"Մոտ է անցողիկ միավորին","unstarted_932f2990":"Չի սկսվել","well_below_mastery_37664bdc":"Բավական ցածր է անցողիկ միավորներից "},"is":{"exceeds_mastery_1f995dce":"Fer fram úr tileinkun","meets_mastery_754e1c06":"Uppfyllir tileinkun","near_mastery_f25174a4":"Nálægt tileinkun","unstarted_932f2990":"Óbyrjað","well_below_mastery_37664bdc":"Langt undir tileinkun"},"it":{"exceeds_mastery_1f995dce":"Supera il livello di padronanza","meets_mastery_754e1c06":"Soddisfa il livello di padronanza","near_mastery_f25174a4":"Padronanza quasi completa","unstarted_932f2990":"Non iniziato","well_below_mastery_37664bdc":"Ben al di sotto del livello di padronanza"},"ja":{"exceeds_mastery_1f995dce":"熟達を上回る","meets_mastery_754e1c06":"熟達を満たしている","near_mastery_f25174a4":"熟達に近い","unstarted_932f2990":"開始前","well_below_mastery_37664bdc":"熟達を大きく下回る"},"mi":{"exceeds_mastery_1f995dce":"Nui atu te mana","meets_mastery_754e1c06":"Tutuki mana","near_mastery_f25174a4":"Tata Mātatau","unstarted_932f2990":"Koare i tīmata","well_below_mastery_37664bdc":"Kei raro rawa atu Mātatau"},"nb":{"exceeds_mastery_1f995dce":"Overgår ekspertise","meets_mastery_754e1c06":"Innfrir forventningene","near_mastery_f25174a4":"Nær ekspertise","unstarted_932f2990":"Ikke påbegynt","well_below_mastery_37664bdc":"Innfrir ikke ekspertise"},"nb-x-k12":{"exceeds_mastery_1f995dce":"Overgår ekspertise","meets_mastery_754e1c06":"Innfrir forventningene","near_mastery_f25174a4":"Nær ekspertise","unstarted_932f2990":"Ikke påbegynt","well_below_mastery_37664bdc":"Innfrir ikke ekspertise"},"nl":{"exceeds_mastery_1f995dce":"Overtreft Meesterschap","meets_mastery_754e1c06":"Voldoende Meesterschap","near_mastery_f25174a4":"Bijna Meesterschap","unstarted_932f2990":"Nog niet begonnen","well_below_mastery_37664bdc":"Ruim onder Meesterschap"},"nn":{"exceeds_mastery_1f995dce":"Overskrid meistringsnivå","meets_mastery_754e1c06":"Møter meistringsnivå","near_mastery_f25174a4":"Nær meistringsnivå","unstarted_932f2990":"Ikkje starta","well_below_mastery_37664bdc":"Godt under meistringsnivå"},"pl":{"exceeds_mastery_1f995dce":"Przekracza poziom biegłości","meets_mastery_754e1c06":"Spełnia poziom biegłości","near_mastery_f25174a4":"Blisko biegłości","unstarted_932f2990":"Nierozpoczęto","well_below_mastery_37664bdc":"Znacznie poniżej poziomu biegłości"},"pt":{"exceeds_mastery_1f995dce":"Excede a Excelência","meets_mastery_754e1c06":"Completa o domínio","near_mastery_f25174a4":"Perto do Domínio","unstarted_932f2990":"Não iniciado","well_below_mastery_37664bdc":"Muito abaixo de Domínio"},"pt-BR":{"exceeds_mastery_1f995dce":"Excede Domínio","meets_mastery_754e1c06":"Encontra com Domínio","near_mastery_f25174a4":"Quase Domínio","unstarted_932f2990":"Não iniciado","well_below_mastery_37664bdc":"Muito abaixo de Domínio"},"ru":{"exceeds_mastery_1f995dce":"Превышает проходной балл","meets_mastery_754e1c06":"Соответствует проходному баллу","near_mastery_f25174a4":"Около проходного балла","unstarted_932f2990":"Не начато","well_below_mastery_37664bdc":"Гораздо ниже проходного балла"},"sl":{"exceeds_mastery_1f995dce":"Presega odličnost","meets_mastery_754e1c06":"Odličen","near_mastery_f25174a4":"Delno obvladano","unstarted_932f2990":"Nezačeto","well_below_mastery_37664bdc":"Precej pod odličnostjo"},"sv":{"exceeds_mastery_1f995dce":"Överträffar måluppfyllelse","meets_mastery_754e1c06":"Möter måluppfyllelse","near_mastery_f25174a4":"Nära måluppfyllelse","unstarted_932f2990":"Ej påbörjad","well_below_mastery_37664bdc":"Långt under måluppfyllelse"},"sv-x-k12":{"exceeds_mastery_1f995dce":"Överträffar måluppfyllelse","meets_mastery_754e1c06":"Möter måluppfyllelse","near_mastery_f25174a4":"Nära måluppfyllelse","unstarted_932f2990":"Ej påbörjad","well_below_mastery_37664bdc":"Långt under måluppfyllelse"},"tr":{"exceeds_mastery_1f995dce":"Yeterliğin Üstünde","meets_mastery_754e1c06":"Yeterliği Karşılıyor","near_mastery_f25174a4":"Yeterliğe Yakın","unstarted_932f2990":"Başlamamış","well_below_mastery_37664bdc":"Yeterliğin Epey Altında"},"uk":{"exceeds_mastery_1f995dce":"Перевищує Майстерність","meets_mastery_754e1c06":"Відповідає майстерності","near_mastery_f25174a4":"Майже майстерність","unstarted_932f2990":"Не розпочато","well_below_mastery_37664bdc":"Суттєво нижча майстерність"},"zh-Hans":{"exceeds_mastery_1f995dce":"超过掌握","meets_mastery_754e1c06":"达到掌握","near_mastery_f25174a4":"最接近的掌握","unstarted_932f2990":"未开始","well_below_mastery_37664bdc":"远低于掌握"},"zh-Hant":{"exceeds_mastery_1f995dce":"超過掌握程度","meets_mastery_754e1c06":"達到掌握程度","near_mastery_f25174a4":"接近掌握程度","unstarted_932f2990":"未開始","well_below_mastery_37664bdc":"遠低於掌握程度"}}'))
a("jQeR")
a("0sPK")
var G=S["default"].scoped("grade_summaryGroupView")
var I=a("3O+N")
var T=a.n(I)
a("DfGn")
var A=T.a.default
var P=A.template,H=A.templates=A.templates||{}
var M="grade-summary/progress-bar"
H[M]=P((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i="",_="function",l=this.escapeExpression
i+='<div class="bar-marker" style="left: '
if(r=a.masteryPercent)o=r.call(t,{hash:{},data:s})
else{r=t&&t.masteryPercent
o=typeof r===_?r.call(t,{hash:{},data:s}):r}i+=l(o)+'%"></div>\n<div class="bar-progress '
if(r=a.status)o=r.call(t,{hash:{},data:s})
else{r=t&&t.status
o=typeof r===_?r.call(t,{hash:{},data:s}):r}i+=l(o)+'" style="width: '
if(r=a.percentProgress)o=r.call(t,{hash:{},data:s})
else{r=t&&t.percentProgress
o=typeof r===_?r.call(t,{hash:{},data:s}):r}i+=l(o)+'%"></div>\n'
return i}))
var N=H[M]
var E=function(e,t){for(var a in t)B.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},B={}.hasOwnProperty
var D=function(e){E(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.className="bar"
t.prototype.template=N
return t}(r.a.View)
var R=a("WEIH")
var L=function(e,t){return function(){return e.apply(t,arguments)}},U=function(e,t){for(var a in t)V.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},V={}.hasOwnProperty
var X=function(e){U(t,e)
function t(){this.handleAdd=L(this.handleAdd,this)
this.handleReset=L(this.handleReset,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.key="outcome_results"
t.prototype.model=h["a"]
t.optionProperty("outcome")
t.prototype.url=function(){return"/api/v1/courses/"+this.course_id+"/outcome_results?user_ids[]="+this.user_id+"&outcome_ids[]="+this.outcome.id+"&include[]=alignments&per_page=100"}
t.prototype.loadAll=true
t.prototype.comparator=function(e){return-1*e.get("submitted_or_assessed_at").getTime()}
t.prototype.initialize=function(){var e
t.__super__.initialize.apply(this,arguments)
this.model=h["a"].extend({defaults:{points_possible:this.outcome.get("points_possible"),mastery_points:this.outcome.get("mastery_points")}})
this.course_id=null!=(e=ENV.context_asset_string)?e.replace("course_",""):void 0
this.user_id=ENV.student_id
this.on("reset",this.handleReset)
return this.on("add",this.handleAdd)}
t.prototype.handleReset=function(){return this.each(this.handleAdd)}
t.prototype.handleAdd=function(e){var t,a
t=e.get("links").alignment
e.set("alignment_name",null!=(a=this.alignments.get(t))?a.get("name"):void 0)
return e.get("points_possible")>0?e.set("score",e.get("points_possible")*e.get("percent")):e.set("score",e.get("mastery_points")*e.get("percent"))}
t.prototype.parse=function(e){var t
null==this.alignments&&(this.alignments=new r.a.Collection([]))
this.alignments.add((null!=e&&null!=(t=e.linked)?t.alignments:void 0)||[])
return e[this.key]}
return t}(k)
var q=a("bljh")
var W=a.n(q)
Object(z["a"])(JSON.parse('{"ar":{"date_ee500367":"التاريخ","score_f7ac9e08":"النقاط","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"أحدث درجات المستخدم %{current_user_name} ونتيجة %{outcome_name}."},"cy":{"date_ee500367":"Dyddiad","score_f7ac9e08":"Sgôr","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Y sgoriau diweddaraf ar gyfer y defnyddiwr %{current_user_name} a’r deilliant %{outcome_name}."},"da":{"date_ee500367":"Dato","score_f7ac9e08":"Resultat","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De seneste resultater for bruger %{current_user_name} og læringsudbytte %{outcome_name}."},"da-x-k12":{"date_ee500367":"Dato","score_f7ac9e08":"Resultat","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De seneste resultater for bruger %{current_user_name} og læringsudbytte %{outcome_name}."},"de":{"date_ee500367":"Datum","score_f7ac9e08":"Punktestand","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Die letzten Punkte für den Benutzer %{current_user_name} sowie das Lernziel %{outcome_name}"},"el":{"date_ee500367":"Ημερομηνία","score_f7ac9e08":"Βαθμολογία","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Οι πιο πρόσφατες βαθμολογίες του χρήστη %{current_user_name} και του αποτελέσματος %{outcome_name}."},"en-AU":{"date_ee500367":"Date","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"The most recent scores for user %{current_user_name} and outcome %{outcome_name}."},"en-AU-x-unimelb":{"date_ee500367":"Date","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"The most recent scores for user %{current_user_name} and outcome %{outcome_name}."},"en-CA":{"date_ee500367":"Date","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"The most recent scores for user %{current_user_name} and outcome %{outcome_name}."},"en-GB":{"date_ee500367":"Date","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Most recent scores for user %{current_user_name} and outcome %{outcome_name}."},"en-GB-x-lbs":{"date_ee500367":"Date","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Most recent scores for user %{current_user_name} and outcome %{outcome_name}."},"en-GB-x-ukhe":{"date_ee500367":"Date","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Most recent scores for user %{current_user_name} and outcome %{outcome_name}."},"es":{"date_ee500367":"Fecha","score_f7ac9e08":"Puntaje","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Los puntajes más recientes para el usuario %{current_user_name} y la competencia %{outcome_name}."},"fa":{"date_ee500367":"تاریخ","score_f7ac9e08":"نمره","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"جدیدترین نمره ها برای کاربر %{current_user_name} و نتیجه %{outcome_name}."},"fi":{"date_ee500367":"Päivämäärä","score_f7ac9e08":"Pistemäärä","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Viimeisimmät pistemäärät käyttäjälle %{current_user_name} ja tulokselle %{outcome_name}."},"fr":{"date_ee500367":"Date","score_f7ac9e08":"Note","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Les notes les plus récentes pour l\'utilisateur %{current_user_name} et l\'acquis %{outcome_name}."},"fr-CA":{"date_ee500367":"Date","score_f7ac9e08":"Note","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Les notes les plus récentes pour l\'utilisateur %{current_user_name} et le résultat %{outcome_name}."},"he":{"date_ee500367":"תאריך","score_f7ac9e08":"ציון","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"הציונים העדכניים ביותר של משתמש %{current_user_name} ותוצאות %{outcome_name}."},"ht":{"date_ee500367":"Dat","score_f7ac9e08":"Nòt","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Nòt ki pi resan pou %{current_user_name} e rezilta %{outcome_name}."},"hu":{"date_ee500367":"Dátum","score_f7ac9e08":"Eredmény","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"A legfrissebb pontszámok a/az %{current_user_name} felhasználó esetén, valamint a tanulási eredmények %{outcome_name}."},"hy":{"the_most_recent_scores_for_user_current_user_name__ea82f0b6":" %{current_user_name} օգտատիրոջ ամենավերջին միավորները և %{outcome_name} արդյունքները:"},"is":{"date_ee500367":"Dagsetning","score_f7ac9e08":"Einkunn","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Nýjustu einkunnir fyrir %{current_user_name} og niðurstaða %{outcome_name}."},"it":{"date_ee500367":"Data","score_f7ac9e08":"Punteggio","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"I punteggi più recenti per l\'utente %{current_user_name} e l\'esito %{outcome_name}."},"ja":{"date_ee500367":"日付","score_f7ac9e08":"スコア","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"ユーザ %{current_user_name} の最近のスコアと結果 %{outcome_name}。"},"mi":{"date_ee500367":"Rā","score_f7ac9e08":"kaute","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Ko te tatau tino tata mō te kaiwhakamahi %{current_user_name} me te putanga %{outcome_name}."},"nb":{"date_ee500367":"Dato","score_f7ac9e08":"Resultat","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De nyligste resultat for brukeren %{current_user_name} og læringsmålet %{outcome_name}."},"nb-x-k12":{"date_ee500367":"Dato","score_f7ac9e08":"Resultat","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De siste resultatene for brukeren %{current_user_name} og målet %{outcome_name}."},"nl":{"date_ee500367":"Datum","score_f7ac9e08":"Score","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De meest recente scores voor gebruiker %{current_user_name} en %{outcome_name} resultaat."},"nn":{"date_ee500367":"Dato","score_f7ac9e08":"Resultat","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Det siste resultata for brukar %{current_user_name} og læringsmål %{outcome_name}."},"pl":{"date_ee500367":"Data","score_f7ac9e08":"Wynik punktowy","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Najnowsze wyniki użytkownika %{current_user_name} i rezultat %{outcome_name}."},"pt":{"date_ee500367":"Data","score_f7ac9e08":"Pontuação","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"As classificações mais recentes por utilizador %{current_user_name} e resultado %{outcome_name}."},"pt-BR":{"date_ee500367":"Data","score_f7ac9e08":"Pontuação","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"As pontuações mais recentes para o usuário %{current_user_name} e objetivo %{outcome_name}."},"ru":{"date_ee500367":"Дата","score_f7ac9e08":"Оценка","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Самые последние баллы для пользователя %{current_user_name} и результат %{outcome_name}."},"sl":{"date_ee500367":"Datum","score_f7ac9e08":"Rezultat","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Najnovejši rezultati za uporabnika %{current_user_name} in izid %{outcome_name}."},"sv":{"date_ee500367":"Datum","score_f7ac9e08":"Poäng","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De senaste resultaten för användaren %{current_user_name} och lärandemålen %{outcome_name}."},"sv-x-k12":{"date_ee500367":"Datum","score_f7ac9e08":"Poäng","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"De senaste resultaten för användaren %{current_user_name} och lärandemålen %{outcome_name}."},"tr":{"date_ee500367":"Tarih","score_f7ac9e08":"Puan","the_most_recent_scores_for_user_current_user_name__ea82f0b6":" %{current_user_name} için en son puan ve %{outcome_name} öğrenme çıktısı."},"uk":{"date_ee500367":"Дата","score_f7ac9e08":"Оцінка","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"Останні оцінки для користувача %{current_user_name}та результат %{outcome_name}"},"zh-Hans":{"date_ee500367":"日期","score_f7ac9e08":"分数","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"为用户的最新得分 %{current_user_name} 和结果 %{outcome_name}。"},"zh-Hant":{"date_ee500367":"日期","score_f7ac9e08":"分數","the_most_recent_scores_for_user_current_user_name__ea82f0b6":"用户 %{current_user_name} 的最新分数和成果 %{outcome_name}。"}}'))
S["default"].scoped("outcomes.accessible_line_graph")
var F=T.a.default
var J=F.template,K=F.templates=F.templates||{}
var Q="outcomes/accessibleLineGraph"
K[Q]=J((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i,_="",l=a.helperMissing,c=this.escapeExpression,d=this
function u(e,t){var n,s,o=""
o+='\n    <tr>\n      <td scope="row">'+c((n=a.tDateToString||e&&e.tDateToString,s={hash:{},data:t},n?n.call(e,e&&e.date,"medium",s):l.call(e,"tDateToString",e&&e.date,"medium",s)))+"</td>\n      <td>"+c((n=a.nf||e&&e.nf,s={hash:{format:"outcomeScore"},data:t},n?n.call(e,e&&e.y,s):l.call(e,"nf",e&&e.y,s)))+"</td>\n    </tr>\n  "
return o}_+="<table>\n  <caption>\n    "+c((r=a.t||t&&t.t,i={hash:{current_user_name:t&&t.current_user_name,outcome_name:t&&t.outcome_name,i18n_inferred_key:true},data:s},r?r.call(t,"the_most_recent_scores_for_user_current_user_name__ea82f0b6","The most recent scores for user %{current_user_name} and outcome %{outcome_name}.",i):l.call(t,"t","the_most_recent_scores_for_user_current_user_name__ea82f0b6","The most recent scores for user %{current_user_name} and outcome %{outcome_name}.",i)))+'\n  </caption>\n  <tr>\n    <th scope="col">'+c((r=a.t||t&&t.t,i={hash:{i18n_inferred_key:true},data:s},r?r.call(t,"date_ee500367","Date",i):l.call(t,"t","date_ee500367","Date",i)))+'</th>\n    <th scope="col">'+c((r=a.t||t&&t.t,i={hash:{i18n_inferred_key:true},data:s},r?r.call(t,"score_f7ac9e08","Score",i):l.call(t,"t","score_f7ac9e08","Score",i)))+"</th>\n  </tr>\n  "
o=a.each.call(t,t&&t.data,{hash:{},inverse:d.noop,fn:d.program(1,u,s),data:s});(o||0===o)&&(_+=o)
_+="\n</table>\n"
return _}))
var Y=K[Q]
l.a.mixin({sum(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
return l.a.reduce(e,(e,a)=>(null!=t?t(a):a)+e,a)}})
var Z,ee=function(e,t){return function(){return e.apply(t,arguments)}},te=function(e,t){for(var a in t)ae.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},ae={}.hasOwnProperty
Z=function(){function e(e){this.rawData=e}e.prototype.data=function(){return[[this.xValue(this.rawData[0]),this.yIntercept(),this.xValue(l.a.last(this.rawData)),this.slope()*this.xValue(l.a.last(this.rawData))+this.yIntercept()]]}
e.prototype.slope=function(){return(this.a()-this.b())/(this.c()-this.d())}
e.prototype.yIntercept=function(){return(this.e()-this.f())/this.n()}
e.prototype.n=function(){return this.rawData.length}
e.prototype.a=function(){return this.n()*l.a.sum(this.rawData,(e=this,function(t){return e.xValue(t)*e.yValue(t)}))
var e}
e.prototype.b=function(){return l.a.sum(this.rawData,this.xValue)*l.a.sum(this.rawData,this.yValue)}
e.prototype.c=function(){return this.n()*l.a.sum(this.rawData,(e=this,function(t){return Math.pow(e.xValue(t),2)}))
var e}
e.prototype.d=function(){return Math.pow(l.a.sum(this.rawData,this.xValue),2)}
e.prototype.e=function(){return l.a.sum(this.rawData,this.yValue)}
e.prototype.f=function(){return this.slope()*l.a.sum(this.rawData,this.xValue)}
e.prototype.xValue=function(e){return e.x}
e.prototype.yValue=function(e){return e.y}
return e}()
var ne=function(e){te(t,e)
function t(){this.yValue=ee(this.yValue,this)
this.xValue=ee(this.xValue,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("el")
t.optionProperty("height")
t.optionProperty("limit")
t.optionProperty("margin")
t.optionProperty("model")
t.optionProperty("timeFormat")
t.prototype.defaults={height:200,limit:8,margin:{top:20,right:20,bottom:30,left:40},timeFormat:"%Y-%m-%dT%XZ"}
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.deferred=$.Deferred()
this.collection=new X([],{outcome:this.model})
this.collection.on("fetched:last",(e=this,function(){return e.deferred.resolve()}))
var e
return this.collection.fetch()}
t.prototype.render=function(){if(this.deferred.isResolved()){if(this.collection.isEmpty())return this
this._prepareScales()
this._prepareAxes()
this._prepareLines()
this.svg=W.a.select(this.el).append("svg").attr("width",this.width()+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).attr("aria-hidden",true).append("g").attr("transform","translate("+this.margin.left+", "+this.margin.top+")")
this._appendAxes()
this._appendLines()
this.$(".screenreader-only").append(Y(this.toJSON()))}else this.deferred.done(this.render)
return this}
t.prototype.toJSON=function(){return{current_user_name:ENV.current_user.display_name,data:this.data(),outcome_name:this.model.get("friendly_name")}}
t.prototype.data=function(){return null!=this._data?this._data:this._data=this.collection.chain().last(this.limit).map((e=this,function(t,a){return{x:a,y:e.percentageFor(t.get("score")),date:t.get("submitted_or_assessed_at")}})).value()
var e}
t.prototype.masteryPercentage=function(){return this.model.get("points_possible")>0?this.model.get("mastery_points")/this.model.get("points_possible")*100:100}
t.prototype.percentageFor=function(e){return this.model.get("points_possible")>0?e/this.model.get("points_possible")*100:e/this.model.get("mastery_points")*100}
t.prototype.xValue=function(e){return this.x(e.x)}
t.prototype.yValue=function(e){return this.y(e.y)}
t.prototype._appendAxes=function(){this.svg.append("g").attr("class","x axis").attr("transform","translate(0,"+this.height+")").call(this.xAxis)
this.svg.append("g").attr("class","date-guides").attr("transform","translate(0,"+this.height+")").call(this.dateGuides)
this.svg.append("g").attr("class","y axis").call(this.yAxis)
this.svg.append("g").attr("class","guides").call(this.yGuides)
return this.svg.append("g").attr("class","mastery-percentage-guide").style("stroke-dasharray","3, 3").call(this.masteryPercentageGuide)}
t.prototype._appendLines=function(){this.svg.selectAll("circle").data(this.data()).enter().append("circle").attr("fill","black").attr("r",3).attr("cx",this.xValue).attr("cy",this.yValue)
this.svg.append("path").datum(this.data()).attr("d",this.line).attr("class","line").attr("stroke","black").attr("stroke-width",1).attr("fill","none")
null!=this.trend&&this.svg.selectAll(".trendline").data(this.trend.data()).enter().append("line").attr("class","trendline").attr("x1",(e=this,function(t){return e.x(t[0])})).attr("y1",function(e){return function(t){return e.y(t[1])}}(this)).attr("x2",function(e){return function(t){return e.x(t[2])}}(this)).attr("y2",function(e){return function(t){return e.y(t[3])}}(this)).attr("stroke-width",1)
var e
return this.svg}
t.prototype._prepareAxes=function(){this.xAxis=W.a.svg.axis().scale(this.x).tickFormat("")
this.dateGuides=W.a.svg.axis().scale(this.xTimeScale).tickValues([l.a.first(this.data()).date,l.a.last(this.data()).date]).tickFormat((function(e){return Intl.DateTimeFormat(S["default"].currentLocale(),{day:"numeric",month:"numeric"}).format(e)}))
this.yAxis=W.a.svg.axis().scale(this.y).orient("left").tickFormat((function(e){return S["default"].n(e,{percentage:true})})).tickValues([0,50,100])
this.yGuides=W.a.svg.axis().scale(this.y).orient("left").tickValues([50,100]).tickSize(-this.width(),0,0).tickFormat("")
return this.masteryPercentageGuide=W.a.svg.axis().scale(this.y).orient("left").tickValues([this.masteryPercentage()]).tickSize(-this.width(),0,0).tickFormat("")}
t.prototype._prepareLines=function(){this.data().length>=3&&(this.trend=new Z(this.data()))
return this.line=W.a.svg.line().x(this.xValue).y(this.yValue).interpolate("linear")}
t.prototype._prepareScales=function(){this.x=W.a.scale.linear().range([0,this.width()]).domain([0,this.limit-1])
this.xTimeScale=W.a.time.scale().range([0,this.xTimeScaleWidth()]).domain([l.a.first(this.data()).date,l.a.last(this.data()).date])
return this.y=W.a.scale.linear().range([this.height,this.margin.bottom]).domain([0,100])}
t.prototype.width=function(){return this.$el.width()-this.margin.left-this.margin.right-10}
t.prototype.xTimeScaleWidth=function(){return this.width()-this.width()/(this.limit-1)*(this.limit-this.data().length)}
return t}(r.a.View)
var se=a("ifii")
var oe=function(e,t){return function(){return e.apply(t,arguments)}},re=function(e,t){for(var a in t)ie.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},ie={}.hasOwnProperty
var _e=function(e){re(t,e)
function t(){this.mouseleave=oe(this.mouseleave,this)
this.mouseenter=oe(this.mouseenter,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.TIMEOUT_LENGTH=50
t.optionProperty("el")
t.optionProperty("model")
t.prototype.events={"click i":"mouseleave","mouseenter i":"mouseenter","mouseleave i":"mouseleave"}
t.prototype.inside=false
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.outcomeLineGraphView=new ne({model:this.model})}
t.prototype.render=function(){return Object(se["a"])(this.toJSON())}
t.prototype.closePopover=function(e){null!=e&&e.preventDefault()
if(null==this.popover)return true
this.popover.hide()
return delete this.popover}
t.prototype.mouseenter=function(e){this.openPopover(e)
return this.inside=true}
t.prototype.mouseleave=function(e){this.inside=false
return setTimeout((t=this,function(){if(t.inside||!t.popover)return
return t.closePopover()}),this.TIMEOUT_LENGTH)
var t}
t.prototype.openPopover=function(e){this.closePopover()&&(this.popover=new R["a"](e,this.render(),{verticalSide:"bottom",manualOffset:14}))
this.outcomeLineGraphView.setElement(this.popover.el.find("div.line-graph"))
return this.outcomeLineGraphView.render()}
return t}(r.a.View)
var le=a("yJLO")
var ce=function(e,t){return function(){return e.apply(t,arguments)}},de=function(e,t){for(var a in t)ue.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},ue={}.hasOwnProperty
var pe=function(e){de(t,e)
function t(){this._getKey=ce(this._getKey,this)
this.onClose=ce(this.onClose,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("model")
t.prototype.$target=null
t.prototype.template=se["a"]
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.outcomeLineGraphView=new ne({model:this.model})}
t.prototype.afterRender=function(){this.outcomeLineGraphView.setElement(this.$("div.line-graph"))
return this.outcomeLineGraphView.render()}
t.prototype.dialogOptions=function(){return{containerId:"outcome_results_dialog",close:this.onClose,buttons:[],width:460}}
t.prototype.show=function(e){if(!("click"===e.type||this._getKey(e.keyCode)))return
this.$target=s()(e.target)
e.preventDefault()
this.$el.dialog("option","title",this.model.get("title"))
t.__super__.show.apply(this,arguments)
return this.render()}
t.prototype.onClose=function(){this.$target.focus()
return delete this.$target}
t.prototype.toJSON=function(){var e
e=t.__super__.toJSON.apply(this,arguments)
return l.a.extend(e,{dialog:true})}
t.prototype._getKey=function(e){var t
t={13:"enter",32:"spacebar"}
return t[e]}
return t}(le["a"])
Object(z["a"])(JSON.parse('{"ar":{"click_for_more_details_on_this_outcome_8c018d2f":"انقر للحصول على مزيد من التفاصيل عن هذه النتيجة","n_count_alignments_a45bebe7":"*%{n_count}* محاذاة","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"النتيجة: %{title} بالحالة %{statusTooltip}"},"cy":{"click_for_more_details_on_this_outcome_8c018d2f":"cliciwch i gael rhagor o fanylion am y deilliant hwn","n_count_alignments_a45bebe7":"*%{n_count}* Cysoniad","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Deilliant: %{title} â statws %{statusTooltip}"},"da":{"click_for_more_details_on_this_outcome_8c018d2f":"klik for yderligere oplysninger om dette læringsudbytte","n_count_alignments_a45bebe7":"*%{n_count}* Tilpasninger","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsudbytte: %{title} har en status for %{statusTooltip}"},"da-x-k12":{"click_for_more_details_on_this_outcome_8c018d2f":"klik for yderligere oplysninger om dette læringsudbytte","n_count_alignments_a45bebe7":"*%{n_count}* Tilpasninger","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsudbytte: %{title} har en status for %{statusTooltip}"},"de":{"click_for_more_details_on_this_outcome_8c018d2f":"Für mehr Details zu diesem Ergebnis klicken","n_count_alignments_a45bebe7":"*%{n_count}* Ausrichtungen","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Lernziel: %{title} hat den Status %{statusTooltip}"},"el":{"click_for_more_details_on_this_outcome_8c018d2f":"Κάντε κλικ για περισσότερες λεπτομέρειες σχετικά με αυτό το αποτέλεσμα","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Αποτέλεσμα: Η κατάσταση του %{title} είναι %{statusTooltip}"},"en-AU":{"click_for_more_details_on_this_outcome_8c018d2f":"Click for more details on this outcome.","n_count_alignments_a45bebe7":"*%{n_count}* Alignments","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}"},"en-AU-x-unimelb":{"click_for_more_details_on_this_outcome_8c018d2f":"Click for more details on this outcome.","n_count_alignments_a45bebe7":"*%{n_count}* Alignments","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}"},"en-CA":{"click_for_more_details_on_this_outcome_8c018d2f":"click for more details on this outcome","n_count_alignments_a45bebe7":"*%{n_count}* Alignments","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}"},"en-GB":{"click_for_more_details_on_this_outcome_8c018d2f":"click for more details on this outcome","n_count_alignments_a45bebe7":"*%{n_count}* Alignments","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}"},"en-GB-x-lbs":{"click_for_more_details_on_this_outcome_8c018d2f":"click for more details on this outcome","n_count_alignments_a45bebe7":"*%{n_count}* Alignments","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}"},"en-GB-x-ukhe":{"click_for_more_details_on_this_outcome_8c018d2f":"click for more details on this outcome","n_count_alignments_a45bebe7":"*%{n_count}* Alignments","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Outcome: %{title} has a status of %{statusTooltip}"},"es":{"click_for_more_details_on_this_outcome_8c018d2f":"haga clic para más detalles de esta competencia","n_count_alignments_a45bebe7":"*%{n_count}* Alineamientos","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Competencia: el estado de %{title} es %{statusTooltip}"},"fa":{"click_for_more_details_on_this_outcome_8c018d2f":"برای اطلاعات بیشتر درباره این نتیجه، کلیک کنید","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"نتیجه: %{title} دارای وضعیت %{statusTooltip} است"},"fi":{"click_for_more_details_on_this_outcome_8c018d2f":"lisätietoja tästä tuloksesta napsauttamalla","n_count_alignments_a45bebe7":"*%{n_count}* Linjaukset","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Tulos: %{title} on tila %{statusTooltip}"},"fr":{"click_for_more_details_on_this_outcome_8c018d2f":"cliquer pour plus de détails sur cet acquis","n_count_alignments_a45bebe7":"*%{n_count}* Alignements","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Acquis : %{title} a le statut %{statusTooltip}"},"fr-CA":{"click_for_more_details_on_this_outcome_8c018d2f":"cliquer pour plus de détails sur ce résultat","n_count_alignments_a45bebe7":"*%{n_count}* Alignements","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Résultat : %{title} a le statut %{statusTooltip}"},"he":{"click_for_more_details_on_this_outcome_8c018d2f":"הקלק/י לפירוט נוסף של התוצאות האלה","n_count_alignments_a45bebe7":"*%{n_count}* עימודים","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"תוצאות למידה: %{title} בסטטוס של %{statusTooltip}"},"ht":{"click_for_more_details_on_this_outcome_8c018d2f":"klike pou plis detay sou rezilta sa a","n_count_alignments_a45bebe7":"*%{n_count}* Aliyman","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Rezilta: %{title} gen estati %{statusTooltip}"},"hu":{"click_for_more_details_on_this_outcome_8c018d2f":"kattintson további részletekért ezen tanulási eredményre vonatkozóan","n_count_alignments_a45bebe7":"*%{n_count}* illesztés","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Tanulási eredmény: %{title} a következő státuszú %{statusTooltip}"},"hy":{"click_for_more_details_on_this_outcome_8c018d2f":"Սեղմել այս արդյունքի մանրամասները տեսնելու համար","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Արդյունք՝ %{title} ունի %{statusTooltip} կարգավիճակ"},"is":{"click_for_more_details_on_this_outcome_8c018d2f":"smelltu til að fá meiri upplýsingar um þessa niðurstöðu","n_count_alignments_a45bebe7":"*%{n_count}* Jafnanir","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Niðurstaða: %{title} hefur stöðu %{statusTooltip}"},"it":{"click_for_more_details_on_this_outcome_8c018d2f":"fai clic per maggiori dettagli su questo esito","n_count_alignments_a45bebe7":"*%{n_count}* Allineamenti","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Esito: %{title} è in stato %{statusTooltip}"},"ja":{"click_for_more_details_on_this_outcome_8c018d2f":"クリックして、結果の更なる詳細をみる","n_count_alignments_a45bebe7":"*%{n_count}* アライメント","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"成果: %{title} の状況は %{statusTooltip} です"},"mi":{"click_for_more_details_on_this_outcome_8c018d2f":"pāwhiri mo te Whakapā mai He kōrero i runga i tēnei wāhanga","n_count_alignments_a45bebe7":"*%{n_count}* Ngā Tīaroaro","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Putanga: %{title} he mana o te %{statusTooltip}"},"nb":{"click_for_more_details_on_this_outcome_8c018d2f":"klikk for flere opplysninger om dette læringsmålet","n_count_alignments_a45bebe7":"*%{n_count}* Oppstillinger","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsmål: %{title} har status som %{statusTooltip}"},"nb-x-k12":{"click_for_more_details_on_this_outcome_8c018d2f":"klikk for flere opplysninger om dette målet","n_count_alignments_a45bebe7":"*%{n_count}* Oppstillinger","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Mål: %{title} har status som %{statusTooltip}"},"nl":{"click_for_more_details_on_this_outcome_8c018d2f":"klik voor meer informatie over dit resultaat","n_count_alignments_a45bebe7":"*%{n_count}* Verbindingen","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Resultaat: %{title}heeft een status van %{statusTooltip}"},"nn":{"click_for_more_details_on_this_outcome_8c018d2f":"klikk for meir informasjon om dette resultatet","n_count_alignments_a45bebe7":"*%{n_count}* justeringar","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Læringsmål: %{title} har status som %{statusTooltip}"},"pl":{"click_for_more_details_on_this_outcome_8c018d2f":"kliknij aby uzyskać więcej szczegółów na temat tego wyniku","n_count_alignments_a45bebe7":"*%{n_count}* Wyrównania","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Wynik: %{title} ma status %{statusTooltip}"},"pt":{"click_for_more_details_on_this_outcome_8c018d2f":"clique para mais detalhes sobre este assunto","n_count_alignments_a45bebe7":"*%{n_count}* Alinhamentos","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Resultado: %{title} tem um estado de %{statusTooltip}"},"pt-BR":{"click_for_more_details_on_this_outcome_8c018d2f":"clique para mais detalhes sobre esse objetivo","n_count_alignments_a45bebe7":"*%{n_count}* Alinhamentos","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Objetivo: %{title} tem um status de %{statusTooltip}"},"ru":{"click_for_more_details_on_this_outcome_8c018d2f":"нажмите для более подробной информации по этому результату","n_count_alignments_a45bebe7":"*%{n_count}* Выравнивание","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Результат: %{title} имеет статус %{statusTooltip}"},"sl":{"click_for_more_details_on_this_outcome_8c018d2f":"kliknite za več podrobnosti o tem izidu","n_count_alignments_a45bebe7":"*%{n_count}* Poravnave","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Izid: %{title} ima status %{statusTooltip}"},"sv":{"click_for_more_details_on_this_outcome_8c018d2f":"klicka för mer detaljer om det här lärandemålet","n_count_alignments_a45bebe7":"*%{n_count}* Justeringar","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Lärandemål: %{title} har statusen %{statusTooltip}"},"sv-x-k12":{"click_for_more_details_on_this_outcome_8c018d2f":"klicka för mer detaljer om det här lärandemålet","n_count_alignments_a45bebe7":"*%{n_count}* Justeringar","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Lärandemål: %{title} har statusen %{statusTooltip}"},"tr":{"click_for_more_details_on_this_outcome_8c018d2f":"Bu öğrenme çıktısı hakkında daha fazla ayrıntı için tıklayın","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Öğrenme çıktısı: %{title} nin durumu %{statusTooltip}"},"uk":{"click_for_more_details_on_this_outcome_8c018d2f":"натисніть для отримання більш докладної інформації з цього результату","n_count_alignments_a45bebe7":"*%{n_count}* Відповідності","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"Вихідний: %{title} має статус %{statusTooltip}"},"zh-Hans":{"click_for_more_details_on_this_outcome_8c018d2f":"点击此结果的详细信息","n_count_alignments_a45bebe7":"*%{n_count}* 对齐","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"结果：%{title} 的状态为 %{statusTooltip}"},"zh-Hant":{"click_for_more_details_on_this_outcome_8c018d2f":"按一下以了解關於此結果的更多詳情","n_count_alignments_a45bebe7":"*%{n_count}* 對齊","outcome_title_has_a_status_of_statustooltip_82d1e6d9":"成果：%{title} 的狀態為 %{statusTooltip}"}}'))
S["default"].scoped("grade_summary.outcome")
var me=T.a.default
var fe=me.template,ge=me.templates=me.templates||{}
var he="grade-summary/outcome"
ge[he]=fe((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i,_="",l=a.helperMissing,c=this.escapeExpression,d="function",u=this
function p(e,t){var n,s,o=""
o+="\n    "+c((n=a.addMasteryIcon||e&&e.addMasteryIcon,s={hash:{},data:t},n?n.call(e,e&&e.status,s):l.call(e,"addMasteryIcon",e&&e.status,s)))+"\n  "
return o}function m(e,t){return'\n    <i aria-hidden="true" class="icon-empty"></i>\n  '}function f(e,t){var n,s
if(s=a.hover_name)n=s.call(e,{hash:{},data:t})
else{s=e&&e.hover_name
n=typeof s===d?s.call(e,{hash:{},data:t}):s}return c(n)}function g(e,t){var n,s,o=""
o+='\n        <span class="screenreader-only">\n          '
if(s=a.hover_name)n=s.call(e,{hash:{},data:t})
else{s=e&&e.hover_name
n=typeof s===d?s.call(e,{hash:{},data:t}):s}o+=c(n)+"\n        </span>\n      "
return o}_+='<div class="outcome-icon '
if(r=a.status)o=r.call(t,{hash:{},data:s})
else{r=t&&t.status
o=typeof r===d?r.call(t,{hash:{},data:s}):r}_+=c(o)+'" data-tooltip="top" title="'
if(r=a.statusTooltip)o=r.call(t,{hash:{},data:s})
else{r=t&&t.statusTooltip
o=typeof r===d?r.call(t,{hash:{},data:s}):r}_+=c(o)+'">\n  <span class="screenreader-only">\n    '+c((r=a.t||t&&t.t,i={hash:{title:t&&t.title,statusTooltip:t&&t.statusTooltip,i18n_inferred_key:true},data:s},r?r.call(t,"outcome_title_has_a_status_of_statustooltip_82d1e6d9","Outcome: %{title} has a status of %{statusTooltip}",i):l.call(t,"t","outcome_title_has_a_status_of_statustooltip_82d1e6d9","Outcome: %{title} has a status of %{statusTooltip}",i)))+"\n  </span>\n  "
o=a["if"].call(t,t&&t.scoreDefined,{hash:{},inverse:u.program(3,m,s),fn:u.program(1,p,s),data:s});(o||0===o)&&(_+=o)
_+='\n</div>\n<div class="outcome-properties">\n  <div class="title" data-tooltip title="'
o=a["if"].call(t,t&&t.hover_name,{hash:{},inverse:u.noop,fn:u.program(5,f,s),data:s});(o||0===o)&&(_+=o)
_+='">\n    <h4>\n      '
if(r=a.friendly_name)o=r.call(t,{hash:{},data:s})
else{r=t&&t.friendly_name
o=typeof r===d?r.call(t,{hash:{},data:s}):r}_+=c(o)+"\n      "
o=a["if"].call(t,t&&t.hover_name,{hash:{},inverse:u.noop,fn:u.program(7,g,s),data:s});(o||0===o)&&(_+=o)
_+='\n    </h4>\n  </div>\n  <div class="description">'
if(r=a.description)o=r.call(t,{hash:{},data:s})
else{r=t&&t.description
o=typeof r===d?r.call(t,{hash:{},data:s}):r}(o||0===o)&&(_+=o)
_+='</div>\n</div>\n<div class="alignment-info">\n  <a href="#tab-outcomes/'
if(r=a.id)o=r.call(t,{hash:{},data:s})
else{r=t&&t.id
o=typeof r===d?r.call(t,{hash:{},data:s}):r}_+=c(o)+"\" role=\"button\" aria-haspopup='true' aria-controls='outcome_detail'>\n    "
o=(r=a.n||t&&t.n,i={hash:{},data:s},r?r.call(t,t&&t.count,i):l.call(t,"n",t&&t.count,i))
_+=c((r=a.t||t&&t.t,i={hash:{n_count:o,w0:"<strong>$1</strong>",i18n_inferred_key:true},data:s},r?r.call(t,"n_count_alignments_a45bebe7","*%{n_count}* Alignments",i):l.call(t,"t","n_count_alignments_a45bebe7","*%{n_count}* Alignments",i)))+'\n  </a>\n  <a class="more-details"\n    href="#"\n    role="button"\n    tabindex="0">\n    <i class="icon-more" role="presentation"></i>\n    <span class="screenreader-only">\n      '+c((r=a.t||t&&t.t,i={hash:{i18n_inferred_key:true},data:s},r?r.call(t,"click_for_more_details_on_this_outcome_8c018d2f","click for more details on this outcome",i):l.call(t,"t","click_for_more_details_on_this_outcome_8c018d2f","click for more details on this outcome",i)))+"\n    </span>\n  </a>\n</div>\n"
return _}))
var be=ge[he]
var ye=function(e,t){for(var a in t)ve.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},ve={}.hasOwnProperty
var ke=function(e){ye(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.className="outcome"
t.prototype.events={"click .more-details":"show","keydown .more-details":"show"}
t.prototype.tagName="li"
t.prototype.template=be
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.progress=new D({model:this.model})}
t.prototype.afterRender=function(){this.popover=new _e({el:this.$(".more-details"),model:this.model})
return this.dialog=new pe({model:this.model})}
t.prototype.show=function(e){return this.dialog.show(e)}
t.prototype.toJSON=function(){var e
e=t.__super__.toJSON.apply(this,arguments)
return l.a.extend(e,{progress:this.progress})}
return t}(r.a.View)
Object(z["a"])(JSON.parse('{"ar":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"توسيع/طي مجموعة نواتج %{title}، يفي الطالب بمستوى إجادة %{mastery_count} من نواتج %{count}"},"cy":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Ehangu/crebachu Grŵp Deilliannau %{title}, mae’r myfyriwr wedi cyrraedd y lefel meistroli %{mastery_count}, sef o %{count} deilliant"},"da":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Udvid/skjul %{title} resultatgruppe, studerende opfylder mestring af %{mastery_count} af %{count} læringsudbytter"},"da-x-k12":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Udvid/skjul %{title} resultatgruppe, elev opfylder mestring af %{mastery_count} af %{count} læringsudbytter"},"de":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"%{title}-Ergebnisgruppe erweitern/reduzieren, Student hat das Leistungsziel unter %{mastery_count} von %{count}-Ergebnisse erreicht"},"en-AU":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes"},"en-AU-x-unimelb":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes"},"en-CA":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes"},"en-GB":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes"},"en-GB-x-lbs":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes"},"en-GB-x-ukhe":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes"},"es":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expandir/colapsar %{title} Grupo de competencia, el estudiante cuenta con el dominio de %{mastery_count} de %{count} resultados"},"fa":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"باز کردن/ جمع کردن  گروه نتیجه %{title}، دانشجو تسلط %{mastery_count} از  %{count} نتیجه را دارد"},"fi":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Laajenna/kutista %{title} Tulosryhmä, opiskelijat saavuttavat hallinnan %{mastery_count} / %{count} tuloksista"},"fr":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Développer/réduire le groupe d\'acquis %{title}, l\'élève atteint les critères de réussite pour %{mastery_count} sur %{count} résultats"},"fr-CA":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Agrandir/réduire le groupe d’acquis %{title}, l’étudiant atteint le niveau de Maîtrise de %{mastery_count} sur %{count} acquis"},"he":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"הסתרה/הרחבה של %{title} השגי למידה, התלמיד השיג מומחיות ב %{mastery_count} של  %{count} תוצאות"},"ht":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Elaji/redwi Rezilta Gwoup %{title} , elèv la rive jwenn metriz %{mastery_count} sou %{count} rezilta"},"is":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Stækka/fella %{title} níðurstöðuhóp, nemandi nær tileinkuninni %{mastery_count} af %{count} niðurstöðum"},"it":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Espandi/comprimi gruppo di esiti %{title}. Lo studente soddisfa la padronanza di %{mastery_count} di %{count} esiti"},"ja":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"%{title} 結果グループを展開/折りたたみする、受講生は%{count} 結果の%{mastery_count} の達成を満たす"},"mi":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Whakawhānui/ hinga %{title} Rōpū Putanga, ka tutaki te ākonga ki te hinganga ō %{mastery_count} o %{count} ngā putanga"},"nb":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Utvid/minsk %{title} læringsmålgruppen, studenten har oppnådd ekspertise i %{mastery_count} av %{count} læringsmål"},"nb-x-k12":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Utvid/minsk %{title} målgruppen, eleven har oppnådd ekspertise i %{mastery_count} av %{count} mål"},"nl":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Leerdoelgroep %{title} uit-/samenvouwen, cursist beheerst %{mastery_count} van %{count} leerdoelen"},"nn":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Vis/skjul %{title} læringsmålgruppe. Studenten oppnår meistring ved %{mastery_count} av %{count} læringsmål"},"pl":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Rozwiń/zwiń grupę wyników %{title}, uczestnik wykazuje opanowanie %{mastery_count} z %{count} wyników"},"pt":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expandir/encolher %{title} Grupo de resultados, o aluno atende ao domínio do %{mastery_count} dos %{count} resultados"},"pt-BR":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Expandir/recolher Grupo de objetivos de %{title}, aluno alcança o domínio de %{mastery_count} de %{count} objetivos"},"ru":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Развернуть/свернуть %{title} группу результатов, учащийся соответствует критериям владения по %{mastery_count} из %{count} результатов"},"sl":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Razširi/strni skupino izidov %{title}, študent dosega odličnost pri %{mastery_count} od %{count} učnih izidov."},"sv":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Ta fram/dölj %{title} lärandemålgrupp, studenten uppfyller målen på  %{mastery_count} av %{count} lärandemål"},"sv-x-k12":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Ta fram/dölj %{title} lärandemålgrupp, eleven uppfyller målen på  %{mastery_count} av %{count} lärandemål"},"uk":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"Розгорнути/згорнути %{title} Результат Групи, студент відповідає майстерності %{mastery_count} з результатами %{count}"},"zh-Hans":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"展开/折叠 %{title}结果小组，学生掌握了%{mastery_count}/%{count}个结果"},"zh-Hant":{"expand_collapse_title_outcome_group_student_meets__46ffef48":"展開/收起 %{title} 結果組合，學生可充分掌握 %{mastery_count} 結果組合 %{count}"}}'))
S["default"].scoped("grade_summary.group")
var we=T.a.default
var xe=we.template,je=we.templates=we.templates||{}
var Ce="grade-summary/group"
je[Ce]=xe((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i,_="",l="function",c=this.escapeExpression,d=a.helperMissing,u=this
function p(e,t){return'\n        class="has-mastery"\n      '}function m(e,t){return'\n        class="no-mastery"\n      '}_+='<div id="group_header-'
if(r=a.id)o=r.call(t,{hash:{},data:s})
else{r=t&&t.id
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+"\" class=\"group-description\" role='button' tabindex='0' aria-controls=\"group_detail-"
if(r=a.id)o=r.call(t,{hash:{},data:s})
else{r=t&&t.id
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+'" aria-expanded=\'false\'>\n  <label class="screenreader-only" for="group_header-'
if(r=a.id)o=r.call(t,{hash:{},data:s})
else{r=t&&t.id
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+'">\n    '+c((r=a.t||t&&t.t,i={hash:{title:t&&t.title,mastery_count:t&&t.mastery_count,count:t&&t.count,i18n_inferred_key:true},data:s},r?r.call(t,"expand_collapse_title_outcome_group_student_meets__46ffef48","Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes",i):d.call(t,"t","expand_collapse_title_outcome_group_student_meets__46ffef48","Expand/collapse %{title} Outcome Group, student meets mastery of %{mastery_count} of %{count} outcomes",i)))+'\n  </label>\n  <div class="outcome-icon">\n    <i class="icon-mini-arrow-down collapsed-arrow"></i>\n    <i class="icon-mini-arrow-up expanded-arrow"></i>\n  </div>\n  <h3 class="group-title" aria-hidden="true">'
if(r=a.title)o=r.call(t,{hash:{},data:s})
else{r=t&&t.title
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+'</h3>\n  <div class="group-status" aria-hidden="true">\n    <ul class="pill">\n      <li\n      '
o=a["if"].call(t,t&&t.mastery_count,{hash:{},inverse:u.program(3,m,s),fn:u.program(1,p,s),data:s});(o||0===o)&&(_+=o)
_+="\n        >"+c((r=a.n||t&&t.n,i={hash:{},data:s},r?r.call(t,t&&t.mastery_count,i):d.call(t,"n",t&&t.mastery_count,i)))+"</li>\n      <li>"+c((r=a.n||t&&t.n,i={hash:{},data:s},r?r.call(t,t&&t.count,i):d.call(t,"n",t&&t.count,i)))+'</li>\n    </ul>\n  </div>\n</div>\n<div id="group_detail-'
if(r=a.id)o=r.call(t,{hash:{},data:s})
else{r=t&&t.id
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+'" class="outcomes">\n</div>\n'
return _}))
var Oe=je[Ce]
var Se=function(e,t){for(var a in t)ze.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},ze={}.hasOwnProperty
var Ge=function(e){Se(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.tagName="li"
t.prototype.className="group"
t.prototype.els={".outcomes":"$outcomes"}
t.prototype.events={"click .group-description":"expand","keyclick .group-description":"expand"}
t.prototype.template=Oe
t.prototype.render=function(){var e
t.__super__.render.apply(this,arguments)
e=new O["a"]({el:this.$outcomes,collection:this.model.get("outcomes"),itemView:ke})
return e.render()}
t.prototype.expand=function(){var e,t
this.$el.toggleClass("expanded")
this.$el.hasClass("expanded")?this.$el.children("div.group-description").attr("aria-expanded","true"):this.$el.children("div.group-description").attr("aria-expanded","false")
e=$("div.outcome-toggles a.icon-collapse")
if(0===$("li.group.expanded").length){e.attr("disabled","disabled")
e.attr("aria-disabled","true")}else{e.removeAttr("disabled")
e.attr("aria-disabled","false")}t=$("div.outcome-toggles a.icon-expand")
if(0===$("li.group:not(.expanded)").length){t.attr("disabled","disabled")
return t.attr("aria-disabled","true")}t.removeAttr("disabled")
return t.attr("aria-disabled","false")}
t.prototype.statusTooltip=function(){switch(this.model.status()){case"undefined":return G.t("Unstarted")
case"remedial":return G.t("Well Below Mastery")
case"near":return G.t("Near Mastery")
case"mastery":return G.t("Meets Mastery")
case"exceeds":return G.t("Exceeds Mastery")}}
t.prototype.toJSON=function(){var e
e=t.__super__.toJSON.apply(this,arguments)
return l.a.extend(e,{statusTooltip:this.statusTooltip()})}
return t}(o["View"])
var Ie=T.a.default
var Te=Ie.template,Ae=Ie.templates=Ie.templates||{}
var Pe="grade-summary/section"
Ae[Pe]=Te((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i="",_="function",l=this.escapeExpression
i+="<h2>"
if(r=a.path)o=r.call(t,{hash:{},data:s})
else{r=t&&t.path
o=typeof r===_?r.call(t,{hash:{},data:s}):r}i+=l(o)+'</h2>\n<div class="groups">\n</div>\n'
return i}))
var He=Ae[Pe]
class Me extends o["View"]{static initClass(){this.prototype.tagName="li"
this.prototype.className="section"
this.prototype.els={".groups":"$groups"}
this.prototype.template=He}render(){super.render(...arguments)
const e=new O["a"]({el:this.$groups,collection:this.model.get("groups"),itemView:Ge})
return e.render()}}Me.initClass()
var Ne=a("VTBJ")
var Ee=T.a.default
var Be=Ee.template,De=Ee.templates=Ee.templates||{}
var Re="grade-summary/alignment"
De[Re]=Be((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i,_="",l="function",c=this.escapeExpression,d=a.helperMissing
_+='<div class="title">'
if(r=a.alignment_name)o=r.call(t,{hash:{},data:s})
else{r=t&&t.alignment_name
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+'</div>\n<div class="outcome-bar-wrapper">\n  <div class="score"><strong>'+c((r=a.nf||t&&t.nf,i={hash:{format:"outcomeScore"},data:s},r?r.call(t,t&&t.roundedScore,i):d.call(t,"nf",t&&t.roundedScore,i)))+"</strong>/"+c((r=a.nf||t&&t.nf,i={hash:{format:"outcomeScore"},data:s},r?r.call(t,t&&t.mastery_points,i):d.call(t,"nf",t&&t.mastery_points,i)))+"</div>\n  "+c((r=a.view||t&&t.view,i={hash:{},data:s},r?r.call(t,t&&t.progress,i):d.call(t,"view",t&&t.progress,i)))+"\n</div>\n"
return _}))
var Le=De[Re]
class Ue extends r.a.View{static initClass(){this.prototype.tagName="li"
this.prototype.className="alignment"
this.prototype.template=Le}initialize(){super.initialize(...arguments)
return this.progress=new D({model:this.model})}toJSON(){const e=super.toJSON(...arguments)
return Object(Ne["a"])({},e,{progress:this.progress})}}Ue.initClass()
var Ve=T.a.default
var Xe=Ve.template,qe=Ve.templates=Ve.templates||{}
var We="grade-summary/outcome-detail"
qe[We]=Xe((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r,i,_="",l="function",c=this.escapeExpression,d=a.helperMissing,u=this
function p(e,t){var n,s,o=""
o+=' data-tooltip title="'
if(s=a.hover_name)n=s.call(e,{hash:{},data:t})
else{s=e&&e.hover_name
n=typeof s===l?s.call(e,{hash:{},data:t}):s}o+=c(n)+'"'
return o}function m(e,t){var n,s
return c((n=a.nf||e&&e.nf,s={hash:{format:"outcomeScore"},data:t},n?n.call(e,e&&e.roundedScore,s):d.call(e,"nf",e&&e.roundedScore,s)))}function f(e,t){return"-"}_+='<div class="outcome-modal">\n  <div class="title"'
o=a["if"].call(t,t&&t.hover_name,{hash:{},inverse:u.noop,fn:u.program(1,p,s),data:s});(o||0===o)&&(_+=o)
_+=">\n    "
if(r=a.friendly_name)o=r.call(t,{hash:{},data:s})
else{r=t&&t.friendly_name
o=typeof r===l?r.call(t,{hash:{},data:s}):r}_+=c(o)+'\n  </div>\n  <div class="outcome-bar-wrapper">\n    <div class="score"><strong>'
o=a["if"].call(t,t&&t.scoreDefined,{hash:{},inverse:u.program(5,f,s),fn:u.program(3,m,s),data:s});(o||0===o)&&(_+=o)
_+="</strong>/"+c((r=a.nf||t&&t.nf,i={hash:{format:"outcomeScore"},data:s},r?r.call(t,t&&t.mastery_points,i):d.call(t,"nf",t&&t.mastery_points,i)))+"</div>\n    "+c((r=a.view||t&&t.view,i={hash:{},data:s},r?r.call(t,t&&t.progress,i):d.call(t,"view",t&&t.progress,i)))+'\n  </div>\n  <div class="description">'
if(r=a.description)o=r.call(t,{hash:{},data:s})
else{r=t&&t.description
o=typeof r===l?r.call(t,{hash:{},data:s}):r}(o||0===o)&&(_+=o)
_+='</div>\n\n  <div class="alignments"></div>\n</div>\n'
return _}))
var Fe=qe[We]
class Je extends le["a"]{static initClass(){this.prototype.template=Fe}dialogOptions(){return{containerId:"outcome_detail",close:this.onClose,buttons:[],width:640}}initialize(){this.alignmentsForView=new r.a.Collection([])
this.alignmentsView=new O["a"]({collection:this.alignmentsForView,itemView:Ue})
return super.initialize(...arguments)}onClose(){return window.location.hash="tab-outcomes"}render(){super.render(...arguments)
this.alignmentsView.setElement(this.$(".alignments"))
this.allAlignments=new X([],{outcome:this.model})
this.allAlignments.on("fetched:last",()=>this.alignmentsForView.reset(this.allAlignments.toArray()))
return this.allAlignments.fetch()}show(e){this.model=e
this.$el.dialog("option","title",this.model.group.get("title")).css("maxHeight",340)
this.progress=new D({model:this.model})
this.render()
return super.show(...arguments)}toJSON(){const e=super.toJSON(...arguments)
return Object(Ne["a"])({},e,{progress:this.progress})}}Je.initClass()
class Ke extends O["a"]{static initClass(){this.optionProperty("toggles")
this.prototype.itemView=Me}initialize(){super.initialize(...arguments)
this.outcomeDetailView=new Je
return this.bindToggles()}show(e){this.fetch()
if(!e)return this.outcomeDetailView.close()
{const t=parseInt(e)
const a=this.collection.outcomeCache.get(t)
if(a)return this.outcomeDetailView.show(a)}}fetch(){this.fetch=s.a.noop
return this.collection.fetch()}bindToggles(){const e=s()("div.outcome-toggles a.icon-collapse")
const t=s()("div.outcome-toggles a.icon-expand")
this.toggles.find(".icon-expand").click(()=>{this.$("li.group").addClass("expanded")
this.$("div.group-description").attr("aria-expanded","true")
t.attr("disabled","disabled")
t.attr("aria-disabled","true")
e.removeAttr("disabled")
e.attr("aria-disabled","false")
s()("div.groups").focus()})
return this.toggles.find(".icon-collapse").click(()=>{this.$("li.group").removeClass("expanded")
this.$("div.group-description").attr("aria-expanded","false")
e.attr("disabled","disabled")
e.attr("aria-disabled","true")
t.removeAttr("disabled")
return t.attr("aria-disabled","false")})}}Ke.initClass()
var Qe=a("An8g")
var Ye=a("q1tI")
var Ze=a.n(Ye)
var $e=a("i8i4")
var et=a.n($e)
var tt=a("17x9")
var at=a.n(tt)
Object(z["a"])(JSON.parse('{"ar":{"an_error_occurred_loading_outcomes_data_cfd18b61":"حدث خطأ أثناء تحميل بيانات الحصائل.","loading_outcome_results_96e21ce4":"جارٍ تحميل نتائج الحصائل","there_are_no_outcomes_in_the_course_1d36d9c6":"لا توجد حصائل في هذا المساق."},"cy":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Gwall wrth lwytho data\'r deilliannau.","loading_outcome_results_96e21ce4":"Wrthi’n llwytho canlyniadau’r deilliannau","there_are_no_outcomes_in_the_course_1d36d9c6":"Does dim deilliannau yn y cwrs hwn."},"da":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Der opstod en fejl ved indlæsning af læringsudbyttedata.","loading_outcome_results_96e21ce4":"Indlæser læringsudbytteresultater","there_are_no_outcomes_in_the_course_1d36d9c6":"Der findes ingen læringsudbytter til dette fag."},"da-x-k12":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Der opstod en fejl ved indlæsning læringsudbyttedata.","loading_outcome_results_96e21ce4":"Indlæser læringsudbytteresultater","there_are_no_outcomes_in_the_course_1d36d9c6":"Der findes ingen læringsudbytter i faget."},"de":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Fehler beim Laden der Ergebnisdaten","loading_outcome_results_96e21ce4":"Ergebnisse laden","there_are_no_outcomes_in_the_course_1d36d9c6":"Es gibt keine Ergebnisse in dem Kurs."},"en-AU":{"an_error_occurred_loading_outcomes_data_cfd18b61":"An error occurred loading outcomes data.","loading_outcome_results_96e21ce4":"Loading outcome results","there_are_no_outcomes_in_the_course_1d36d9c6":"There are no outcomes in the course."},"en-AU-x-unimelb":{"an_error_occurred_loading_outcomes_data_cfd18b61":"An error occurred loading outcomes data.","loading_outcome_results_96e21ce4":"Loading outcome results","there_are_no_outcomes_in_the_course_1d36d9c6":"There are no outcomes in the subject."},"en-CA":{"an_error_occurred_loading_outcomes_data_cfd18b61":"An error occurred loading outcomes data.","loading_outcome_results_96e21ce4":"Loading outcome results","there_are_no_outcomes_in_the_course_1d36d9c6":"There are no outcomes in the course."},"en-GB":{"an_error_occurred_loading_outcomes_data_cfd18b61":"An error occurred loading outcomes data.","loading_outcome_results_96e21ce4":"Loading outcome results","there_are_no_outcomes_in_the_course_1d36d9c6":"There are no outcomes in the course."},"en-GB-x-lbs":{"an_error_occurred_loading_outcomes_data_cfd18b61":"An error occurred loading outcomes data.","loading_outcome_results_96e21ce4":"Loading outcome results","there_are_no_outcomes_in_the_course_1d36d9c6":"There are no outcomes in the programme."},"en-GB-x-ukhe":{"an_error_occurred_loading_outcomes_data_cfd18b61":"An error occurred loading outcomes data.","loading_outcome_results_96e21ce4":"Loading outcome results","there_are_no_outcomes_in_the_course_1d36d9c6":"There are no outcomes in the module."},"es":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Ocurrió un error al cargar los datos de los resultados.","loading_outcome_results_96e21ce4":"Cargando resultados de competencia","there_are_no_outcomes_in_the_course_1d36d9c6":"No hay resultados en este curso."},"fi":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Virhe ladattaessa tuloksien tietoja.","loading_outcome_results_96e21ce4":"Ladataan tuloksia","there_are_no_outcomes_in_the_course_1d36d9c6":"Tässä kurssissa ei ole tuloksia."},"fr":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Une erreur s\'est produite lors du chargement des données sur les résultats.","loading_outcome_results_96e21ce4":"Chargement des résultats des objectifs","there_are_no_outcomes_in_the_course_1d36d9c6":"Il n\'y a pas de résultats dans le cours."},"fr-CA":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Une erreur s\'est produite pendant le chargement des données de résultats.","loading_outcome_results_96e21ce4":"Chargement de résultats d’acquis","there_are_no_outcomes_in_the_course_1d36d9c6":"Il n\'y a aucun acquis dans le cours."},"ht":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Yon erè fèt pandan chajman done sou rezilta yo.","loading_outcome_results_96e21ce4":"Chajman rezilta","there_are_no_outcomes_in_the_course_1d36d9c6":"Pa gen rezilta nan kou a."},"is":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Villa kom upp við upphleðslu niðurstöðugagna.","loading_outcome_results_96e21ce4":"Hleð inn árangurs niðurstöðum","there_are_no_outcomes_in_the_course_1d36d9c6":"Það eru engar niðurstöður í þessu námskeiði."},"it":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Si è verificato un errore durante il caricamento dei dati degli esiti.","loading_outcome_results_96e21ce4":"Caricamento esiti","there_are_no_outcomes_in_the_course_1d36d9c6":"Non sono presenti esiti nel corso."},"ja":{"an_error_occurred_loading_outcomes_data_cfd18b61":"結果データを読み込む際にエラーが発生しました。","loading_outcome_results_96e21ce4":"成果を読み込み中","there_are_no_outcomes_in_the_course_1d36d9c6":"コースには成果はありません。"},"mi":{"an_error_occurred_loading_outcomes_data_cfd18b61":"I puta he hapa i te wā e utaina ngā raraunga putanga.","loading_outcome_results_96e21ce4":"E uta ana i nga hua putanga","there_are_no_outcomes_in_the_course_1d36d9c6":"Kaore ngā putanga mo tēnei akoranga."},"nb":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Det oppsto et avvik under lasting av læringsmåldata.","loading_outcome_results_96e21ce4":"Laster resultater av læringsmål","there_are_no_outcomes_in_the_course_1d36d9c6":"Det er ingen læringsmål i dette emnet."},"nb-x-k12":{"an_error_occurred_loading_outcomes_data_cfd18b61":"En feil oppstod ved lasting av resultatdata.","loading_outcome_results_96e21ce4":"Laster mål-resultater","there_are_no_outcomes_in_the_course_1d36d9c6":"Det er ingen mål i faget."},"nl":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Er is een fout opgetreden bij het laden van leerdoelgegevens.","loading_outcome_results_96e21ce4":"Leerdoelresultaten laden","there_are_no_outcomes_in_the_course_1d36d9c6":"Er zijn geen leerdoelen in de cursus."},"nn":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Det oppstod ein feil under innlasting av læringsmåldata.","loading_outcome_results_96e21ce4":"Lastar læringsmålresultat","there_are_no_outcomes_in_the_course_1d36d9c6":"Finn ingen læringsmål for emnet."},"pl":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Wystąpił błąd podczas ładowanie danych wyników.","loading_outcome_results_96e21ce4":"Ładowanie wyników","there_are_no_outcomes_in_the_course_1d36d9c6":"Brak wyników w kursie."},"pt":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Ocorreu um erro ao carregar os dados dos resultados.","loading_outcome_results_96e21ce4":"Carregar resultados de resultados","there_are_no_outcomes_in_the_course_1d36d9c6":"Não há resultados na disciplina."},"pt-BR":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Ocorreu um erro ao carregar dados de objetivos.","loading_outcome_results_96e21ce4":"Carregando resultados dos objetivos","there_are_no_outcomes_in_the_course_1d36d9c6":"Não há objetivos no curso."},"ru":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Произошла ошибка при загрузке данных результатов.","loading_outcome_results_96e21ce4":"Загрузка результатов","there_are_no_outcomes_in_the_course_1d36d9c6":"Результаты в данном курсе отсутствуют."},"sl":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Med nalaganjem podatkov o učnih izidih je prišlo do napake.","loading_outcome_results_96e21ce4":"Nalaganje rezultatov izida","there_are_no_outcomes_in_the_course_1d36d9c6":"Pri tem predmetu ni učnih izidov."},"sv":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Ett fel uppstod vid inläsning av lärandemålsdata.","loading_outcome_results_96e21ce4":"Läser in lärandemålsresultat","there_are_no_outcomes_in_the_course_1d36d9c6":"Kursen har inga lärandemål."},"sv-x-k12":{"an_error_occurred_loading_outcomes_data_cfd18b61":"Ett fel uppstod vid inläsning av lärandemålsdata.","loading_outcome_results_96e21ce4":"Läser in lärandemålsresultat","there_are_no_outcomes_in_the_course_1d36d9c6":"Kursen har inga lärandemål."},"zh-Hans":{"an_error_occurred_loading_outcomes_data_cfd18b61":"加载结果数据时出错。","loading_outcome_results_96e21ce4":"正在加载成绩结果","there_are_no_outcomes_in_the_course_1d36d9c6":"此课程没有结果。"},"zh-Hant":{"an_error_occurred_loading_outcomes_data_cfd18b61":"載入學習成果數據時發生錯誤。","loading_outcome_results_96e21ce4":"正在載入學習成果成積","there_are_no_outcomes_in_the_course_1d36d9c6":"課程中沒有學習成果。"}}'))
var nt=S["default"].scoped("IndividualStudentMasteryIndex")
var st=a("nhsw")
var ot=a("5JRF")
var rt=a("PDbF")
var it=a("uSnb")
a("yb06")
Object(z["a"])(JSON.parse('{"ar":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} من %{numGroup} تم إتقانها","toggle_outcomes_for_title_6994b198":"تبديل الحصائل لـ %{title}"},"cy":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} o %{numGroup} wedi Meistroli","toggle_outcomes_for_title_6994b198":"Toglo deilliannau ar gyfer %{title}"},"da":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} af %{numGroup} behersket","toggle_outcomes_for_title_6994b198":"Skift læringsudbytte for %{title}"},"da-x-k12":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} af %{numGroup} behersket","toggle_outcomes_for_title_6994b198":"Skift læringsudbytte for %{title}"},"de":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} von %{numGroup} erreicht","toggle_outcomes_for_title_6994b198":"Wechseln zwischen Ergebnissen für %{title}"},"en-AU":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} of %{numGroup} Mastered","toggle_outcomes_for_title_6994b198":"Toggle outcomes for %{title}"},"en-AU-x-unimelb":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} of %{numGroup} Mastered","toggle_outcomes_for_title_6994b198":"Toggle outcomes for %{title}"},"en-CA":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} of %{numGroup} Mastered","toggle_outcomes_for_title_6994b198":"Toggle outcomes for %{title}"},"en-GB":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} of %{numGroup} mastered","toggle_outcomes_for_title_6994b198":"Toggle outcomes for %{title}"},"en-GB-x-lbs":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} of %{numGroup} mastered","toggle_outcomes_for_title_6994b198":"Toggle outcomes for %{title}"},"en-GB-x-ukhe":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} of %{numGroup} mastered","toggle_outcomes_for_title_6994b198":"Toggle outcomes for %{title}"},"es":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} de %{numGroup} dominados","toggle_outcomes_for_title_6994b198":"Cambiar resultados para %{title}"},"fi":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered}/%{numGroup} hallitaan","toggle_outcomes_for_title_6994b198":"Vaihtelee tuloksia kohteelle %{title}"},"fr":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} sur %{numGroup} maîtrisé(s)","toggle_outcomes_for_title_6994b198":"Basculer les résultats pour %{title}"},"fr-CA":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} de %{numGroup} maîtrisé","toggle_outcomes_for_title_6994b198":"Activer/désactiver les acquis pour %{title}"},"ht":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} de  %{numGroup} Metrize","toggle_outcomes_for_title_6994b198":"chanje rezilta an %{title}"},"is":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} af %{numGroup} fullnumið","toggle_outcomes_for_title_6994b198":"Víxlaðu niðurstöðum fyrir %{title}"},"it":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} di %{numGroup} padronanza acquisita","toggle_outcomes_for_title_6994b198":"Abilita/disabilita esiti per %{title}"},"ja":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered}（） %{numGroup} 熟達中","toggle_outcomes_for_title_6994b198":"（）の結果を切り替える%{title}"},"mi":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} ō %{numGroup} kua Manahia","toggle_outcomes_for_title_6994b198":"Ngā Toggle putanga mō %{title}"},"nb":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} av %{numGroup} mestret","toggle_outcomes_for_title_6994b198":"Bytte læringsmål for %{title}"},"nb-x-k12":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} av %{numGroup} mestret","toggle_outcomes_for_title_6994b198":"Veksle mål for %{title}"},"nl":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} van %{numGroup} behaald","toggle_outcomes_for_title_6994b198":"Leerdoelen in-/uitschakelen voor %{title}"},"nn":{"nummastered_of_numgroup_mastered_b8113c9c":"Meistra %{numMastered} av %{numGroup}","toggle_outcomes_for_title_6994b198":"Vis/skjul læringsmål for %{title}"},"pl":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} z %{numGroup} opanowanych","toggle_outcomes_for_title_6994b198":"Przełącz wyniki dla %{title}"},"pt":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} de %{numGroup} Masterizado","toggle_outcomes_for_title_6994b198":"Alternar resultados para %{title}"},"pt-BR":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} de %{numGroup} Dominou","toggle_outcomes_for_title_6994b198":"Alternar objetivos para %{title}"},"ru":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} %{numGroup} усвоено","toggle_outcomes_for_title_6994b198":"Переключить результаты для %{title}"},"sl":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} od %{numGroup} odlično obvladanega","toggle_outcomes_for_title_6994b198":"Preklop učnih izidov za %{title}"},"sv":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} av %{numGroup} uppfyllda mål","toggle_outcomes_for_title_6994b198":"Växla lärandemål för %{title}"},"sv-x-k12":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered} av %{numGroup} uppfyllda mål","toggle_outcomes_for_title_6994b198":"Växla lärandemål för %{title}"},"zh-Hans":{"nummastered_of_numgroup_mastered_b8113c9c":"已掌握%{numMastered}/%{numGroup}","toggle_outcomes_for_title_6994b198":"切换成果%{title}"},"zh-Hant":{"nummastered_of_numgroup_mastered_b8113c9c":"%{numMastered}/%{numGroup} 掌握","toggle_outcomes_for_title_6994b198":"切換學習成果%{title}"}}'))
var _t=S["default"].scoped("IndividualStudentMasteryOutcomeGroup")
var lt=a("S4Kx")
var ct=a("yufi")
var dt=a("bwhI")
var ut=a("Ff2n")
var pt=a("sIA8")
var mt=a("5Shj")
var ft=a("jtGx")
class gt extends Ze.a.Component{constructor(){super(...arguments)
this.state={isTruncated:false}
this.onTruncationUpdate=e=>{e!==this.state.isTruncated&&this.setState({isTruncated:e})}}render(){const e=this.props,t=e.children,a=Object(ut["a"])(e,["children"])
const n=Object(ft["c"])(a,mt["a"].propTypes)
const s=Object(ft["c"])(a,pt["a"].propTypes)
const o=Ze.a.createElement(pt["a"],Object.assign({onUpdate:this.onTruncationUpdate},s),t)
return this.state.isTruncated?Ze.a.createElement(mt["a"],Object.assign({},n,{tip:t}),Object(Qe["a"])("span",{},void 0,o)):o}}var ht=a("LvDl")
var bt=a.n(ht)
Object(z["a"])(JSON.parse('{"ar":{"count_alignments_40fbc23c":{"one":"%{count} المحاذاة","other":"%{count} عمليات المحاذاة","zero":"لا توجد محاذاة"},"mastered_34d4c857":"تم إتقان","no_alignments_are_available_for_this_outcome_7f8346f9":"لا توجد محاذاة متوفرة لهذه الحصيلة.","not_mastered_5c2f9968":"لم يتم الإتقان","score_out_of_points_possible_points_bbaea991":"%{score} من إجمالي %{points_possible} نقطة","toggle_alignment_details_for_title_944f605":"تبديل تفاصيل المحاذاة لـ %{title}"},"cy":{"count_alignments_40fbc23c":{"one":"%{count} cysoniad","other":"%{count} cysoniadau","zero":"Dim aliniadau"},"mastered_34d4c857":"Wedi meistroli","no_alignments_are_available_for_this_outcome_7f8346f9":"Does dim cysoniadau ar gael ar gyfer y deilliant hwn.","not_mastered_5c2f9968":"Heb feistroli","score_out_of_points_possible_points_bbaea991":"%{score} allan o %{points_possible} pwynt","toggle_alignment_details_for_title_944f605":"Toglo manylion cysoni ar gyfer %{title}"},"da":{"count_alignments_40fbc23c":{"one":"%{count} justering","other":"%{count} justeringer","zero":"Ingen justeringer"},"mastered_34d4c857":"Opfylder læringsmål","no_alignments_are_available_for_this_outcome_7f8346f9":"Der er ingen tilpasninger til dette læringsudbytte.","not_mastered_5c2f9968":"Ikke behersket","score_out_of_points_possible_points_bbaea991":"%{score} ud af %{points_possible} point","toggle_alignment_details_for_title_944f605":"Skift justeringsoplysninger for %{title}"},"da-x-k12":{"count_alignments_40fbc23c":{"one":"%{count} tilpasning","other":"%{count} tilpasninger","zero":"Ingen tilpasninger"},"mastered_34d4c857":"Behersket","no_alignments_are_available_for_this_outcome_7f8346f9":"Der er ingen tilpasninger til dette læringsudbytte.","not_mastered_5c2f9968":"Ikke behersket","score_out_of_points_possible_points_bbaea991":"%{score} ud af %{points_possible} point","toggle_alignment_details_for_title_944f605":"Skift justeringsoplysninger for %{title}"},"de":{"count_alignments_40fbc23c":{"one":"%{count} Ausrichtung","other":"%{count} Ausrichtungen","zero":"Keine Ausrichtungen"},"mastered_34d4c857":"Leistungsziel erreicht","no_alignments_are_available_for_this_outcome_7f8346f9":"Für dieses Ergebnis gibt es keine Ausrichtungen.","not_mastered_5c2f9968":"Leistungsziel nicht erreicht","score_out_of_points_possible_points_bbaea991":"%{score} von %{points_possible} Punkten","toggle_alignment_details_for_title_944f605":"Wechseln zwischen Ausrichtungsdetails für %{title}"},"en-AU":{"count_alignments_40fbc23c":{"one":"%{count} alignment","other":"%{count} alignments","zero":"No alignments"},"mastered_34d4c857":"Mastered","no_alignments_are_available_for_this_outcome_7f8346f9":"No alignments are available for this outcome.","not_mastered_5c2f9968":"Not mastered","score_out_of_points_possible_points_bbaea991":"%{score} out of %{points_possible} points","toggle_alignment_details_for_title_944f605":"Toggle alignment details for %{title}"},"en-AU-x-unimelb":{"count_alignments_40fbc23c":{"one":"%{count} alignment","other":"%{count} alignments","zero":"No alignments"},"mastered_34d4c857":"Mastered","no_alignments_are_available_for_this_outcome_7f8346f9":"No alignments are available for this outcome.","not_mastered_5c2f9968":"Not mastered","score_out_of_points_possible_points_bbaea991":"%{score} out of %{points_possible} points","toggle_alignment_details_for_title_944f605":"Toggle alignment details for %{title}"},"en-CA":{"count_alignments_40fbc23c":{"one":"%{count} alignment","other":"%{count} alignments","zero":"No alignments"},"mastered_34d4c857":"Mastered","no_alignments_are_available_for_this_outcome_7f8346f9":"No alignments are available for this outcome.","not_mastered_5c2f9968":"Not mastered","score_out_of_points_possible_points_bbaea991":"%{score} out of %{points_possible} points","toggle_alignment_details_for_title_944f605":"Toggle alignment details for %{title}"},"en-GB":{"count_alignments_40fbc23c":{"one":"%{count} alignment","other":"%{count} alignments","zero":"No alignments"},"mastered_34d4c857":"Mastered","no_alignments_are_available_for_this_outcome_7f8346f9":"No alignments are available for this outcome.","not_mastered_5c2f9968":"Not mastered","score_out_of_points_possible_points_bbaea991":"%{score} out of %{points_possible} points","toggle_alignment_details_for_title_944f605":"Toggle alignment details for %{title}"},"en-GB-x-lbs":{"count_alignments_40fbc23c":{"one":"%{count} alignment","other":"%{count} alignments","zero":"No alignments"},"mastered_34d4c857":"Mastered","no_alignments_are_available_for_this_outcome_7f8346f9":"No alignments are available for this outcome.","not_mastered_5c2f9968":"Not mastered","score_out_of_points_possible_points_bbaea991":"%{score} out of %{points_possible} points","toggle_alignment_details_for_title_944f605":"Toggle alignment details for %{title}"},"en-GB-x-ukhe":{"count_alignments_40fbc23c":{"one":"%{count} alignment","other":"%{count} alignments","zero":"No alignments"},"mastered_34d4c857":"Mastered","no_alignments_are_available_for_this_outcome_7f8346f9":"No alignments are available for this outcome.","not_mastered_5c2f9968":"Not mastered","score_out_of_points_possible_points_bbaea991":"%{score} out of %{points_possible} points","toggle_alignment_details_for_title_944f605":"Toggle alignment details for %{title}"},"es":{"count_alignments_40fbc23c":{"one":"%{count} alineación","other":"%{count} alineamientos","zero":"Sin alineamientos"},"mastered_34d4c857":"Dominado","no_alignments_are_available_for_this_outcome_7f8346f9":"No hay alineamientos disponibles para esta competencia.","not_mastered_5c2f9968":"No dominado","score_out_of_points_possible_points_bbaea991":"%{score} de %{points_possible} puntos","toggle_alignment_details_for_title_944f605":"Cambiar detalles de alineación para %{title}"},"fi":{"count_alignments_40fbc23c":{"one":"%{count} linjaus","other":"%{count} linjaukset","zero":"Ei linjauksia"},"mastered_34d4c857":"Hallitaan","no_alignments_are_available_for_this_outcome_7f8346f9":"Ei kohdistuksia saatavilla tälle tulokselle.","not_mastered_5c2f9968":"Ei hallittu","score_out_of_points_possible_points_bbaea991":"%{score}/%{points_possible} pistettä","toggle_alignment_details_for_title_944f605":"Vaihtele linjauksen tietoja %{title}"},"fr":{"count_alignments_40fbc23c":{"one":"%{count} alignement","other":"%{count} alignements","zero":"Pas d\'alignement"},"mastered_34d4c857":"Maîtrisé","no_alignments_are_available_for_this_outcome_7f8346f9":"Aucun alignement n\'est disponible pour ce résultat.","not_mastered_5c2f9968":"Non maîtrisé","score_out_of_points_possible_points_bbaea991":"%{score} sur %{points_possible} points","toggle_alignment_details_for_title_944f605":"Basculer les détails de l\'alignement pour %{title}"},"fr-CA":{"count_alignments_40fbc23c":{"one":"%{count} alignement","other":"%{count} alignements","zero":"Aucun alignement"},"mastered_34d4c857":"Maîtrisé","no_alignments_are_available_for_this_outcome_7f8346f9":"Aucun alignement disponible pour cet acquis","not_mastered_5c2f9968":"Non maîtrisé","score_out_of_points_possible_points_bbaea991":"%{score} de %{points_possible} points","toggle_alignment_details_for_title_944f605":"Activer/désactiver les détails de l’alignement pour  %{title}"},"ht":{"count_alignments_40fbc23c":{"one":"%{count} aliyman","other":"%{count} aliyman","zero":"Pa gen aliyman"},"mastered_34d4c857":"Metrize","no_alignments_are_available_for_this_outcome_7f8346f9":"Pa gen aliyman disponib pou rezilta sa a.","not_mastered_5c2f9968":"Non metrize","score_out_of_points_possible_points_bbaea991":"%{score} sou %{points_possible} pwen","toggle_alignment_details_for_title_944f605":"Chanje detay aliyman pou %{title}"},"is":{"count_alignments_40fbc23c":{"one":"%{count} jöfnun","other":"%{count} jafnanir","zero":"Engar jafnanir"},"mastered_34d4c857":"Fullnumið","no_alignments_are_available_for_this_outcome_7f8346f9":"Engar jafnanir vöru mögulegar fyrir þessa niðurstöðu.","not_mastered_5c2f9968":"Ekki fullnumið","score_out_of_points_possible_points_bbaea991":"%{score} af %{points_possible} stigum","toggle_alignment_details_for_title_944f605":"Víxlaðu jöfnunarupplýsingum fyrir %{title}"},"it":{"count_alignments_40fbc23c":{"one":"%{count} allineamento","other":"%{count} allineamenti","zero":"Nessun allineamento"},"mastered_34d4c857":"Padronanza acquisita","no_alignments_are_available_for_this_outcome_7f8346f9":"Nessun allineamento disponibile per questo esito.","not_mastered_5c2f9968":"Padronanza non acquisita","score_out_of_points_possible_points_bbaea991":"%{score} su %{points_possible} punti","toggle_alignment_details_for_title_944f605":"Abilita/disabilita dettagli allineamento per %{title}"},"ja":{"count_alignments_40fbc23c":{"one":"%{count}位置調整","other":"%{count}位置調整","zero":"位置調整なし"},"mastered_34d4c857":"熟達","no_alignments_are_available_for_this_outcome_7f8346f9":"この結果には位置調整はありません。","not_mastered_5c2f9968":"熟達していない","score_out_of_points_possible_points_bbaea991":"%{score} 点/ %{points_possible} 点","toggle_alignment_details_for_title_944f605":"（）の位置調整の詳細を切り替える%{title}"},"mi":{"count_alignments_40fbc23c":{"one":"%{count} whakawhitinga","other":"%{count} ngā whakawhitinga","zero":"Kaore ngā whakawhitinga"},"mastered_34d4c857":"Manatia","no_alignments_are_available_for_this_outcome_7f8346f9":"Kaore ngā whakawhitinga e wātea ana mō tēnei putanga.","not_mastered_5c2f9968":"Kaore i manahia","score_out_of_points_possible_points_bbaea991":"%{score} waho ō %{points_possible} ngā koinga","toggle_alignment_details_for_title_944f605":"Ngā Toggle whakawhitinga taipitopito mō %{title}"},"nb":{"count_alignments_40fbc23c":{"one":"%{count} Justering","other":"%{count} Justeringer","zero":"Ingen justeringer"},"mastered_34d4c857":"Mestret","no_alignments_are_available_for_this_outcome_7f8346f9":"Ingen justering er tilgjengelig for dette læringsmålet","not_mastered_5c2f9968":"Ikke mestret","score_out_of_points_possible_points_bbaea991":"%{score} av %{points_possible} poeng","toggle_alignment_details_for_title_944f605":"Detaljer for justeringsbytte for %{title}"},"nb-x-k12":{"count_alignments_40fbc23c":{"one":"%{count} oppstilling","other":"%{count} oppstillinger","zero":"Ingen oppstillinger"},"mastered_34d4c857":"Mestret","no_alignments_are_available_for_this_outcome_7f8346f9":"Ingen justering er mulig for dette målet.","not_mastered_5c2f9968":"Ikke mestret","score_out_of_points_possible_points_bbaea991":"%{score} av %{points_possible} poeng","toggle_alignment_details_for_title_944f605":"Veksle justeringsdetaljer for  %{title}"},"nl":{"count_alignments_40fbc23c":{"one":"%{count} afstemming","other":"%{count} afstemmingen","zero":"Geen afstemmingen"},"mastered_34d4c857":"Behaald","no_alignments_are_available_for_this_outcome_7f8346f9":"Er zijn geen afstemmingen beschikbaar voor dit leerdoel.","not_mastered_5c2f9968":"Niet gehaald","score_out_of_points_possible_points_bbaea991":"%{score} van %{points_possible} punten","toggle_alignment_details_for_title_944f605":"Afstemmingsdetails in-/uitschakelen voor %{title}"},"nn":{"count_alignments_40fbc23c":{"one":"%{count} justeringar","other":"%{count} justeringar","zero":"Ingen justeringar"},"mastered_34d4c857":"Meistra","no_alignments_are_available_for_this_outcome_7f8346f9":"Ingen justeringar er tilgjengeleg for dette læringsmålet.","not_mastered_5c2f9968":"Ikkje meistra","score_out_of_points_possible_points_bbaea991":"%{score} av %{points_possible} poeng","toggle_alignment_details_for_title_944f605":"Vis/skul justeringsdetaljar for %{title}"},"pl":{"count_alignments_40fbc23c":{"one":"%{count} dostosowanie","other":"%{count} dostosowania","zero":"Brak dostosowań"},"mastered_34d4c857":"Opanowano","no_alignments_are_available_for_this_outcome_7f8346f9":"Brak dopasowań dla tego wyniku.","not_mastered_5c2f9968":"Nie opanowano","score_out_of_points_possible_points_bbaea991":"%{score} z %{points_possible} pkt","toggle_alignment_details_for_title_944f605":"Przełącz szczegóły dopasowania dla %{title}"},"pt":{"count_alignments_40fbc23c":{"one":"%{count} alinhamento","other":"%{count} alinhamentos","zero":"Sem alinhamentos"},"mastered_34d4c857":"Masterizado","no_alignments_are_available_for_this_outcome_7f8346f9":"Nenhum alinhamento está disponível para esse resultado.","not_mastered_5c2f9968":"Não dominado","score_out_of_points_possible_points_bbaea991":"%{score} de %{points_possible} pontos","toggle_alignment_details_for_title_944f605":"Alternar detalhes de alinhamento para %{title}"},"pt-BR":{"count_alignments_40fbc23c":{"one":"%{count} alinhamento","other":"%{count} alinhamentos","zero":"Nenhum alinhamento"},"mastered_34d4c857":"Dominou","no_alignments_are_available_for_this_outcome_7f8346f9":"Nenhum alinhamento está disponível para este objetivo.","not_mastered_5c2f9968":"Não dominou","score_out_of_points_possible_points_bbaea991":"%{score} de %{points_possible} pontos","toggle_alignment_details_for_title_944f605":"Alternar detalhes de alinhamento para %{title}"},"ru":{"count_alignments_40fbc23c":{"one":"%{count} согласование","other":"%{count} согласования","zero":"Без согласования"},"mastered_34d4c857":"Усвоено","no_alignments_are_available_for_this_outcome_7f8346f9":"Для этого результата нет согласований.","not_mastered_5c2f9968":"Не усвоено","score_out_of_points_possible_points_bbaea991":"%{score} из %{points_possible} баллов","toggle_alignment_details_for_title_944f605":"Переключить параметры согласования для %{title}"},"sl":{"count_alignments_40fbc23c":{"one":"%{count} poravnava","other":"%{count} poravnave","zero":"Ni poravnav."},"mastered_34d4c857":"Odlično obvladano","no_alignments_are_available_for_this_outcome_7f8346f9":"Za ta izid ni na voljo nobenih poravnav.","not_mastered_5c2f9968":"Ni odlično obvladano.","score_out_of_points_possible_points_bbaea991":"%{score} od %{points_possible} točk","toggle_alignment_details_for_title_944f605":"Preklop podrobnosti o poravnavi za %{title}"},"sv":{"count_alignments_40fbc23c":{"one":"%{count} justering","other":"%{count} justeringar","zero":"Inga justeringar"},"mastered_34d4c857":"Uppfyllt mål","no_alignments_are_available_for_this_outcome_7f8346f9":"Det finns inga justeringar tillgängliga för det här lärandemålet.","not_mastered_5c2f9968":"Ej uppfyllt mål","score_out_of_points_possible_points_bbaea991":"%{score} av %{points_possible} poäng","toggle_alignment_details_for_title_944f605":"Växla justeringsdetaljer för %{title}"},"sv-x-k12":{"count_alignments_40fbc23c":{"one":"%{count} justering","other":"%{count} justeringar","zero":"Inga justeringar"},"mastered_34d4c857":"Uppfyllt mål","no_alignments_are_available_for_this_outcome_7f8346f9":"Det finns inga justeringar tillgängliga för det här lärandemålet.","not_mastered_5c2f9968":"Ej uppfyllt mål","score_out_of_points_possible_points_bbaea991":"%{score} av %{points_possible} poäng","toggle_alignment_details_for_title_944f605":"Växla justeringsdetaljer för %{title}"},"zh-Hans":{"count_alignments_40fbc23c":{"one":"%{count}对齐","other":"%{count}对齐","zero":"无对齐"},"mastered_34d4c857":"已掌握","no_alignments_are_available_for_this_outcome_7f8346f9":"此成果无可用调整。","not_mastered_5c2f9968":"未掌握","score_out_of_points_possible_points_bbaea991":"得分 %{score}，总分 %{points_possible}","toggle_alignment_details_for_title_944f605":"切换调整详情%{title}"},"zh-Hant":{"count_alignments_40fbc23c":{"one":"%{count}校準","other":"%{count}校準","zero":"沒有校準"},"mastered_34d4c857":"掌握","no_alignments_are_available_for_this_outcome_7f8346f9":"沒有可用於此成果的校準。","not_mastered_5c2f9968":"未掌握","score_out_of_points_possible_points_bbaea991":"得分為 %{score}，滿分為 %{points_possible}","toggle_alignment_details_for_title_944f605":"切換校準詳細資料%{title}"}}'))
var yt=S["default"].scoped("IndividualStudentMasteryOutcome")
Object(z["a"])(JSON.parse('{"ar":{"your_score_a1fc2fcf":"نتيجتك","your_score_score_fb785381":"نتيجتك: %{score}"},"cy":{"your_score_a1fc2fcf":"Eich sgôr","your_score_score_fb785381":"Eich sgôr: %{score}"},"da":{"your_score_a1fc2fcf":"Dit resultat","your_score_score_fb785381":"Dit resultat: %{score}"},"da-x-k12":{"your_score_a1fc2fcf":"Dit resultat","your_score_score_fb785381":"Dit resultat: %{score}"},"de":{"your_score_a1fc2fcf":"Ihr Ergebnis","your_score_score_fb785381":"Ihre Punktzahl: %{score}"},"en-AU":{"your_score_a1fc2fcf":"Your score","your_score_score_fb785381":"Your score: %{score}"},"en-AU-x-unimelb":{"your_score_a1fc2fcf":"Your score","your_score_score_fb785381":"Your score: %{score}"},"en-CA":{"your_score_a1fc2fcf":"Your score","your_score_score_fb785381":"Your score: %{score}"},"en-GB":{"your_score_a1fc2fcf":"Your score","your_score_score_fb785381":"Your score: %{score}"},"en-GB-x-lbs":{"your_score_a1fc2fcf":"Your score","your_score_score_fb785381":"Your score: %{score}"},"en-GB-x-ukhe":{"your_score_a1fc2fcf":"Your score","your_score_score_fb785381":"Your score: %{score}"},"es":{"your_score_a1fc2fcf":"Su puntaje","your_score_score_fb785381":"Su puntaje: %{score}"},"fi":{"your_score_a1fc2fcf":"Pistemääräsi","your_score_score_fb785381":"Tuloksesi: %{score}"},"fr":{"your_score_a1fc2fcf":"Votre score","your_score_score_fb785381":"Votre score : %{score}"},"fr-CA":{"your_score_a1fc2fcf":"Votre score","your_score_score_fb785381":"Votre score : %{score}"},"ht":{"your_score_a1fc2fcf":"Nòt ou","your_score_score_fb785381":"Nòt ou: %{score}"},"is":{"your_score_a1fc2fcf":"Einkunn þín","your_score_score_fb785381":"Einkunn þín: %{score}"},"it":{"your_score_a1fc2fcf":"Il tuo punteggio","your_score_score_fb785381":"Il tuo punteggio: %{score}"},"ja":{"your_score_a1fc2fcf":"あなたのスコア","your_score_score_fb785381":"あなたのスコア：%{score}"},"mi":{"your_score_a1fc2fcf":"Tō kaute","your_score_score_fb785381":"Tō kaute: %{score}"},"nb":{"your_score_a1fc2fcf":"Ditt resultat","your_score_score_fb785381":"Ditt resultat: %{score}"},"nb-x-k12":{"your_score_a1fc2fcf":"Ditt resultat","your_score_score_fb785381":"Ditt resultat: %{score}"},"nl":{"your_score_a1fc2fcf":"Je score","your_score_score_fb785381":"Je score: %{score}"},"nn":{"your_score_a1fc2fcf":"Dine resultat","your_score_score_fb785381":"Resultatet ditt: %{score}"},"pl":{"your_score_a1fc2fcf":"Twój wynik","your_score_score_fb785381":"Twój wynik: %{score}"},"pt":{"your_score_a1fc2fcf":"Sua pontuação","your_score_score_fb785381":"Sua pontuação: %{score}"},"pt-BR":{"your_score_a1fc2fcf":"Sua pontuação","your_score_score_fb785381":"Sua pontuação: %{score}"},"ru":{"your_score_a1fc2fcf":"Ваша оценка","your_score_score_fb785381":"Ваша оценка: %{score}"},"sl":{"your_score_a1fc2fcf":"Vaš rezultat","your_score_score_fb785381":"Vaš rezultat: %{score}"},"sv":{"your_score_a1fc2fcf":"Ditt resultat","your_score_score_fb785381":"Ditt resultat: %{score}"},"sv-x-k12":{"your_score_a1fc2fcf":"Ditt resultat","your_score_score_fb785381":"Ditt resultat: %{score}"},"zh-Hans":{"your_score_a1fc2fcf":"您的评分","your_score_score_fb785381":"您的得分%{score}"},"zh-Hant":{"your_score_a1fc2fcf":"您的分數","your_score_score_fb785381":"您的分數：%{score}"}}'))
var vt=S["default"].scoped("IndividiualStudentMasteryAssignmentResult")
var kt=a("Xx/m")
var wt=a("Q0Ww")
var xt=a("8ruJ")
var jt=a("kon1")
const Ct=at.a.shape({id:at.a.oneOfType([at.a.string,at.a.number]).isRequired,name:at.a.string.isRequired,html_url:at.a.string.isRequired,submission_types:at.a.string.isRequired})
const Ot=at.a.shape({assignment:Ct.isRequired,id:at.a.oneOfType([at.a.string,at.a.number]).isRequired,score:at.a.number,percent:at.a.number,hidden:at.a.bool,hide_points:at.a.bool})
const St=at.a.shape({description:at.a.string.isRequired})
const zt=at.a.shape({id:at.a.number.isRequired,mastered:at.a.bool.isRequired,ratings:at.a.arrayOf(St).isRequired,results:at.a.arrayOf(Ot).isRequired,title:at.a.string.isRequired,mastery_points:at.a.number.isRequired,points_possible:at.a.number.isRequired,display_name:at.a.string})
at.a.shape({outcome:zt.isRequired})
at.a.shape({id:at.a.number.isRequired,title:at.a.string.isRequired})
const Gt=at.a.shape({description:at.a.string.isRequired,points:at.a.number.isRequired,mastery:at.a.bool.isRequired,color:at.a.string.isRequired})
at.a.shape({ratings:at.a.arrayOf(Gt)})
var It=a("lU25")
const Tt=(e,t)=>t.points_possible>0?+(e*t.points_possible).toFixed(2):+(e*t.mastery_points).toFixed(2)
const At=(e,t,a)=>Object(Qe["a"])(kt["a"],{variant:"link",href:t,theme:{mediumPadding:"0",mediumHeight:"normal",fontWeight:"700"},icon:a?wt["a"]:xt["a"]},void 0,e)
var Pt=Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(ot["a"],{size:"medium"},void 0,Object(Qe["a"])(jt["a"],{})))
const Ht=e=>Object(Qe["a"])(st["a"],{alignItems:"center"},void 0,Pt,Object(Qe["a"])(st["a"].Item,{padding:"0 x-small"},void 0,Object(Qe["a"])(ot["a"],{weight:"bold"},void 0,e)))
const Mt=e=>{let t=e.outcome,a=e.result,n=e.outcomeProficiency
const s=t.ratings
const o=a.assignment,r=o.html_url,i=o.name,_=o.submission_types
const l=_&&_.indexOf("online_quiz")>=0
const c=a.percent?Tt(a.percent,t):a.score
return Object(Qe["a"])(st["a"],{padding:"small",direction:"column",alignItems:"stretch"},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,r.length>0?At(i,r,l):Ht(i)),Object(Qe["a"])(st["a"].Item,{padding:"x-small 0"},void 0,Object(Qe["a"])(lt["a"],{padding:"x-small 0 0 0"},void 0,Object(Qe["a"])(ot["a"],{size:"small",fontStyle:"italic",weight:"bold"},void 0,a.hide_points?vt.t("Your score"):vt.t("Your score: %{score}",{score:c})))),Object(Qe["a"])(st["a"].Item,{borderWidth:"small"},void 0,Object(Qe["a"])("div",{className:"react-rubric"},void 0,Object(Qe["a"])("div",{className:"ratings"},void 0,Object(Qe["a"])(It["a"],{tiers:s,points:c,hidePoints:a.hide_points,useRange:false,customRatings:bt.a.get(n,"ratings"),defaultMasteryThreshold:t.mastery_points,pointsPossible:t.points_possible,assessing:false,isSummary:false})))))}
Mt.defaultProps={outcomeProficiency:null}
var Nt=Mt
Object(z["a"])(JSON.parse('{"ar":{"not_yet_assessed_9362f199":"لم يتم تقييمها حتى الآن"},"cy":{"not_yet_assessed_9362f199":"Heb ei asesu eto"},"da":{"not_yet_assessed_9362f199":"Endnu ikke vurderet"},"da-x-k12":{"not_yet_assessed_9362f199":"Endnu ikke vurderet"},"de":{"not_yet_assessed_9362f199":"Noch nicht bewertet"},"en-AU":{"not_yet_assessed_9362f199":"Not yet assessed"},"en-AU-x-unimelb":{"not_yet_assessed_9362f199":"Not yet assessed"},"en-CA":{"not_yet_assessed_9362f199":"Not yet assessed"},"en-GB":{"not_yet_assessed_9362f199":"Not yet assessed"},"en-GB-x-lbs":{"not_yet_assessed_9362f199":"Not yet assessed"},"en-GB-x-ukhe":{"not_yet_assessed_9362f199":"Not yet assessed"},"es":{"not_yet_assessed_9362f199":"Sin evaluar aún"},"fi":{"not_yet_assessed_9362f199":"Ei vielä arvioitu"},"fr":{"not_yet_assessed_9362f199":"Pas encore évalué"},"fr-CA":{"not_yet_assessed_9362f199":"Pas encore évalué"},"ht":{"not_yet_assessed_9362f199":"Poko evalye"},"is":{"not_yet_assessed_9362f199":"Ekki metið enn"},"it":{"not_yet_assessed_9362f199":"Non ancora valutato"},"ja":{"not_yet_assessed_9362f199":"まだ評価されていません"},"mi":{"not_yet_assessed_9362f199":"Kaore anō i aromatawaitia"},"nb":{"not_yet_assessed_9362f199":"Ikke vurdert ennå"},"nb-x-k12":{"not_yet_assessed_9362f199":"Ikke vurdert ennå"},"nl":{"not_yet_assessed_9362f199":"Nog niet beoordeeld"},"nn":{"not_yet_assessed_9362f199":"Ikkje vurdert enno"},"pl":{"not_yet_assessed_9362f199":"Jeszcze nie oceniono"},"pt":{"not_yet_assessed_9362f199":"Ainda não avaliado"},"pt-BR":{"not_yet_assessed_9362f199":"Ainda não avaliado"},"ru":{"not_yet_assessed_9362f199":"Еще не оценено"},"sl":{"not_yet_assessed_9362f199":"Še ni ocenjeno."},"sv":{"not_yet_assessed_9362f199":"Ännu inte bedömda"},"sv-x-k12":{"not_yet_assessed_9362f199":"Ännu inte bedömda"},"zh-Hans":{"not_yet_assessed_9362f199":"尚未评估"},"zh-Hant":{"not_yet_assessed_9362f199":"尚未評估"}}'))
var Et=S["default"].scoped("IndividualStudentMasteryUnassessedAssignment")
var Bt=a("J2CL")
const Dt=e=>{let t=e.assignment
const a=t.id,n=t.url,s=t.submission_types,o=t.title
return Object(Qe["a"])(rt["a"].Item,{},a,Object(Qe["a"])(lt["a"],{padding:"small",display:"block"},void 0,Object(Qe["a"])(Bt["ApplyTheme"],{theme:{[kt["a"].theme]:{linkColor:"#68777D",fontWeight:"700"}}},void 0,Object(Qe["a"])(kt["a"],{href:n,variant:"link",theme:{mediumPadding:"0",mediumHeight:"normal"},icon:bt.a.includes(s,"online_quiz")?wt["a"]:xt["a"]},void 0,o," (",Et.t("Not yet assessed"),")"))))}
var Rt=Dt
Object(z["a"])(JSON.parse('{"ar":{"1_item_scores_examplescores_9736236":"1- درجة العنصر: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- الدرجة النهائية: %{exampleResult}","calculation_method_fe281f9":"طريقة الحساب","click_to_close_outcome_details_popover_d469d47d":"انقر لإغلاق الصندوق المنبثق لتفاصيل الحصيلة","click_to_expand_outcome_details_74a2a967":"انقر لتوسيع تفاصيل الحصيلة","example_84698b7d":"مثال","exceeds_mastery_1f995dce":"تجاوز الإتقان","last_assessment_cd5659b6":"التقييم الأخير: ","meets_mastery_754e1c06":"يلبي الإتقان","near_mastery_f25174a4":"قريب من الإتقان","no_submissions_164cea23":"لا توجد إرسالات","well_below_mastery_37664bdc":"أقل بكثير من الإتقان"},"cy":{"1_item_scores_examplescores_9736236":"1- Sgôr Eitem: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Sgôr Derfynol %{exampleResult}","calculation_method_fe281f9":"Dull Cyfrifo","click_to_close_outcome_details_popover_d469d47d":"Cliciwch i gau\'r neidlen manylion deilliannau","click_to_expand_outcome_details_74a2a967":"Cliciwch i ehangu manylion canlyniad","example_84698b7d":"Enghraifft","exceeds_mastery_1f995dce":"Yn well na’r lefel meistroli","last_assessment_cd5659b6":"Aseiniad Olaf: ","meets_mastery_754e1c06":"Wedi Meistroli","near_mastery_f25174a4":"Bron wedi Meistroli","no_submissions_164cea23":"Dim cyflwyniadau","well_below_mastery_37664bdc":"Yn bell iawn o’r lefel Meistroli"},"da":{"1_item_scores_examplescores_9736236":"1- element får: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- endeligt resultat: %{exampleResult}","calculation_method_fe281f9":"Beregningsmetode","click_to_close_outcome_details_popover_d469d47d":"Klik for at lukke pop-op for detaljer om læringsudbytte","click_to_expand_outcome_details_74a2a967":"Klik for at udvide detaljer om læringsudbytte","example_84698b7d":"Eksempel","exceeds_mastery_1f995dce":"Overstiger opfyldelse af læringsmål","last_assessment_cd5659b6":"Seneste vurdering: ","meets_mastery_754e1c06":"Opfylder mål","near_mastery_f25174a4":"Tæt på opfyldelse af læringsmål","no_submissions_164cea23":"Ingen afleveringer","well_below_mastery_37664bdc":"Langt under opfyldelse af læringsmål"},"da-x-k12":{"1_item_scores_examplescores_9736236":"1- element får: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- endeligt resultat: %{exampleResult}","calculation_method_fe281f9":"Beregningsmetode","click_to_close_outcome_details_popover_d469d47d":"Klik for at lukke pop-op for detaljer om læringsudbytte","click_to_expand_outcome_details_74a2a967":"Klik for at udvide detaljer om læringsudbytte","example_84698b7d":"Eksempel","exceeds_mastery_1f995dce":"Overstiger opfyldelse af læringsmål","last_assessment_cd5659b6":"Seneste vurdering: ","meets_mastery_754e1c06":"Opfylder mål","near_mastery_f25174a4":"Tæt på opfyldelse af læringsmål","no_submissions_164cea23":"Ingen afleveringer","well_below_mastery_37664bdc":"Langt under opfyldelse af læringsmål"},"de":{"1_item_scores_examplescores_9736236":"1- Objektpunkte: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Endergebnis: %{exampleResult}","calculation_method_fe281f9":"Berechnungsmethode","click_to_close_outcome_details_popover_d469d47d":"Hier klicken, um die Einblendung der Ergebnisdetails zu schließen","click_to_expand_outcome_details_74a2a967":"Ergebnisdetails einblenden","example_84698b7d":"Beispiel","exceeds_mastery_1f995dce":"Übertrifft Leistungsziel","last_assessment_cd5659b6":"Letzte Bewertung: ","meets_mastery_754e1c06":"Leistungsziel erreicht","near_mastery_f25174a4":"Leistungsziel knapp erreicht","no_submissions_164cea23":"Keine Abgaben","well_below_mastery_37664bdc":"Deutlich unter Leistungsziel"},"el":{"calculation_method_fe281f9":"Μέθοδος Υπολογισμού","example_84698b7d":"Παράδειγμα","exceeds_mastery_1f995dce":"Υπερβαίνει την Μαεστρία/Τεχνογνωσία","meets_mastery_754e1c06":"Είναι σε Επίπεδο Επιδεξιότητας","near_mastery_f25174a4":"Κοντά στο Επίπεδο Επιδεξιότητας","well_below_mastery_37664bdc":"Αρκετά Κάτω από το Επίπεδο Επιδεξιότητας"},"en-AU":{"1_item_scores_examplescores_9736236":"1- Item Scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Final Score: %{exampleResult}","calculation_method_fe281f9":"Calculation Method","click_to_close_outcome_details_popover_d469d47d":"Click to close outcome details popover","click_to_expand_outcome_details_74a2a967":"Click to expand outcome details","example_84698b7d":"Example","exceeds_mastery_1f995dce":"Exceeds Mastery","last_assessment_cd5659b6":"Last Assessment: ","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","no_submissions_164cea23":"No submissions","well_below_mastery_37664bdc":"Well Below Mastery"},"en-AU-x-unimelb":{"1_item_scores_examplescores_9736236":"1- Item Scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Final Score: %{exampleResult}","calculation_method_fe281f9":"Calculation Method","click_to_close_outcome_details_popover_d469d47d":"Click to close outcome details popover","click_to_expand_outcome_details_74a2a967":"Click to expand outcome details","example_84698b7d":"Example","exceeds_mastery_1f995dce":"Exceeds Mastery","last_assessment_cd5659b6":"Last Assessment: ","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","no_submissions_164cea23":"No submissions","well_below_mastery_37664bdc":"Well Below Mastery"},"en-CA":{"1_item_scores_examplescores_9736236":"1- Item Scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Final Score: %{exampleResult}","calculation_method_fe281f9":"Calculation Method","click_to_close_outcome_details_popover_d469d47d":"Click to close outcome details popover","click_to_expand_outcome_details_74a2a967":"Click to expand outcome details","example_84698b7d":"Example","exceeds_mastery_1f995dce":"Exceeds Mastery","last_assessment_cd5659b6":"Last Assessment: ","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","no_submissions_164cea23":"No submissions","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB":{"1_item_scores_examplescores_9736236":"1- Item scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Final score: %{exampleResult}","calculation_method_fe281f9":"Calculation method","click_to_close_outcome_details_popover_d469d47d":"Click to close outcome details popover","click_to_expand_outcome_details_74a2a967":"Click to expand outcome details","example_84698b7d":"Example","exceeds_mastery_1f995dce":"Exceeds Mastery","last_assessment_cd5659b6":"Last assessment: ","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","no_submissions_164cea23":"No submissions","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB-x-lbs":{"1_item_scores_examplescores_9736236":"1- Item scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Final score: %{exampleResult}","calculation_method_fe281f9":"Calculation method","click_to_expand_outcome_details_74a2a967":"Click to expand outcome details","example_84698b7d":"Example","exceeds_mastery_1f995dce":"Exceeds Mastery","last_assessment_cd5659b6":"Last assessment: ","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","no_submissions_164cea23":"No submissions","well_below_mastery_37664bdc":"Well Below Mastery"},"en-GB-x-ukhe":{"1_item_scores_examplescores_9736236":"1- Item scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Final score: %{exampleResult}","calculation_method_fe281f9":"Calculation method","click_to_close_outcome_details_popover_d469d47d":"Click to close outcome details popover","click_to_expand_outcome_details_74a2a967":"Click to expand outcome details","example_84698b7d":"Example","exceeds_mastery_1f995dce":"Exceeds Mastery","last_assessment_cd5659b6":"Last assessment: ","meets_mastery_754e1c06":"Meets Mastery","near_mastery_f25174a4":"Near Mastery","no_submissions_164cea23":"No submissions","well_below_mastery_37664bdc":"Well Below Mastery"},"es":{"1_item_scores_examplescores_9736236":"1- Puntajes de los items: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Puntaje final: %{exampleResult}","calculation_method_fe281f9":"Método de cálculo","click_to_close_outcome_details_popover_d469d47d":"Haga clic para cerrar el menú desplegable de los detalles de la competencia","click_to_expand_outcome_details_74a2a967":"Haga clic para expandir los detalles de la competencia","example_84698b7d":"Ejemplo","exceeds_mastery_1f995dce":"Excede el dominio","last_assessment_cd5659b6":"Última evaluación: ","meets_mastery_754e1c06":"Reúne el dominio","near_mastery_f25174a4":"Cerca del dominio","no_submissions_164cea23":"No hay entregas","well_below_mastery_37664bdc":"Muy por debajo del dominio"},"fa":{"calculation_method_fe281f9":"روش محاسبه","example_84698b7d":"مثال","exceeds_mastery_1f995dce":"فراتر از تسلط","meets_mastery_754e1c06":"با تسلط مطابقت دارد","near_mastery_f25174a4":"نزدیک به تسلط","well_below_mastery_37664bdc":"پایین تر از سطح تسلط"},"fi":{"1_item_scores_examplescores_9736236":"1 - kohteen pistemäärät: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2 - Lopullinen pistemäärä: %{exampleResult}","calculation_method_fe281f9":"Laskentatapa","click_to_close_outcome_details_popover_d469d47d":"Napsauta sulkeaksesi tulostietojen ponnahdusikkuna","click_to_expand_outcome_details_74a2a967":"Napsauta laajenna tulostietoja","example_84698b7d":"Esimerkki","exceeds_mastery_1f995dce":"Ylittää hallinnan","last_assessment_cd5659b6":"Viimeinen arviointi: ","meets_mastery_754e1c06":"täyttää hallinnan","near_mastery_f25174a4":"lähellä hallintaa","no_submissions_164cea23":"Ei lähetyksiä","well_below_mastery_37664bdc":"runsaasti hallinnan alapuolella"},"fr":{"1_item_scores_examplescores_9736236":"1- Score de l\'élément : %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Score final : %{exampleResult}","calculation_method_fe281f9":"Méthode de calcul","click_to_close_outcome_details_popover_d469d47d":"Cliquez pour fermer la fenêtre pop-over des détails des acquis","click_to_expand_outcome_details_74a2a967":"Cliquez pour agrandir les détails des résultats","example_84698b7d":"Exemple","exceeds_mastery_1f995dce":"Surpasse le niveau de maîtrise","last_assessment_cd5659b6":"Dernière évaluation : ","meets_mastery_754e1c06":"Niveau de maîtrise atteint","near_mastery_f25174a4":"Proche du niveau de maîtrise","no_submissions_164cea23":"Aucune soumission","well_below_mastery_37664bdc":"Bien inférieur au niveau de maîtrise"},"fr-CA":{"1_item_scores_examplescores_9736236":"1- Scores de l’élément %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Score final : %{exampleResult}","calculation_method_fe281f9":"Méthode de calcul","click_to_close_outcome_details_popover_d469d47d":"Cliquez pour fermer la boîte contextuelle des détails des acquis","click_to_expand_outcome_details_74a2a967":"Cliquez pour agrandir les détails des acquis","example_84698b7d":"Exemple","exceeds_mastery_1f995dce":"Surpasse le niveau de Maîtrise","last_assessment_cd5659b6":"Dernière évaluation : ","meets_mastery_754e1c06":"Niveau de Maîtrise atteint","near_mastery_f25174a4":"Proche du niveau de maîtrise","no_submissions_164cea23":"Aucun envoi","well_below_mastery_37664bdc":"Bien inférieur au niveau de maîtrise"},"he":{"1_item_scores_examplescores_9736236":"1- ציוני פריט: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- ציון סופי: %{exampleResult}","calculation_method_fe281f9":"שיטת חישוב","example_84698b7d":"דוגמה","exceeds_mastery_1f995dce":"מעבר לרף הנדרש למומחיות","meets_mastery_754e1c06":"עונה על דרישות ההתמחות","near_mastery_f25174a4":"קרוב להתמחות","well_below_mastery_37664bdc":"רחוק מאד מהתמחות"},"ht":{"1_item_scores_examplescores_9736236":"1- Nòt Atik: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Nòt Final: %{exampleResult}","calculation_method_fe281f9":"Metòd Kalkil","click_to_close_outcome_details_popover_d469d47d":"Klike pou ka fèmen ti fènèt detay rezilta","click_to_expand_outcome_details_74a2a967":"Klike pou elaji detay rezilta yo","example_84698b7d":"Egzanp","exceeds_mastery_1f995dce":"Depase Metriz","last_assessment_cd5659b6":"Dènye Evalyasyon: ","meets_mastery_754e1c06":"Respekte Metriz","near_mastery_f25174a4":"Pwòch Metriz","no_submissions_164cea23":"Pa gen Soumisyon","well_below_mastery_37664bdc":"Pi ba Metriz"},"hu":{"calculation_method_fe281f9":"Számítási módszer","example_84698b7d":"Példa","exceeds_mastery_1f995dce":"A jártassági szint fölött","meets_mastery_754e1c06":"Megfelel a jártassági szintnek","near_mastery_f25174a4":"Közel a jártassági szinthez","well_below_mastery_37664bdc":"Jóval a jártassági szint alatt"},"hy":{"calculation_method_fe281f9":"Հաշվարկման մեթոդ","example_84698b7d":"Օրինակ","exceeds_mastery_1f995dce":"Գերազանցում է անցողիկ միավորը","meets_mastery_754e1c06":"Համապատասխանում է անցողիկ միավորին","near_mastery_f25174a4":"Մոտ է անցողիկ միավորին","well_below_mastery_37664bdc":"Բավական ցածր է անցողիկ միավորներից "},"is":{"1_item_scores_examplescores_9736236":"1- Hlutastig: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Lokastig: %{exampleResult}","calculation_method_fe281f9":"Reikningsaðferð","click_to_close_outcome_details_popover_d469d47d":"Smelltu til að loka sprettiglugga með upplýsingum um niðurstöðu","click_to_expand_outcome_details_74a2a967":"Ýttu til að opna niðurstöðuatriði","example_84698b7d":"Dæmi","exceeds_mastery_1f995dce":"Fer fram úr tileinkun","last_assessment_cd5659b6":"Síðasta mat: ","meets_mastery_754e1c06":"Uppfyllir tileinkun","near_mastery_f25174a4":"Nálægt tileinkun","no_submissions_164cea23":"Engin skil","well_below_mastery_37664bdc":"Langt undir tileinkun"},"it":{"1_item_scores_examplescores_9736236":"1- Punteggi elemento: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Punteggio finale: %{exampleResult}","calculation_method_fe281f9":"Metodo di calcolo","click_to_close_outcome_details_popover_d469d47d":"Fai clic per chiudere popover dettagli esito","click_to_expand_outcome_details_74a2a967":"Fai clic per espandere dettagli esito","example_84698b7d":"Esempio","exceeds_mastery_1f995dce":"Supera il livello di padronanza","last_assessment_cd5659b6":"Ultima valutazione: ","meets_mastery_754e1c06":"Soddisfa il livello di padronanza","near_mastery_f25174a4":"Padronanza quasi completa","no_submissions_164cea23":"Nessun invio","well_below_mastery_37664bdc":"Ben al di sotto del livello di padronanza"},"ja":{"1_item_scores_examplescores_9736236":"1- 項目スコア：%{exampleScores}","2_final_score_exampleresult_922edf9c":"2- 最終スコア：%{exampleResult}","calculation_method_fe281f9":"計算メソッド","click_to_close_outcome_details_popover_d469d47d":"クリックして結果の詳細詳細ポップオーバーを閉じる","click_to_expand_outcome_details_74a2a967":"クリックして結果の詳細を展開する","example_84698b7d":"例","exceeds_mastery_1f995dce":"熟達を上回る","last_assessment_cd5659b6":"最終アセスメント： ","meets_mastery_754e1c06":"熟達を満たしている","near_mastery_f25174a4":"熟達に近い","no_submissions_164cea23":"提出はありません","well_below_mastery_37664bdc":"熟達を大きく下回る"},"ko":{"example_84698b7d":"예"},"mi":{"1_item_scores_examplescores_9736236":"1- Nga Tūemi Kaute: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Te Kaute Whakamutunga: %{exampleResult}","calculation_method_fe281f9":"Tikanga Tatauranga","click_to_close_outcome_details_popover_d469d47d":"Pāwhiri ki te kati hua taipitopito popoover","click_to_expand_outcome_details_74a2a967":"Pāwhiri ki te whakawhānui i ngā taipitopito putanga","example_84698b7d":"He tauira","exceeds_mastery_1f995dce":"Nui atu te mana","last_assessment_cd5659b6":"Whakamātau whakamutunga:","meets_mastery_754e1c06":"Tutuki mana","near_mastery_f25174a4":"Tata Mātatau","no_submissions_164cea23":"Kaore nga tāpaetanga","well_below_mastery_37664bdc":"Kei raro rawa atu Mātatau"},"nb":{"1_item_scores_examplescores_9736236":"1- Element-scores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Endelig score: %{exampleResult}","calculation_method_fe281f9":"Beregningsmetode","click_to_close_outcome_details_popover_d469d47d":"Klikk for å stenge popover-detaljer for læringsmål","click_to_expand_outcome_details_74a2a967":"Klikk for å utvide utfallsdetaljer","example_84698b7d":"Eksempel","exceeds_mastery_1f995dce":"Overgår ekspertise","last_assessment_cd5659b6":"Siste vurdering: ","meets_mastery_754e1c06":"Innfrir forventningene","near_mastery_f25174a4":"Nær ekspertise","no_submissions_164cea23":"Ingen innleveringer","well_below_mastery_37664bdc":"Innfrir ikke ekspertise"},"nb-x-k12":{"1_item_scores_examplescores_9736236":"1- Element-resultat: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Endelig resultat: %{exampleResult}","calculation_method_fe281f9":"Beregningsmetode","click_to_close_outcome_details_popover_d469d47d":"Klikk for å stenge popover-detaljer for mål","click_to_expand_outcome_details_74a2a967":"Klikk for å utvide utfallsdetaljer","example_84698b7d":"Eksempel","exceeds_mastery_1f995dce":"Overgår ekspertise","last_assessment_cd5659b6":"Siste vurdering: ","meets_mastery_754e1c06":"Innfrir forventningene","near_mastery_f25174a4":"Nær ekspertise","no_submissions_164cea23":"Ingen innleveringer","well_below_mastery_37664bdc":"Innfrir ikke ekspertise"},"nl":{"1_item_scores_examplescores_9736236":"1- Itemscores: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Eindscore: %{exampleResult}","calculation_method_fe281f9":"Berekeningsmethode","click_to_close_outcome_details_popover_d469d47d":"Klik om leerdoeldetails te sluiten","click_to_expand_outcome_details_74a2a967":"Klik om leerdoeldetails uit te vouwen","example_84698b7d":"Voorbeeld","exceeds_mastery_1f995dce":"Overtreft Meesterschap","last_assessment_cd5659b6":"Laatste beoordeling: ","meets_mastery_754e1c06":"Voldoende Meesterschap","near_mastery_f25174a4":"Bijna Meesterschap","no_submissions_164cea23":"Geen inleveringen","well_below_mastery_37664bdc":"Ruim onder Meesterschap"},"nn":{"1_item_scores_examplescores_9736236":"1: Delresultat: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2: Sluttresultat: %{exampleResult}","calculation_method_fe281f9":"Utrekningsmetode","click_to_close_outcome_details_popover_d469d47d":"Klikk for å lukke popup-en med læringsmåldetaljar","click_to_expand_outcome_details_74a2a967":"Klikk for å vise læringsmåldetaljar","example_84698b7d":"Eksempel","exceeds_mastery_1f995dce":"Overskrid meistringsnivå","last_assessment_cd5659b6":"Siste innlevering:","meets_mastery_754e1c06":"Møter meistringsnivå","near_mastery_f25174a4":"Nær meistringsnivå","no_submissions_164cea23":"Ingen innleveringar","well_below_mastery_37664bdc":"Godt under meistringsnivå"},"pl":{"1_item_scores_examplescores_9736236":"1- Wynik elementu: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Wynik końcowy: %{exampleResult}","calculation_method_fe281f9":"Metoda obliczenia","click_to_close_outcome_details_popover_d469d47d":"Kliknij, aby zamknąć okienko wyskakujące ze szczegółami wyników","click_to_expand_outcome_details_74a2a967":"Kliknij, aby rozwinąć szczegóły wyników","example_84698b7d":"Przykład","exceeds_mastery_1f995dce":"Przekracza poziom biegłości","last_assessment_cd5659b6":"Ostatnia ocena: ","meets_mastery_754e1c06":"Spełnia poziom biegłości","near_mastery_f25174a4":"Blisko biegłości","no_submissions_164cea23":"Brak zgłoszeń","well_below_mastery_37664bdc":"Znacznie poniżej poziomu biegłości"},"pt":{"1_item_scores_examplescores_9736236":"1- Pontuação de Itens: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Pontuação Final: %{exampleResult}","calculation_method_fe281f9":"Método de cálculo","click_to_close_outcome_details_popover_d469d47d":"Clique para fechar os detalhes do resultado popover","click_to_expand_outcome_details_74a2a967":"Clique para expandir os detalhes do resultado","example_84698b7d":"Exemplo","exceeds_mastery_1f995dce":"Excede a Excelência","last_assessment_cd5659b6":"Última Avaliação: ","meets_mastery_754e1c06":"Completa o domínio","near_mastery_f25174a4":"Perto do Domínio","no_submissions_164cea23":"Sem submissões","well_below_mastery_37664bdc":"Muito abaixo de Domínio"},"pt-BR":{"1_item_scores_examplescores_9736236":"1- Pontuações do item: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Pontuação final: %{exampleResult}","calculation_method_fe281f9":"Método de cálculo","click_to_close_outcome_details_popover_d469d47d":"Clique para fechar o popover de detalhes do objetivo","click_to_expand_outcome_details_74a2a967":"Clique para expandir detalhes do objetivo","example_84698b7d":"Exemplo","exceeds_mastery_1f995dce":"Excede Domínio","last_assessment_cd5659b6":"Última avaliação: ","meets_mastery_754e1c06":"Encontra com Domínio","near_mastery_f25174a4":"Quase Domínio","no_submissions_164cea23":"Nenhum envio","well_below_mastery_37664bdc":"Muito abaixo de Domínio"},"ru":{"1_item_scores_examplescores_9736236":"1- Оценки элементов: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Итоговая оценка: %{exampleResult}","calculation_method_fe281f9":"Метод вычисления","click_to_close_outcome_details_popover_d469d47d":"Щелкните, чтобы закрыть всплывающее окно с информацией по результатам","click_to_expand_outcome_details_74a2a967":"Щелкните, чтобы развернуть информацию по результатам","example_84698b7d":"Пример","exceeds_mastery_1f995dce":"Превышает проходной балл","last_assessment_cd5659b6":"Последняя оценка: ","meets_mastery_754e1c06":"Соответствует проходному баллу","near_mastery_f25174a4":"Около проходного балла","no_submissions_164cea23":"Нет отправок","well_below_mastery_37664bdc":"Гораздо ниже проходного балла"},"sl":{"1_item_scores_examplescores_9736236":"1 – ocene elementa: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2 – končni rezultat: %{exampleResult}","calculation_method_fe281f9":"Metoda izračuna","click_to_expand_outcome_details_74a2a967":"Kliknite, da razširite podrobnosti o izidu.","example_84698b7d":"Primer","exceeds_mastery_1f995dce":"Presega odličnost","last_assessment_cd5659b6":"Zadnje ocenjevanje: ","meets_mastery_754e1c06":"Odličen","near_mastery_f25174a4":"Delno obvladano","no_submissions_164cea23":"Ni oddaj.","well_below_mastery_37664bdc":"Precej pod odličnostjo"},"sv":{"1_item_scores_examplescores_9736236":"1- Resultatpoäng: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Slutpoäng: %{exampleResult}","calculation_method_fe281f9":"Beräkningsmetod","click_to_close_outcome_details_popover_d469d47d":"Klicka för att stänga rutan med information om lärandemål","click_to_expand_outcome_details_74a2a967":"Klicka för att expandera information om lärandemål","example_84698b7d":"Exempel","exceeds_mastery_1f995dce":"Överträffar måluppfyllelse","last_assessment_cd5659b6":"Senaste bedömning: ","meets_mastery_754e1c06":"Möter måluppfyllelse","near_mastery_f25174a4":"Nära måluppfyllelse","no_submissions_164cea23":"Inga inlämningar","well_below_mastery_37664bdc":"Långt under måluppfyllelse"},"sv-x-k12":{"1_item_scores_examplescores_9736236":"1- Resultatpoäng: %{exampleScores}","2_final_score_exampleresult_922edf9c":"2- Slutpoäng: %{exampleResult}","calculation_method_fe281f9":"Beräkningsmetod","click_to_close_outcome_details_popover_d469d47d":"Klicka för att stänga rutan med information om lärandemål","click_to_expand_outcome_details_74a2a967":"Klicka för att expandera information om lärandemål","example_84698b7d":"Exempel","exceeds_mastery_1f995dce":"Överträffar måluppfyllelse","last_assessment_cd5659b6":"Senaste bedömning: ","meets_mastery_754e1c06":"Möter måluppfyllelse","near_mastery_f25174a4":"Nära måluppfyllelse","no_submissions_164cea23":"Inga inlämningar","well_below_mastery_37664bdc":"Långt under måluppfyllelse"},"tr":{"calculation_method_fe281f9":"Hesaplama Yöntemi","example_84698b7d":"Örnek","exceeds_mastery_1f995dce":"Yeterliğin Üstünde","meets_mastery_754e1c06":"Yeterliği Karşılıyor","near_mastery_f25174a4":"Yeterliğe Yakın","well_below_mastery_37664bdc":"Yeterliğin Epey Altında"},"uk":{"calculation_method_fe281f9":"Метод підрахунків","example_84698b7d":"Приклад","exceeds_mastery_1f995dce":"Перевищує Майстерність","meets_mastery_754e1c06":"Відповідає майстерності","near_mastery_f25174a4":"Майже майстерність","well_below_mastery_37664bdc":"Суттєво нижча майстерність"},"zh-Hans":{"1_item_scores_examplescores_9736236":"1- 项目评分：%{exampleScores}","2_final_score_exampleresult_922edf9c":"2- 最终评分：%{exampleResult}","calculation_method_fe281f9":"计算方法","click_to_close_outcome_details_popover_d469d47d":"点击以关闭结果详情弹窗","click_to_expand_outcome_details_74a2a967":"点击以扩展结果详情","example_84698b7d":"示例","exceeds_mastery_1f995dce":"超过掌握","last_assessment_cd5659b6":"最后一次评估：","meets_mastery_754e1c06":"达到掌握","near_mastery_f25174a4":"最接近的掌握","no_submissions_164cea23":"无提交项","well_below_mastery_37664bdc":"远低于掌握"},"zh-Hant":{"1_item_scores_examplescores_9736236":"1- 項目分數：%{exampleScores}","2_final_score_exampleresult_922edf9c":"2- 最終分數：%{exampleResult}","calculation_method_fe281f9":"計算方法","click_to_close_outcome_details_popover_d469d47d":"點按以關閉成果詳情彈出視窗","click_to_expand_outcome_details_74a2a967":"點按以展開成果詳情","example_84698b7d":"範例","exceeds_mastery_1f995dce":"超過掌握程度","last_assessment_cd5659b6":"最新的評估： ","meets_mastery_754e1c06":"達到掌握程度","near_mastery_f25174a4":"接近掌握程度","no_submissions_164cea23":"沒有提交項目","well_below_mastery_37664bdc":"遠低於掌握程度"}}'))
var Lt=S["default"].scoped("IndividualStudentMasteryOutcomePopover")
var Ut=a("8t0o")
var Vt=a("WfMV")
var Xt=a("xbLn")
var qt=a("zpiH")
var Wt=a("3lb9")
var Ft=a("YYau")
var Jt=a("Mmr1")
var Kt=Object(Qe["a"])("hr",{role:"presentation"})
var Qt=Object(Qe["a"])(Wt["a"],{})
class Yt extends Ze.a.Component{constructor(){super()
this.defaultProficiency=bt.a.memoize(e=>({ratings:[{points:1.5*e,color:"127A1B",description:Lt.t("Exceeds Mastery")},{points:e,color:"00AC18",description:Lt.t("Meets Mastery")},{points:e/2,color:"FAB901",description:Lt.t("Near Mastery")},{points:0,color:"EE0612",description:Lt.t("Well Below Mastery")}]}))
this.state={linkHover:false,linkClicked:false}}getSelectedRating(){const e=this.props.outcomeProficiency
const t=this.props.outcome,a=t.points_possible,n=t.mastery_points,s=t.score
const o=s>=0
if(e&&o){const t=a||n
const o=t?s/t:s
const r=e.ratings[0].points
const i=r*o
return bt.a.find(e.ratings,e=>i>=e.points)||bt.a.last(e.ratings)}if(o)return bt.a.find(this.defaultProficiency(n).ratings,e=>s>=e.points)
return null}latestTime(){const e=this.props.outcome
if(e.results.length>0)return bt.a.sortBy(e.results,e=>e.submitted_or_assessed_at)[0].submitted_or_assessed_at
return null}renderPopoverContent(){const e=this.getSelectedRating()
const t=this.latestTime()
const a=new Xt["a"](this.props.outcome).present()
const n=a.method,s=a.exampleText,o=a.exampleScores,r=a.exampleResult
const i=this.props.outcome
return Object(Qe["a"])(lt["a"],{as:"div",padding:"large",maxWidth:"30rem"},void 0,Object(Qe["a"])(Jt["a"],{placement:"end",onClick:()=>this.setState({linkHover:false,linkClicked:false})},void 0,Lt.t("Click to close outcome details popover")),Object(Qe["a"])(ot["a"],{size:"small"},void 0,Object(Qe["a"])(st["a"],{alignItems:"stretch",direction:"row",justifyItems:"space-between"},void 0,Object(Qe["a"])(st["a"].Item,{grow:true,shrink:true},void 0,Object(Qe["a"])("div",{style:{wordWrap:"break-word",overflowWrap:"break-word"}},void 0,i.title),Object(Qe["a"])("div",{},void 0,Lt.t("Last Assessment: "),t?Object(Qe["a"])(Ft["a"],{datetime:t,format:"%b %d, %l:%M %p"}):Lt.t("No submissions"))),Object(Qe["a"])(st["a"].Item,{grow:true,shrink:true,align:"stretch"},void 0,Object(Qe["a"])(ot["a"],{size:"small",weight:"bold"},void 0,Object(Qe["a"])("div",{},void 0,e&&Object(Qe["a"])("div",{style:{color:"#".concat(e.color),textAlign:"end"}},void 0,e.description))))),Kt,Object(Qe["a"])("div",{},void 0,Object(Qe["a"])(ot["a"],{size:"small",weight:"bold"},void 0,Lt.t("Calculation Method")),Object(Qe["a"])("div",{},void 0,n),Object(Qe["a"])("div",{style:{padding:"0.5rem 0 0 0"}},void 0,Object(Qe["a"])(ot["a"],{size:"small",weight:"bold"},void 0,Lt.t("Example"))),Object(Qe["a"])("div",{},void 0,s),Object(Qe["a"])("div",{},void 0,Lt.t("1- Item Scores: %{exampleScores}",{exampleScores:o})),Object(Qe["a"])("div",{},void 0,Lt.t("2- Final Score: %{exampleResult}",{exampleResult:r})))))}render(){const e=this.renderPopoverContent()
return Object(Qe["a"])("span",{},void 0,Object(Qe["a"])(qt["a"],{show:this.state.linkHover||this.state.linkClicked,onDismiss:()=>this.setState({linkHover:false,linkClicked:false}),placement:"bottom",on:["hover","click"],shouldContainFocus:true},void 0,Object(Qe["a"])(qt["a"].Trigger,{},void 0,Object(Qe["a"])(Ut["a"],{onClick:()=>this.setState(e=>({linkClicked:!e.linkClicked})),onMouseEnter:()=>this.setState({linkHover:true}),onMouseLeave:()=>this.setState({linkHover:false})},void 0,Object(Qe["a"])("span",{style:{color:"black"}},void 0,Qt),Object(Qe["a"])("span",{},void 0,!this.state.linkClicked&&Object(Qe["a"])(Vt["a"],{},void 0,Lt.t("Click to expand outcome details"))))),Object(Qe["a"])(qt["a"].Content,{},void 0,e)))}}Yt.defaultProps={outcomeProficiency:null}
var Zt=a("4Pkj")
class $t extends Ze.a.Component{constructor(){super(...arguments)
this.handleToggle=(e,t)=>{this.props.onExpansionChange("outcome",this.props.outcome.expansionId,t)}}renderHeader(){const e=this.props,t=e.outcome,a=e.outcomeProficiency
const n=t.assignments,s=t.display_name,o=t.mastered,r=t.title,i=t.score,_=t.points_possible,l=t.results
const c=n.length
const d={margin:"0 0 0 x-small",text:yt.t("Not mastered")}
o&&Object.assign(d,{text:yt.t("Mastered"),variant:"success"})
return Object(Qe["a"])(st["a"],{direction:"row",justifyItems:"space-between","data-selenium":"outcome"},void 0,Object(Qe["a"])(st["a"].Item,{shrink:true},void 0,Object(Qe["a"])(st["a"],{direction:"column"},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(ot["a"],{size:"medium"},void 0,Object(Qe["a"])(st["a"],{},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(Yt,{outcome:t,outcomeProficiency:a})),Object(Qe["a"])(st["a"].Item,{shrink:true,padding:"0 x-small"},void 0,Object(Qe["a"])(gt,{},void 0,s||r))))),Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(ot["a"],{size:"small"},void 0,yt.t({zero:"No alignments",one:"%{count} alignment",other:"%{count} alignments"},{count:yt.n(c)}))))),Object(Qe["a"])(st["a"].Item,{},void 0,bt.a.isNumber(i)&&!bt.a.every(l,["hide_points",true])&&Object(Qe["a"])("span",{},void 0,Object(Qe["a"])(Zt["a"],{},void 0,Object(Qe["a"])(ot["a"],{size:"medium"},void 0,i,"/",_)),Object(Qe["a"])(Vt["a"],{},void 0,yt.t("%{score} out of %{points_possible} points",{score:i,points_possible:_}))),Ze.a.createElement(dt["a"],d)))}renderDetails(){const e=this.props,t=e.outcome,a=e.outcomeProficiency
const n=t.assignments,s=t.results
const o=bt.a.filter(s,e=>e.assignment.id.startsWith("assignment_")).map(e=>e.assignment.id.split("_")[1])
const r=bt.a.filter(s,e=>e.assignment.id.startsWith("live_assessments/assessment_")).map(e=>e.assignment.id.split("_")[2])
const i=bt.a.filter(n,e=>e.assignment_id&&!bt.a.includes(o,e.assignment_id.toString())||e.assessment_id&&!bt.a.includes(r,e.assessment_id.toString()))
return Object(Qe["a"])(rt["a"],{variant:"unstyled",delimiter:"dashed"},void 0,s.sort(c["a"].byKey("submitted_or_assessed_at")).reverse().map(e=>Object(Qe["a"])(rt["a"].Item,{},e.id,Object(Qe["a"])(Nt,{result:e,outcome:t,outcomeProficiency:a}))),i.map(e=>Object(Qe["a"])(rt["a"].Item,{},"a".concat(e.assignment_id),Object(Qe["a"])(Rt,{assignment:e}))))}renderEmpty(){return Object(Qe["a"])(lt["a"],{as:"div",padding:"small"},void 0,Object(Qe["a"])(ot["a"],{},void 0,yt.t("No alignments are available for this outcome.")))}render(){const e=this.props,t=e.outcome,a=e.expanded
const n=t.assignments,s=t.title
const o=n.length>0
return Object(Qe["a"])(ct["a"],{summary:this.renderHeader(),toggleLabel:yt.t("Toggle alignment details for %{title}",{title:s}),expanded:a,onToggle:this.handleToggle,border:false},void 0,o?this.renderDetails():this.renderEmpty())}}$t.defaultProps={outcomeProficiency:null}
const ea=(e,t,a)=>Object(Qe["a"])(st["a"],{justifyItems:"space-between"},void 0,Object(Qe["a"])(st["a"].Item,{padding:"0 x-small 0 0",size:"0",grow:true},void 0,Object(Qe["a"])(ot["a"],{size:"large",weight:"bold"},void 0,Object(Qe["a"])(gt,{},void 0,e.title))),Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(dt["a"],{text:_t.t("%{numMastered} of %{numGroup} Mastered",{numMastered:t,numGroup:a})})))
class ta extends Ze.a.Component{constructor(){super(...arguments)
this.handleToggle=(e,t)=>{this.props.onExpansionChange("group",this.props.outcomeGroup.id,t)}}render(){const e=this.props,t=e.outcomeGroup,a=e.outcomes,n=e.expanded,s=e.expandedOutcomes,o=e.onExpansionChange,r=e.outcomeProficiency
const i=a.filter(e=>e.mastered).length
const _=a.length
return Object(Qe["a"])(lt["a"],{as:"div",className:"outcomeGroup"},void 0,Object(Qe["a"])(ct["a"],{summary:ea(t,i,_),toggleLabel:_t.t("Toggle outcomes for %{title}",{title:t.title}),expanded:n,onToggle:this.handleToggle},void 0,Object(Qe["a"])(rt["a"],{variant:"unstyled",delimiter:"solid"},void 0,a.sort(c["a"].byKey("title")).map(e=>Object(Qe["a"])(rt["a"].Item,{margin:"0"},e.id,Object(Qe["a"])($t,{outcome:e,expanded:s.has(e.expansionId),onExpansionChange:o,outcomeProficiency:r}))))))}}ta.defaultProps={outcomeProficiency:null}
var aa=a("ODXe")
var na=a("EcEN")
var sa=a.n(na)
var oa=a("08kA")
var ra=a.n(oa)
const ia=12
class _a{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.options=Object(Ne["a"])({activeRequestLimit:ia},e)
this.requests=[]}get activeRequestCount(){return this.requests.filter(e=>e.active).length}get nextPendingRequest(){return this.requests.find(e=>!e.active)}addRequest(e){this.requests.push(e)
this.fillQueue()}clearRequest(e){this.requests=this.requests.filter(t=>t!==e)
this.fillQueue()}fillQueue(){let e=this.nextPendingRequest
while(null!=e&&this.activeRequestCount<this.options.activeRequestLimit){e.start()
e=this.nextPendingRequest}}fetch(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
const n={active:false}
n.promise=new Promise((e,t)=>{n.resolve=e
n.reject=t})
n.start=()=>{n.active=true
fetch(...t).then(n.resolve).catch(n.reject).finally(()=>{this.clearRequest(n)})}
this.addRequest(n)
return n.promise}}const la=(e,t)=>void 0===e||null===e?t:Array.isArray(e)?e.concat(t):"object"===typeof e?bt.a.mergeWith(e,t,la):t
const ca=(e,t)=>Promise.all([e,t]).then(e=>{let t=Object(aa["a"])(e,2),a=t[0],n=t[1]
return la(a,n)})
const da=e=>e.text().then(e=>JSON.parse(e.replace("while(1);","")))
function ua(e,t){return t.fetch(e,{credentials:"include"}).then(e=>{const a=e.headers.get("link")
const n=a?ra()(a).next:null
return n?ca(da(e),ua(n.url,t)):da(e)})}const pa=(e,t)=>{const a=new _a
let n
let s
let o
let r
let i
let _
function l(e){return ua(e,a)}return Promise.all([l("/api/v1/courses/".concat(e,"/outcome_groups?per_page=100")),l("/api/v1/courses/".concat(e,"/outcome_group_links?outcome_style=full&per_page=100")),l("/api/v1/courses/".concat(e,"/outcome_rollups?user_ids[]=").concat(t,"&per_page=100")),l("/api/v1/courses/".concat(e,"/outcome_alignments?student_id=").concat(t))]).then(e=>{let t=Object(aa["a"])(e,4),a=t[0],i=t[1],_=t[2],l=t[3]
n=a
s=i
o=_
r=bt.a.groupBy(l,"learning_outcome_id")}).then(()=>Promise.all(s.map(a=>l("/api/v1/courses/".concat(e,"/outcome_results?user_ids[]=").concat(t,"&outcome_ids[]=").concat(a.outcome.id,"&include[]=assignments&per_page=100"))))).then(e=>{i=e.reduce((e,t,a)=>{e[s[a].outcome.id]=t.outcome_results.filter(e=>!e.hidden)
return e},{})
_=bt.a.keyBy(bt.a.flatten(e.map(e=>e.linked.assignments)),e=>e.id)}).then(()=>{const e=s.map(e=>Object(Ne["a"])({expansionId:sa()(),groupId:e.outcome_group.id},e.outcome))
const t=bt.a.groupBy(e,e=>e.groupId)
n=n.filter(e=>t[e.id])
const a=bt.a.keyBy(e,e=>e.id)
o.rollups[0].scores.forEach(e=>{const t=a[e.links.outcome]
if(t){t.score=e.score
t.mastered=e.score>=t.mastery_points}})
e.forEach(e=>{e.assignments=r[e.id]||[]
e.results=i[e.id]||[]
e.results.forEach(e=>{const t=e.links.assignment||e.links.alignment
e.assignment=_[t]})})
return{outcomeGroups:n,outcomes:e}})}
var ma=pa
var fa=a("JPcv")
class ga extends Ze.a.Component{constructor(){super()
this.onElementExpansionChange=(e,t,a)=>{let n=this.state.expandedGroups
let s=this.state.expandedOutcomes
if("group"===e)if(a)n=n.add(t)
else{n=n.delete(t)
const e=this.state.outcomes.filter(e=>e.groupId===t).map(e=>e.expansionId)
s=s.filterNot(t=>e.includes(t))}else"outcome"===e&&(s=a?s.add(t):s.delete(t))
this.setState({expandedGroups:n,expandedOutcomes:s},()=>this.notifyExpansionChange())}
this.state={loading:true,error:null,expandedGroups:Object(fa["Set"])(),expandedOutcomes:Object(fa["Set"])()}}componentDidMount(){const e=this.props,t=e.courseId,a=e.studentId
return ma(t,a).then(e=>{let t=e.outcomeGroups,a=e.outcomes
this.setState({outcomeGroups:t,outcomes:a})}).then(()=>this.setState({loading:false})).catch(e=>this.setState({loading:false,error:e}))}contract(){this.setState({expandedGroups:Object(fa["Set"])(),expandedOutcomes:Object(fa["Set"])()},()=>this.notifyExpansionChange())}expand(){this.setState({expandedGroups:Object(fa["Set"])(this.state.outcomeGroups.map(e=>e.id)),expandedOutcomes:Object(fa["Set"])(this.state.outcomes.map(e=>e.expansionId))},()=>this.notifyExpansionChange())}notifyExpansionChange(){this.props.onExpansionChange(this.anyExpanded(),this.anyContracted())}anyExpanded(){return this.state.expandedGroups.size>0||this.state.expandedOutcomes.size>0}anyContracted(){return this.state.outcomeGroups.length>this.state.expandedGroups.size||this.state.outcomes.length>this.state.expandedOutcomes.size}renderLoading(){return Object(Qe["a"])(st["a"],{justifyItems:"center",alignItems:"center",padding:"medium"},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(it["a"],{size:"large",renderTitle:nt.t("Loading outcome results")})))}renderError(){return Object(Qe["a"])(st["a"],{justifyItems:"start",alignItems:"center",padding:"medium 0"},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(ot["a"],{color:"error"},void 0,nt.t("An error occurred loading outcomes data."))))}renderEmpty(){return Object(Qe["a"])(st["a"],{justifyItems:"start",alignItems:"center",padding:"medium 0"},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,Object(Qe["a"])(ot["a"],{},void 0,nt.t("There are no outcomes in the course."))))}renderGroups(){const e=this.state,t=e.outcomeGroups,a=e.outcomes
const n=this.props.outcomeProficiency
return Object(Qe["a"])("div",{},void 0,Object(Qe["a"])(rt["a"],{variant:"unstyled"},void 0,t.sort(c["a"].byKey("title")).map(e=>Object(Qe["a"])(rt["a"].Item,{},e.id,Object(Qe["a"])(ta,{outcomeGroup:e,outcomes:a.filter(t=>t.groupId.toString()===e.id.toString()),expanded:this.state.expandedGroups.has(e.id),expandedOutcomes:this.state.expandedOutcomes,onExpansionChange:this.onElementExpansionChange,outcomeProficiency:n})))))}render(){const e=this.state,t=e.error,a=e.loading,n=e.outcomeGroups
return a?this.renderLoading():t?this.renderError():0===n.length?this.renderEmpty():this.renderGroups()}}ga.defaultProps={onExpansionChange:()=>{},outcomeProficiency:null}
var ha=ga
var ba=T.a.default
var ya=ba.template,va=ba.templates=ba.templates||{}
var ka="grade-summary/individual-student-view"
va[ka]=ya((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
return'<div class="individualStudentView"></div>'}))
var wa=va[ka]
class xa extends r.a.View{static initClass(){this.optionProperty("course_id")
this.optionProperty("student_id")
this.prototype.template=wa}initialize(){super.initialize(...arguments)
return this.bindToggles()}show(){super.show(...arguments)
this.render()
const e=Object(Qe["a"])(ha,{courseId:this.course_id,studentId:this.student_id,onExpansionChange:this.updateToggles,outcomeProficiency:ENV.outcome_proficiency})
return this.reactView=et.a.render(e,s()(".individualStudentView").get(0))}updateToggles(e,t){const a=s()("div.outcome-toggles a.icon-collapse")
const n=s()("div.outcome-toggles a.icon-expand")
if(e){a.removeAttr("disabled")
a.attr("aria-disabled","false")}else{a.attr("disabled","disabled")
a.attr("aria-disabled","true")}if(t){n.removeAttr("disabled")
return n.attr("aria-disabled","false")}n.attr("disabled","disabled")
return n.attr("aria-disabled","true")}bindToggles(){const e=s()("div.outcome-toggles a.icon-collapse")
const t=s()("div.outcome-toggles a.icon-expand")
t.click(e=>{e.preventDefault()
return this.reactView.expand()})
return e.click(e=>{e.preventDefault()
return this.reactView.contract()})}}xa.initClass()
a("jYyc")
a("JI1W")
a("p6Wi")
a("OShF")
a("7WS/")
a("iBIV")
var ja=a("x1Tw")
var Ca=a("vc+K")
var Oa=a("ll/T")
var Sa=a("5Ky4")
Object(z["a"])(JSON.parse('{"ar":{"assignment_details_collapsed_55b67150":"تم طي تفاصيل المهمة","assignment_details_expanded_20c6f0c7":"تم توسيع تفاصيل المهمة","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"بناءً على نقاط ماذا لو، فإن الدرجة الإجمالية الجديدة الآن هي %{grade}","click_to_test_a_different_score_2e0bb6f0":"انقر لاختبار نقطة مختلفة","enter_a_what_if_score_668c91a3":"إدخال درجة مفترضة.","grades_are_now_reverted_to_original_scores_e6deade1":"أُعيدت الدرجات إلى الدرجات الأصلية","grades_are_now_showing_what_if_scores_711a8be2":"تُعرض الآن درجات ماذا لو","hide_all_details_61d7ebb":"إخفاء كل التفاصيل","instructor_is_working_on_grades_135388d2":"يعمل المعلم في حساب الدرجات","n_a_d6f6c42f":"لا يوجد","show_all_details_9879980c":"عرض جميع التفاصيل","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"تم حذف هذه المهمة ولن تؤخذ في الاعتبار أثناء الحساب الإجمالي","this_is_a_what_if_score_cbdc04f9":"هذا مجموع نقاط ماذا لو"},"cy":{"assignment_details_collapsed_55b67150":"manylion aseiniad wedi’u crebachu","assignment_details_expanded_20c6f0c7":"manylion aseiniad wedi’u hehangu","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Ar sail y sgôr Beth-os, y cyfanswm newydd yw %{grade}","click_to_test_a_different_score_2e0bb6f0":"Cliciwch i brofi sgôr wahanol","enter_a_what_if_score_668c91a3":"Rhowch sgôr Beth-os.","grades_are_now_reverted_to_original_scores_e6deade1":"Mae’r graddau wedi’u newid yn ôl i’r sgoriau gwreiddiol","grades_are_now_showing_what_if_scores_711a8be2":"Mae graddau’n dangos y sgoriau Beth-os nawr","hide_all_details_61d7ebb":"Cuddio’r holl fanylion","instructor_is_working_on_grades_135388d2":"Mae\'r addysgwr yn gweithio ar y graddau","n_a_d6f6c42f":"Amherthnasol","show_all_details_9879980c":"Dangos yr Holl Fanylion","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Mae’r aseiniad hwn wedi’i ollwng, ac ni fydd yn cael ei ystyried wrth gyfrifo’r cyfanswm","this_is_a_what_if_score_cbdc04f9":"Dyma’r sgôr Beth-os"},"da":{"assignment_details_collapsed_55b67150":"opgavedetaljer skjult","assignment_details_expanded_20c6f0c7":"opgavedetaljer udvidet","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Baseret på hvad-nu-hvis-resultater, bliver det nye samlede resultat %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klik for at teste et andet resultat","enter_a_what_if_score_668c91a3":"Indtast et Hvad-nu-hvis-resultat.","grades_are_now_reverted_to_original_scores_e6deade1":"Karakterer er nu vendt tilbage til originale resultater","grades_are_now_showing_what_if_scores_711a8be2":"Karakterer viser nu hvad-nu-hvis-resultat","hide_all_details_61d7ebb":"Skjul alle detaljer","instructor_is_working_on_grades_135388d2":"Instruktøren arbejder på karakterer","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Vis alle detaljer","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Opgaven blev droppet og tages ikke i betragtning i den samlede beregning","this_is_a_what_if_score_cbdc04f9":"Dette er et \'Hvad-nu-hvis-resultat\\""},"da-x-k12":{"assignment_details_collapsed_55b67150":"opgavedetaljer skjult","assignment_details_expanded_20c6f0c7":"opgavedetaljer udvidet","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Baseret på hvad-nu-hvis-resultater, bliver det nye samlede resultat %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klik for at teste et andet resultat","enter_a_what_if_score_668c91a3":"Indtast et Hvad-nu-hvis-resultat.","grades_are_now_reverted_to_original_scores_e6deade1":"Vurderinger er nu vendt tilbage til originale resultater","grades_are_now_showing_what_if_scores_711a8be2":"Vurderinger viser nu hvad-nu-hvis-resultat","hide_all_details_61d7ebb":"Skjul alle detaljer","instructor_is_working_on_grades_135388d2":"Instruktøren arbejder på vurderinger","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Vis alle detaljer","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Opgaven blev droppet og tages ikke i betragtning i den samlede beregning","this_is_a_what_if_score_cbdc04f9":"Dette er et \'Hvad-nu-hvis-resultat\\""},"de":{"assignment_details_collapsed_55b67150":"Aufgabendetails ausgeblendet","assignment_details_expanded_20c6f0c7":"Aufgabendetails eingeblendet","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Basierend auf hypothetischen Punkteständen ist die Gesamtsumme jetzt %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klicken, um andere Punktzahl zu testen","enter_a_what_if_score_668c91a3":"Geben Sie eine hypothetische Punktzahl ein.","grades_are_now_reverted_to_original_scores_e6deade1":"Die Noten werden jetzt auf die ursprüngliche Punktezahl zurückgesetzt.","grades_are_now_showing_what_if_scores_711a8be2":"Die Noten zeigen jetzt hypothetische Punktestände","hide_all_details_61d7ebb":"Alle Details ausblenden","instructor_is_working_on_grades_135388d2":"Der Dozent arbeitet an der Benotung.","n_a_d6f6c42f":"k. A.","show_all_details_9879980c":"Alle Details zeigen","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Diese Aufgabe wurde gestrichen und fließt nicht in die Gesamtpunktzahl ein.","this_is_a_what_if_score_cbdc04f9":"Dies ist ein hypothetischer Punktestand"},"el":{"hide_all_details_61d7ebb":"Απόκρυψη Όλων των Λεπτομερειών","n_a_d6f6c42f":"Δεν εφαρμόζεται","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Αυτή η εργασία δεν θα συνυπολογιστεί στην τελική βαθμολογία"},"en-AU":{"assignment_details_collapsed_55b67150":"assignment details collapsed","assignment_details_expanded_20c6f0c7":"assignment details expanded","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Based on What-If scores, the new total is now %{grade}","click_to_test_a_different_score_2e0bb6f0":"Click to test a different score","enter_a_what_if_score_668c91a3":"Enter a What-If score.","grades_are_now_reverted_to_original_scores_e6deade1":"Grades are now reverted to original scores.","grades_are_now_showing_what_if_scores_711a8be2":"Grades are now showing what-if scores.","hide_all_details_61d7ebb":"Hide All Details","instructor_is_working_on_grades_135388d2":"Instructor is working on marks","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Show All Details","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"This assignment is dropped and will not be considered in the total calculation.","this_is_a_what_if_score_cbdc04f9":"This is a What-If score"},"en-AU-x-unimelb":{"assignment_details_collapsed_55b67150":"assignment details collapsed","assignment_details_expanded_20c6f0c7":"assignment details expanded","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Based on What-If scores, the new total is now %{grade}","click_to_test_a_different_score_2e0bb6f0":"Click to test a different score","enter_a_what_if_score_668c91a3":"Enter a What-If score.","grades_are_now_reverted_to_original_scores_e6deade1":"Grades are now reverted to original scores.","grades_are_now_showing_what_if_scores_711a8be2":"Grades are now showing what-if scores.","hide_all_details_61d7ebb":"Hide All Details","instructor_is_working_on_grades_135388d2":"Instructor is working on grades","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Show All Details","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"This assignment is dropped and will not be considered in the total calculation.","this_is_a_what_if_score_cbdc04f9":"This is a What-If score"},"en-CA":{"assignment_details_collapsed_55b67150":"assignment details collapsed","assignment_details_expanded_20c6f0c7":"assignment details expanded","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Based on What-If scores, the new total is now %{grade}","click_to_test_a_different_score_2e0bb6f0":"Click to test a different score","enter_a_what_if_score_668c91a3":"Enter a What-If score.","grades_are_now_reverted_to_original_scores_e6deade1":"Grades are now reverted to original scores","grades_are_now_showing_what_if_scores_711a8be2":"Grades are now showing what-if scores","hide_all_details_61d7ebb":"Hide All Details","instructor_is_working_on_grades_135388d2":"Instructor is working on grades","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Show All Details","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"This assignment is dropped and will not be considered in the total calculation","this_is_a_what_if_score_cbdc04f9":"This is a What-If score"},"en-GB":{"assignment_details_collapsed_55b67150":"assignment details collapsed","assignment_details_expanded_20c6f0c7":"assignment details expanded","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Based on What-if scores, the new total is now %{grade}","click_to_test_a_different_score_2e0bb6f0":"Click to test a different score","enter_a_what_if_score_668c91a3":"Enter a What-if score.","grades_are_now_reverted_to_original_scores_e6deade1":"Grades are now reverted to original scores","grades_are_now_showing_what_if_scores_711a8be2":"Grades are now showing what-if scores","hide_all_details_61d7ebb":"Hide all details","instructor_is_working_on_grades_135388d2":"Instructor is working on grades","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Show all details","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"This assignment has been dropped and will not be considered in the total calculation","this_is_a_what_if_score_cbdc04f9":"This is a what-if score"},"en-GB-x-lbs":{"assignment_details_collapsed_55b67150":"task details collapsed","assignment_details_expanded_20c6f0c7":"task details expanded","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Based on What-if scores, the new total is now %{grade}","click_to_test_a_different_score_2e0bb6f0":"Click to test a different score","enter_a_what_if_score_668c91a3":"Enter a What-if score.","grades_are_now_reverted_to_original_scores_e6deade1":"Grades are now reverted to original scores","grades_are_now_showing_what_if_scores_711a8be2":"Grades are now showing what-if scores","hide_all_details_61d7ebb":"Hide all details","instructor_is_working_on_grades_135388d2":"Instructor is working on grades","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Show all details","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"This task has been dropped and will not be considered in the total calculation","this_is_a_what_if_score_cbdc04f9":"This is a what-if score"},"en-GB-x-ukhe":{"assignment_details_collapsed_55b67150":"assignment details collapsed","assignment_details_expanded_20c6f0c7":"assignment details expanded","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Based on What-if scores, the new total is now %{grade}","click_to_test_a_different_score_2e0bb6f0":"Click to test a different score","enter_a_what_if_score_668c91a3":"Enter a What-if score.","grades_are_now_reverted_to_original_scores_e6deade1":"Grades are now reverted to original scores","grades_are_now_showing_what_if_scores_711a8be2":"Grades are now showing what-if scores","hide_all_details_61d7ebb":"Hide all details","instructor_is_working_on_grades_135388d2":"Instructor is working on grades","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Show all details","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"This assignment has been dropped and will not be considered in the total calculation","this_is_a_what_if_score_cbdc04f9":"This is a what-if score"},"es":{"assignment_details_collapsed_55b67150":"detalles de tarea colapsados","assignment_details_expanded_20c6f0c7":"detalles de tarea expandidos","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Según las puntuaciones \\"qué pasa si\\", ahora el total nuevo es %{grade}","click_to_test_a_different_score_2e0bb6f0":"Haga clic para probar un puntaje diferente","enter_a_what_if_score_668c91a3":"Ingresar un nuevo puntaje hipotético","grades_are_now_reverted_to_original_scores_e6deade1":"Las calificaciones han sido revertidas ahora a sus puntuaciones originales","grades_are_now_showing_what_if_scores_711a8be2":"Las calificaciones ahora muestran las puntuaciones \\"Que pasaría si\\"","hide_all_details_61d7ebb":"Ocultar todos los detalles","instructor_is_working_on_grades_135388d2":"El profesor está trabajando en las calificaciones","n_a_d6f6c42f":"N. a.","show_all_details_9879980c":"Mostrar todos los detalles","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Esta tarea está cancelada y no será considerada en el cálculo total","this_is_a_what_if_score_cbdc04f9":"Esta es un puntaje \\"que pasa si\\""},"fa":{"assignment_details_collapsed_55b67150":"اطلاعات تکلیف باز شد","assignment_details_expanded_20c6f0c7":"جزئیات تکلیف گسترش یافته است","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"بر اساس نمره های احتمالی، مجموع جدید اکنون %{grade} است","click_to_test_a_different_score_2e0bb6f0":"برای آزمایش نمره دیگر، کلیک کنید","enter_a_what_if_score_668c91a3":"یک نمره احتمالی وارد کنید.","grades_are_now_reverted_to_original_scores_e6deade1":"نمره ها اکنون به نمره های اصلی تبدیل شده اند","grades_are_now_showing_what_if_scores_711a8be2":"نمره ها اکنون نمره های احتمالی را نشان می دهند","hide_all_details_61d7ebb":"مخفی کردن همه جزئیات","instructor_is_working_on_grades_135388d2":"استاد روی نمره ها کار می کند","n_a_d6f6c42f":"موجود نیست","show_all_details_9879980c":"نمایش همه اطلاعات","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"این تکلیف حذف شده است و در محاسبه کل در نظر گرفته نخواهد شد","this_is_a_what_if_score_cbdc04f9":"این یک نمره احتمالی است"},"fi":{"assignment_details_collapsed_55b67150":"Tehtävän tiedot kutistettu","assignment_details_expanded_20c6f0c7":"Tehtävän tiedot laajennettu","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Mitä jos -pistemäärän perusteella uusi kokonaismäärä on nyt %{grade}","click_to_test_a_different_score_2e0bb6f0":"Testaa eri pistemääriä napsauttamalla","enter_a_what_if_score_668c91a3":"Syötä Mitä jos -pistemäärä.","grades_are_now_reverted_to_original_scores_e6deade1":"Arvosanat palautetaan nyt alkuperäisiin pistemääriin","grades_are_now_showing_what_if_scores_711a8be2":"Arvosanat näytetään nyt mitä jos -pistemäärinä","hide_all_details_61d7ebb":"Piilota kaikki tiedot","instructor_is_working_on_grades_135388d2":"Ohjaaja tekee töitä arvosanojen parissa","n_a_d6f6c42f":"Ei sovellettavissa","show_all_details_9879980c":"Näytä kaikki tiedot","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Tämä tehtävä pudotetaan eikä sitä oteta huomioon koko laskelmassa","this_is_a_what_if_score_cbdc04f9":"Tämä on Mitä jos -pistemäärä"},"fr":{"assignment_details_collapsed_55b67150":"détails de la tâche réduits","assignment_details_expanded_20c6f0c7":"détails de la tâche étendus","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Basé sur les scores What-if, le nouveau total est désormais de %{grade}","click_to_test_a_different_score_2e0bb6f0":"Cliquer pour tester une note différente","enter_a_what_if_score_668c91a3":"Entrez un score conditionnel.","grades_are_now_reverted_to_original_scores_e6deade1":"Les notes sont maintenant rétablies sur les scores d\'origine","grades_are_now_showing_what_if_scores_711a8be2":"Les notes montrent maintenant des scores hypothétiques","hide_all_details_61d7ebb":"Masquer tous les détails","instructor_is_working_on_grades_135388d2":"Le formateur travaille sur les notes","n_a_d6f6c42f":"NA","show_all_details_9879980c":"Montrer tous les détails","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Ce devoir est abandonné et ne sera pas pris en compte dans le calcul du total","this_is_a_what_if_score_cbdc04f9":"Ceci est une note hypothétique"},"fr-CA":{"assignment_details_collapsed_55b67150":"détails de la tâche minimisés","assignment_details_expanded_20c6f0c7":"détails de la tâche maximisés","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Selon les scores « What If », le nouveau total est maintenant %{grade}","click_to_test_a_different_score_2e0bb6f0":"Cliquer pour tester une note différente","enter_a_what_if_score_668c91a3":"Saisir un score de simulation What If.","grades_are_now_reverted_to_original_scores_e6deade1":"Les notes sont maintenant rétablies sur les scores d\'origine","grades_are_now_showing_what_if_scores_711a8be2":"Les notes montrent maintenant des scores hypothétiques","hide_all_details_61d7ebb":"Masquer tous les détails","instructor_is_working_on_grades_135388d2":"L’instructeur travaille sur les notes","n_a_d6f6c42f":"N/D","show_all_details_9879980c":"Afficher tous les détails","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Cette tâche est abandonné et ne sera pas pris en compte dans le calcul du total","this_is_a_what_if_score_cbdc04f9":"Ceci est une note hypothétique (What If)"},"he":{"assignment_details_collapsed_55b67150":"פרטי מטלה הוסתרו","assignment_details_expanded_20c6f0c7":"פרטי מטלה נגלו","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"בהתבסס על ציוני  What-If , הסיכום החדש הוא כעת %{grade}","click_to_test_a_different_score_2e0bb6f0":"הקש/י כדי לבחון ציון שונה","enter_a_what_if_score_668c91a3":"הקלדת ציון ל\\"מה יקרה אם\\"","grades_are_now_reverted_to_original_scores_e6deade1":"הציונים כעת חזרו לניקוד המקורי","grades_are_now_showing_what_if_scores_711a8be2":"ההערכות מראות כעת ציוני מה-היה-אילו","hide_all_details_61d7ebb":"הסתרת כל הפרטים","instructor_is_working_on_grades_135388d2":"המנחה עובד על ההערכות","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"הצגת כל הפרטים","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"משימה זו הושמטה ולא תחשב בתחשיב הכולל.","this_is_a_what_if_score_cbdc04f9":"זהו ציון של \\"מה יקרה אם...\\""},"ht":{"assignment_details_collapsed_55b67150":"detay sesyon efondre","assignment_details_expanded_20c6f0c7":"detay sesyon elaji","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Daprè What-If scores, kounye a nouvo total la se %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klike pou teste yon lòt nòt","enter_a_what_if_score_668c91a3":"Antre yon What-If score.","grades_are_now_reverted_to_original_scores_e6deade1":"Nòt yo retounen nan patisyon orijinal yo kounye a","grades_are_now_showing_what_if_scores_711a8be2":"Kounye a kategori yo afiche kisa-si nòt yo","hide_all_details_61d7ebb":"Kache tout Detay","instructor_is_working_on_grades_135388d2":"Enstriktè a ap travay sou nòt yo","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Afiche tout Detay","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Yo abandone sesyon sa a ni yo pa p konsidere li nan kalkil total la.","this_is_a_what_if_score_cbdc04f9":"Sa se yon Kisa-Si nòt"},"hu":{"assignment_details_collapsed_55b67150":"feladat részletei elrejtve","assignment_details_expanded_20c6f0c7":"feladat részletei megjelenítve","grades_are_now_reverted_to_original_scores_e6deade1":"Az értékelések vissza lettek állítva az eredeti értékekre","grades_are_now_showing_what_if_scores_711a8be2":"Az értékelések most a \\"Mi lenne, ha?\\" állapotot mutatják","hide_all_details_61d7ebb":"Minden részlet elrejtése","instructor_is_working_on_grades_135388d2":"Az oktató dolgozik az értékelésen","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Minden részlet megjelenítése ","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Ez a feladat el lett dobva, nem lesz figyelembe véve a teljes számításban","this_is_a_what_if_score_cbdc04f9":"Ez csak egy \\"Mi lenne ha?\\" pontszám"},"hy":{"n_a_d6f6c42f":"Չկա","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Այս հանձնարարությունը բաց է թողնվել և հաշվի չի առնվելու ընդհանուր գնահատականը հաշվարկելիս"},"is":{"assignment_details_collapsed_55b67150":"upplýsingar um verkefni felldar","assignment_details_expanded_20c6f0c7":"upplýsingar um verkefni stækkaðar","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Á grunni spáðra einkunna, er nýja samtalan %{grade}","click_to_test_a_different_score_2e0bb6f0":"Smelltu hér til að prófa aðra einkunn","enter_a_what_if_score_668c91a3":"Færa inn spáða einkunn.","grades_are_now_reverted_to_original_scores_e6deade1":"Einkunnum er nú breytt aftur í upprunaleg stig","grades_are_now_showing_what_if_scores_711a8be2":"Einkunnir sýna nú spáða einkunn","hide_all_details_61d7ebb":"Fela allar upplýsingar","instructor_is_working_on_grades_135388d2":"Kennari vinnur að einkunnum","n_a_d6f6c42f":"Á ekki við","show_all_details_9879980c":"Sýna allar upplýsingar","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Þetta verkefni er fellt niður og verður ekki með í heildarútreikningum","this_is_a_what_if_score_cbdc04f9":"Þetta er spáð einkunn"},"it":{"assignment_details_collapsed_55b67150":"dettagli compito compressi","assignment_details_expanded_20c6f0c7":"dettagli compiti espansi","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"In base ai punteggi What-If, il nuovo totale è ora %{grade}","click_to_test_a_different_score_2e0bb6f0":"Fai clic per testare un punteggio diverso","enter_a_what_if_score_668c91a3":"Inserisci punteggio What-If.","grades_are_now_reverted_to_original_scores_e6deade1":"I voti sono ora ripristinati ai punteggi originali","grades_are_now_showing_what_if_scores_711a8be2":"I voti al momento mostrano punteggi What-If","hide_all_details_61d7ebb":"Nascondi tutti i dettagli","instructor_is_working_on_grades_135388d2":"L\'istruttore sta lavorando sui voti","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Mostra tutti i dettagli","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Questo compito è stato eliminato e non verrà considerato nel calcolo totale","this_is_a_what_if_score_cbdc04f9":"Questo è un punteggio What-If"},"ja":{"assignment_details_collapsed_55b67150":"課題の詳細が表示されない","assignment_details_expanded_20c6f0c7":"課題詳細が拡張されました","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"What-If スコアに基づいた、新しい合計は現在%{grade}","click_to_test_a_different_score_2e0bb6f0":"クリックして、別のスコアをテスト","enter_a_what_if_score_668c91a3":"仮説スコアを入力します。","grades_are_now_reverted_to_original_scores_e6deade1":"成績は現在、元のスコアに戻っています","grades_are_now_showing_what_if_scores_711a8be2":"成績は現在、仮のスコアを表示しています","hide_all_details_61d7ebb":"詳細をすべて非表示","instructor_is_working_on_grades_135388d2":"インストラクタが採点中です","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"詳細をすべて表示","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"この課題は削除されました。合計の計算で考慮されません。","this_is_a_what_if_score_cbdc04f9":"これは what-if (仮の事態を想定した) スコアです"},"ko":{"n_a_d6f6c42f":"해당 없음"},"mi":{"assignment_details_collapsed_55b67150":"I hinga ngā taipitopito whakataunga","assignment_details_expanded_20c6f0c7":"I whakanuia ngā taipitopito whakataunga","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"I runga i te Aha ki te kaute, koinei te katoa hou %{grade}","click_to_test_a_different_score_2e0bb6f0":"Pāwhiritia ki te whakamātau i te kaute rerekē","enter_a_what_if_score_668c91a3":"Whakauru he Ki te aha kaute","grades_are_now_reverted_to_original_scores_e6deade1":"Na e hoki ngā kōeke ki kaute taketake","grades_are_now_showing_what_if_scores_711a8be2":"Kei te whakātu ngā kōeke ināianei te mea-ki te kaute","hide_all_details_61d7ebb":"Huna ngā Taipitopito katoa","instructor_is_working_on_grades_135388d2":"Kei te mahi te Kaitohutohu i runga i ngā kōeke","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Whakāturia Ngā Taipitopito Katoa","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Maturuturu iho ana tēnei whakataunga te a kore e whakaarohia i roto i te tātai katoa","this_is_a_what_if_score_cbdc04f9":"Ko te kaute Aha-Ki tēnei"},"nb":{"assignment_details_collapsed_55b67150":"oppgavedetaljer sammentrukket","assignment_details_expanded_20c6f0c7":"oppgavedetaljer utvidet","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Basert på What-If-resultater, er den nye totalen nå %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klikk for å teste et annet resultat","enter_a_what_if_score_668c91a3":"Skriv inn en Hva-om-vurdering.","grades_are_now_reverted_to_original_scores_e6deade1":"Karakterene er nå satt tilbake til opprinnelig resultat","grades_are_now_showing_what_if_scores_711a8be2":"Karakterene viser nå hva-hvis resultat","hide_all_details_61d7ebb":"Skjul alle detaljer","instructor_is_working_on_grades_135388d2":"Instruktøren arbeider med karakterene","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Vis alle detaljer","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Denne oppgaven er droppet og blir ikke tatt med i beregningen","this_is_a_what_if_score_cbdc04f9":"Dette er et What-if-resultat"},"nb-x-k12":{"assignment_details_collapsed_55b67150":"oppgavedetaljer sammentrukket","assignment_details_expanded_20c6f0c7":"oppgavedetaljer utvidet","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Basert på What-If-resultater, er den nye totalen nå %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klikk for å teste et annet resultat","enter_a_what_if_score_668c91a3":"Skriv inn et Hva-om-resultat.","grades_are_now_reverted_to_original_scores_e6deade1":"Vurderingene er nå satt tilbake til opprinnelig resultat","grades_are_now_showing_what_if_scores_711a8be2":"Vurderingene viser nå hva-hvis resultat","hide_all_details_61d7ebb":"Skjul alle detaljer","instructor_is_working_on_grades_135388d2":"Instruktøren arbeider med vurderingene","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Vis alle detaljer","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Denne oppgaven er droppet og blir ikke tatt med i beregningen","this_is_a_what_if_score_cbdc04f9":"Dette er et What-if-resultat"},"nl":{"assignment_details_collapsed_55b67150":"opdrachtdetails samengevouwen","assignment_details_expanded_20c6f0c7":"opdrachtdetails uitgevouwen","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Op basis van wat-als-scores is het nieuwe totaal nu %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klikken om een andere score te testen","enter_a_what_if_score_668c91a3":"Voer een wat-als-score in.","grades_are_now_reverted_to_original_scores_e6deade1":"Cijfers zijn nu teruggekeerd naar de oorspronkelijke scores","grades_are_now_showing_what_if_scores_711a8be2":"Cijfers tonen nu stel-dat scores","hide_all_details_61d7ebb":"Alle artefacten verbergen","instructor_is_working_on_grades_135388d2":"Cursusleider werkt aan de cijfers","n_a_d6f6c42f":"Niet van toepassing","show_all_details_9879980c":"Alle details tonen","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Deze opdracht is vervallen en wordt niet in overweging genomen voor de totale berekening","this_is_a_what_if_score_cbdc04f9":"Dit is een wat-als-score"},"nn":{"assignment_details_collapsed_55b67150":"oppgåvedetaljar er skjult","assignment_details_expanded_20c6f0c7":"oppgåvedetaljar viser","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Basert på kva-skjer-dersom-resultata, er den nye totalen no %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klikk for å teste eit anna resultat","enter_a_what_if_score_668c91a3":"Oppgi eit kva-skjer-dersom-resultat.","grades_are_now_reverted_to_original_scores_e6deade1":"Vurderingane blir no tilbakestilt til det opphavlege resultatet","grades_are_now_showing_what_if_scores_711a8be2":"Vurderingane viser no kva-skjer-dersom-resultat","hide_all_details_61d7ebb":"Skjul alle detaljar","instructor_is_working_on_grades_135388d2":"Faglærar held på med vurderinga","n_a_d6f6c42f":"Gjeld ikkje","show_all_details_9879980c":"Vis alle detaljar","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Oppgåva er fjerna og er ikkje med i den totale utrekninga","this_is_a_what_if_score_cbdc04f9":"Dette er kva-skjer-dersom-resultat"},"pl":{"assignment_details_collapsed_55b67150":"zwinięto szczegóły materiałów","assignment_details_expanded_20c6f0c7":"rozwinięto szczegóły materiałów","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"W oparciu o wyniki teoretyczne nowa suma to %{grade}","click_to_test_a_different_score_2e0bb6f0":"Kliknij, aby sprawdzić inny wynik punktowy","enter_a_what_if_score_668c91a3":"Wprowadź Prawdopodobny wynik.","grades_are_now_reverted_to_original_scores_e6deade1":"Oceny już powróciły do oryginalnego wyniku punktowego","grades_are_now_showing_what_if_scores_711a8be2":"Oceny teraz wykazują prawdopodobne wyniki punktowe","hide_all_details_61d7ebb":"Ukryj wszystkie informacje szczegółowe","instructor_is_working_on_grades_135388d2":"Instruktor jest w trakcie oceniania","n_a_d6f6c42f":"Brak danych","show_all_details_9879980c":"Pokaż wszystkie informacje szczegółowe","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"To zadanie zostało opuszczone i nie zostanie wliczone w ostateczny wynik","this_is_a_what_if_score_cbdc04f9":"To wynik hipotetyczny"},"pt":{"assignment_details_collapsed_55b67150":"Detalhes da atribuição recolhidos","assignment_details_expanded_20c6f0c7":"Detalhes de atribuição expandidos","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Com base nas pontuações What-If, o novo total está agora %{grade}","click_to_test_a_different_score_2e0bb6f0":"Clique para testar uma pontuação diferente","enter_a_what_if_score_668c91a3":"Inserir pontuação de Hipóteses","grades_are_now_reverted_to_original_scores_e6deade1":"As notas foram revertidas para as classificações originais","grades_are_now_showing_what_if_scores_711a8be2":"As notas apresentam potenciais classiicações","hide_all_details_61d7ebb":"Ocultar todos os detalhes","instructor_is_working_on_grades_135388d2":"O instrutor está a trabalhar nas avaliações","n_a_d6f6c42f":"ND","show_all_details_9879980c":"Exibir todos os detalhes","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Esta tarefa foi cancelada e não será considerada no cálculo total","this_is_a_what_if_score_cbdc04f9":"Esta é uma pontuação \\"e se\\""},"pt-BR":{"assignment_details_collapsed_55b67150":"detalhes da tarefa recolhidos","assignment_details_expanded_20c6f0c7":"detalhes da tarefa ampliados","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Baseado em previsões de pontuações, o novo total agora é %{grade}","click_to_test_a_different_score_2e0bb6f0":"Clique para testar uma pontuação diferente","enter_a_what_if_score_668c91a3":"Insira uma previsão de pontuação.","grades_are_now_reverted_to_original_scores_e6deade1":"Notas está agora revertida para a pontuação original","grades_are_now_showing_what_if_scores_711a8be2":"Notas está agora mostrando a previsão de pontuação","hide_all_details_61d7ebb":"Ocultar todos os detalhes","instructor_is_working_on_grades_135388d2":"O instrutor está trabalhando na avaliação","n_a_d6f6c42f":"N/A","show_all_details_9879980c":"Exibir todos os detalhes","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Esta tarefa foi excluída e não fará parte do cálculo total","this_is_a_what_if_score_cbdc04f9":"Esta é uma previsão de pontuação"},"ru":{"assignment_details_collapsed_55b67150":"подробности задания свернуты","assignment_details_expanded_20c6f0c7":"подробности задания развернуты","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Судя по оценкам в режиме «что, если», новый итог в настоящее время %{grade}","click_to_test_a_different_score_2e0bb6f0":"Щелкните для проверки другой оценки","enter_a_what_if_score_668c91a3":"Введите оценку «что, если».","grades_are_now_reverted_to_original_scores_e6deade1":"Оценки были возвращены к первоначальным баллам","grades_are_now_showing_what_if_scores_711a8be2":"Оценки теперь показывают моделируемые баллы","hide_all_details_61d7ebb":"Скрыть все сведения","instructor_is_working_on_grades_135388d2":"Преподаватель выполняет оценку","n_a_d6f6c42f":"Н/Д","show_all_details_9879980c":"Показать все сведения","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Это задание было пропущено и не будет учитываться в итоговом подсчете","this_is_a_what_if_score_cbdc04f9":"Это оценка в режиме «что, если»"},"sl":{"assignment_details_collapsed_55b67150":"strnjene podrobnosti naloge","assignment_details_expanded_20c6f0c7":"razširjene podrobnosti naloge","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Na podlagi simulacije rezultatov je nova vsota zdaj %{grade}","click_to_test_a_different_score_2e0bb6f0":"Kliknite, da preizkusite drug rezultat.","enter_a_what_if_score_668c91a3":"Vnesite simulacijo rezultatov","grades_are_now_reverted_to_original_scores_e6deade1":"Ocene so zdaj povrnjene na izvirne rezultate.","grades_are_now_showing_what_if_scores_711a8be2":"Ocene zdaj prikazujejo simulacijo rezultatov","hide_all_details_61d7ebb":"Skrij vse podrobnosti","instructor_is_working_on_grades_135388d2":"Učitelj se ukvarja z ocenami.","n_a_d6f6c42f":"Ni na voljo.","show_all_details_9879980c":"Prikaži vse podrobnosti","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Ta naloga je izpuščena in ne bo upoštevana v končnem izračunu.","this_is_a_what_if_score_cbdc04f9":"To je simulirani rezultat"},"sv":{"assignment_details_collapsed_55b67150":"uppgiftsdetaljer stängda","assignment_details_expanded_20c6f0c7":"uppgiftsdetaljer expanderade","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Baserad på tänk om-resultat, är den nya totalsumman nu %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klicka för att testa ett annat resultat","enter_a_what_if_score_668c91a3":"Skriv in tänk om-resultat.","grades_are_now_reverted_to_original_scores_e6deade1":"Omdömen har nu återgått till ursprungliga resultat","grades_are_now_showing_what_if_scores_711a8be2":"Omdömen visar nu tänk om-resultat","hide_all_details_61d7ebb":"Dölj alla detaljer","instructor_is_working_on_grades_135388d2":"En lärare håller på med bedömningarna","n_a_d6f6c42f":"Ej tillämpbart","show_all_details_9879980c":"Visa alla detaljer","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Den här uppgiften har utelämnats och kommer inte att räknas in i den totala uträkningen.","this_is_a_what_if_score_cbdc04f9":"Det här är ett tänk om-resultat"},"sv-x-k12":{"assignment_details_collapsed_55b67150":"uppgiftsdetaljer stängda","assignment_details_expanded_20c6f0c7":"uppgiftsdetaljer expanderade","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"Baserad på tänk om-resultat, är den nya totalsumman nu %{grade}","click_to_test_a_different_score_2e0bb6f0":"Klicka för att testa ett annat resultat","enter_a_what_if_score_668c91a3":"Skriv in tänk om-resultat.","grades_are_now_reverted_to_original_scores_e6deade1":"Omdömen har nu återgått till ursprungliga resultat","grades_are_now_showing_what_if_scores_711a8be2":"Omdömen visar nu tänk om-resultat","hide_all_details_61d7ebb":"Dölj alla detaljer","instructor_is_working_on_grades_135388d2":"En lärare håller på med bedömningarna","n_a_d6f6c42f":"Ej tillämpbart","show_all_details_9879980c":"Visa alla detaljer","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Den här uppgiften har utelämnats och kommer inte att räknas in i den totala uträkningen.","this_is_a_what_if_score_cbdc04f9":"Det här är ett tänk om-resultat"},"tr":{"assignment_details_collapsed_55b67150":"ödev ayrıntılıları daraltıldı","assignment_details_expanded_20c6f0c7":"ödev ayrıntıları genişletildi","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"... olsaydı ne olurdu puanlarına bağlı olarak yeni toplam artık %{grade}","click_to_test_a_different_score_2e0bb6f0":"Farklı bir puanı test etmek için tıklayın","hide_all_details_61d7ebb":"Tüm Ayrıntıları Gizle","n_a_d6f6c42f":"Yok","show_all_details_9879980c":"Tüm Ayrıntıları Göster"},"uk":{"assignment_details_collapsed_55b67150":"Деталі завдання зникли","assignment_details_expanded_20c6f0c7":"Деталі завдання розширено","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"На основі балів що-якщо, новий підсумок зараз становить %{grade}","click_to_test_a_different_score_2e0bb6f0":"Натисніть, щоб перевірити різні оцінки","enter_a_what_if_score_668c91a3":"Введіть оцінку Що-якщо ","grades_are_now_reverted_to_original_scores_e6deade1":"Оцінки зараз повернуті до оригінальних балів","grades_are_now_showing_what_if_scores_711a8be2":"Системи оцінювання зараз відображають можливі бали","hide_all_details_61d7ebb":"Сховати всі подробиці","instructor_is_working_on_grades_135388d2":"Інструктор працює над оцінками","n_a_d6f6c42f":"Недоступно","show_all_details_9879980c":"Показати всі деталі","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"Це завдання відхилено і не буде розглядатися в загальному підрахунку","this_is_a_what_if_score_cbdc04f9":"Це оцінка типу \\"Що-якщо\\""},"zh-Hans":{"assignment_details_collapsed_55b67150":"作业详情已折叠","assignment_details_expanded_20c6f0c7":"作业详情已展开","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"基于假设分数，新总分现在为%{grade}","click_to_test_a_different_score_2e0bb6f0":"单击以测试不同分数","enter_a_what_if_score_668c91a3":"输入假设分数。","grades_are_now_reverted_to_original_scores_e6deade1":"成绩现在已还原为原始得分","grades_are_now_showing_what_if_scores_711a8be2":"成绩现在显示为假设的得分","hide_all_details_61d7ebb":"隐藏所有详细信息","instructor_is_working_on_grades_135388d2":"教师正在进行评分","n_a_d6f6c42f":"不适用","show_all_details_9879980c":"显示全部详情","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"这个作业被丢弃，但不会影响总计算。","this_is_a_what_if_score_cbdc04f9":"这是假设分数"},"zh-Hant":{"assignment_details_collapsed_55b67150":"收起作業詳情","assignment_details_expanded_20c6f0c7":"展開作業詳情","based_on_what_if_scores_the_new_total_is_now_grade_d223be10":"根據『假設分析』分數，新的總分會出現%{grade}","click_to_test_a_different_score_2e0bb6f0":"按一下以測試不同的成績","enter_a_what_if_score_668c91a3":"輸入預期得分。","grades_are_now_reverted_to_original_scores_e6deade1":"成績正在還原至原始分數","grades_are_now_showing_what_if_scores_711a8be2":"成績正在顯示『假設分析』的分數","hide_all_details_61d7ebb":"隱藏所有詳細資料","instructor_is_working_on_grades_135388d2":"導師正在進行評分","n_a_d6f6c42f":"不適用","show_all_details_9879980c":"顯示所有詳細資料","this_assignment_is_dropped_and_will_not_be_conside_35c3e198":"該作業已被取消，不予計入總評分。","this_is_a_what_if_score_cbdc04f9":"这是『假設分析』分数"}}'))
var za=S["default"].scoped("gradingGradeSummary")
var Ga=a("ejBJ")
var Ia=a("HbFp")
var Ta=a("HG9+")
var Aa=a("my6A")
var Pa=a("OgVL")
var Ha=a("vI2V")
var Ma=a("2/9e")
var Na=a("dqQ7")
Object(z["a"])(JSON.parse('{"ar":{"all_grading_periods_77974940":"كل فترات تقييم الدرجات","an_error_occurred_please_try_again_95361e05":"حدث خطأ ما. يرجى إعادة المحاولة.","apply_781a2546":"تطبيق","apply_filters_note_clicking_this_button_will_cause_753f04":"تطبيق عوامل تصفية. ملاحظة: سيؤدي النقر فوق هذا الزر إلى إعادة تحميل الصفحة.","arrange_by_a121617c":"ترتيب حسب","course_8a63b4a3":"المساق","grading_period_8b0a4a10":"فترة تقييم الدرجات","student_5da6bfd1":"الطالب"},"cy":{"all_grading_periods_77974940":"Pob Cyfnod Graddio","an_error_occurred_please_try_again_95361e05":"Gwall. Rhowch gynnig arall arni.","apply_781a2546":"Rhoi ar waith","apply_filters_note_clicking_this_button_will_cause_753f04":"Rhowch hidlyddion ar waith. Nodyn: wrth glicio’r botwm hwn, bydd y dudalen yn ail-lwytho.","arrange_by_a121617c":"Trefnu yn ôl","course_8a63b4a3":"Cwrs","grading_period_8b0a4a10":"Cyfnod Graddio","student_5da6bfd1":"Myfyriwr"},"da":{"all_grading_periods_77974940":"Alle karakterperioder","an_error_occurred_please_try_again_95361e05":"En fejl opstod. Prøv igen.","apply_781a2546":"Tildel","apply_filters_note_clicking_this_button_will_cause_753f04":"Anvend filtre. Bemærk: Ved at klikke på denne knap bliver siden genindlæst.","arrange_by_a121617c":"Organiser efter","course_8a63b4a3":"Fag","grading_period_8b0a4a10":"Karakterperiode","student_5da6bfd1":"Studerende"},"da-x-k12":{"all_grading_periods_77974940":"Alle vurderingsperioder","an_error_occurred_please_try_again_95361e05":"En fejl opstod. Prøv igen.","apply_781a2546":"Tildel","apply_filters_note_clicking_this_button_will_cause_753f04":"Anvend filtre. Bemærk: Ved at klikke på denne knap bliver siden genindlæst.","arrange_by_a121617c":"Organiser efter","course_8a63b4a3":"Fag","grading_period_8b0a4a10":"Vurderingsperiode","student_5da6bfd1":"Elev"},"de":{"all_grading_periods_77974940":"Alle Benotungszeiträume","an_error_occurred_please_try_again_95361e05":"Ein Fehler ist aufgetreten. Bitte versuchen Sie es noch einmal.","apply_781a2546":"Anwenden","apply_filters_note_clicking_this_button_will_cause_753f04":"Filter anwenden.. Hinweis: Mit dieser Schaltfläche wird die Seite erneut geladen.","arrange_by_a121617c":"Anordnen nach","course_8a63b4a3":"Kurs","grading_period_8b0a4a10":"Benotungszeitraum","student_5da6bfd1":"Student"},"el":{"all_grading_periods_77974940":"Όλες οι περίοδοι βαθμολογήσεων","apply_781a2546":"Εφαρμογή","course_8a63b4a3":"Μάθημα","grading_period_8b0a4a10":"Περίδος Βαθμολόγησης","student_5da6bfd1":"Μαθητής "},"en-AU":{"all_grading_periods_77974940":"All Grading Periods","an_error_occurred_please_try_again_95361e05":"An error occurred. Please try again.","apply_781a2546":"Apply","apply_filters_note_clicking_this_button_will_cause_753f04":"Apply filters. Note: clicking this button will cause the page to reload.","arrange_by_a121617c":"Arrange By","course_8a63b4a3":"Course","grading_period_8b0a4a10":"Grading Period","student_5da6bfd1":"Student"},"en-AU-x-unimelb":{"all_grading_periods_77974940":"All Grading Periods","an_error_occurred_please_try_again_95361e05":"An error occurred. Please try again.","apply_781a2546":"Apply","apply_filters_note_clicking_this_button_will_cause_753f04":"Apply filters. Note: clicking this button will cause the page to reload.","arrange_by_a121617c":"Arrange By","course_8a63b4a3":"Subject","grading_period_8b0a4a10":"Grading Period","student_5da6bfd1":"Student"},"en-CA":{"all_grading_periods_77974940":"All Grading Periods","an_error_occurred_please_try_again_95361e05":"An error occurred. Please try again.","apply_781a2546":"Apply","apply_filters_note_clicking_this_button_will_cause_753f04":"Apply filters. Note: clicking this button will cause the page to reload.","arrange_by_a121617c":"Arrange By","course_8a63b4a3":"Course","grading_period_8b0a4a10":"Grading Period","student_5da6bfd1":"Student"},"en-GB":{"all_grading_periods_77974940":"All grading periods","an_error_occurred_please_try_again_95361e05":"An error occurred. Please try again.","apply_781a2546":"Apply","apply_filters_note_clicking_this_button_will_cause_753f04":"Apply filters. Note: clicking this button will cause the page to reload.","arrange_by_a121617c":"Arrange by","course_8a63b4a3":"Course","grading_period_8b0a4a10":"Grading period","student_5da6bfd1":"Student"},"en-GB-x-lbs":{"all_grading_periods_77974940":"All grading periods","an_error_occurred_please_try_again_95361e05":"An error occurred. Please try again.","apply_781a2546":"Apply","apply_filters_note_clicking_this_button_will_cause_753f04":"Apply filters. Note: clicking this button will cause the page to reload.","arrange_by_a121617c":"Arrange by","course_8a63b4a3":"Programme","grading_period_8b0a4a10":"Grading period","student_5da6bfd1":"Student"},"en-GB-x-ukhe":{"all_grading_periods_77974940":"All grading periods","an_error_occurred_please_try_again_95361e05":"An error occurred. Please try again.","apply_781a2546":"Apply","apply_filters_note_clicking_this_button_will_cause_753f04":"Apply filters. Note: clicking this button will cause the page to reload.","arrange_by_a121617c":"Arrange by","course_8a63b4a3":"Module","grading_period_8b0a4a10":"Grading period","student_5da6bfd1":"Student"},"es":{"all_grading_periods_77974940":"Todos los períodos de calificación","an_error_occurred_please_try_again_95361e05":"Ha ocurrido un error. Inténtelo de nuevo.","apply_781a2546":"Aplicar","apply_filters_note_clicking_this_button_will_cause_753f04":"Aplicar filtros. Nota: al hacer clic en este botón, se recargará la página.","arrange_by_a121617c":"Organizar por","course_8a63b4a3":"Curso","grading_period_8b0a4a10":"Período de Calificación","student_5da6bfd1":"Estudiante"},"fa":{"all_grading_periods_77974940":"همه دوره های نمره گذازی","an_error_occurred_please_try_again_95361e05":"یک خطا رخ داد. لطفا دوباره سعی کنید.","apply_781a2546":"اعمال","apply_filters_note_clicking_this_button_will_cause_753f04":"اعمال فیلترها. توجه: با کلیک کردن روی این دکمه، صفحه دوباره بارگذاری می شود.","arrange_by_a121617c":"مرتب سازی بر اساس","course_8a63b4a3":"درس","grading_period_8b0a4a10":"دوره نمره گذاری","student_5da6bfd1":"دانشجو"},"fi":{"all_grading_periods_77974940":"Kaikki arvosanojen antojaksot","an_error_occurred_please_try_again_95361e05":"Tapahtui virhe. Yritä uudelleen.","apply_781a2546":"Käytä","apply_filters_note_clicking_this_button_will_cause_753f04":"Käytä suodattimia. Huomautus: tämän painikeen napsautus aiheuttaa sivun uudelleenlatauksen.","arrange_by_a121617c":"Järjestysperuste","course_8a63b4a3":"Kurssi","grading_period_8b0a4a10":"Arvosanojen antojakso","student_5da6bfd1":"Opiskelija"},"fr":{"all_grading_periods_77974940":"Toutes les périodes de notation","an_error_occurred_please_try_again_95361e05":"Une erreur est survenue. Veuillez réessayer.","apply_781a2546":"Appliquer","apply_filters_note_clicking_this_button_will_cause_753f04":"Appliquer les filtres. Note : cliquer sur ce bouton entraînera le rafraichissement de la page.","arrange_by_a121617c":"Arranger par","course_8a63b4a3":"Le cours","grading_period_8b0a4a10":"Période de notation","student_5da6bfd1":"Étudiant"},"fr-CA":{"all_grading_periods_77974940":"Toutes les périodes de notation","an_error_occurred_please_try_again_95361e05":"Une erreur est survenue. Veuillez réessayer.","apply_781a2546":"Appliquer","apply_filters_note_clicking_this_button_will_cause_753f04":"Appliquer filtres. Remarque : cliquer sur ce bouton déclenche le rechargement de la page.","arrange_by_a121617c":"Trier par","course_8a63b4a3":"Cours","grading_period_8b0a4a10":"Période de notation","student_5da6bfd1":"Étudiant"},"he":{"all_grading_periods_77974940":"כל תקופת חישוב הציונים","an_error_occurred_please_try_again_95361e05":"אירעה שגיאה. נא לנסות שוב.","apply_781a2546":"החל","apply_filters_note_clicking_this_button_will_cause_753f04":"הפעלת מסננים. שימו לב: הקשה על כפתור זה תגרום לטעינת הדף מחדש","arrange_by_a121617c":"סידור לפי","course_8a63b4a3":"קורס","grading_period_8b0a4a10":"תקופת הערכה","student_5da6bfd1":"תלמיד"},"ht":{"all_grading_periods_77974940":"Tout Peryòd Klasman","an_error_occurred_please_try_again_95361e05":"Yon erè fèt. Tanpri eseye ankò.","apply_781a2546":"Aplike","apply_filters_note_clicking_this_button_will_cause_753f04":"Aplike filtè. Nòt: klike sou bouton sa a ap rechaje paj la.","arrange_by_a121617c":"Aranje Pa","course_8a63b4a3":"Kou","grading_period_8b0a4a10":"Peryòd Klasman","student_5da6bfd1":"Elèv"},"hu":{"all_grading_periods_77974940":"Összes osztályzási időszak","apply_781a2546":"Alkalmazás","arrange_by_a121617c":"Rendezés ez alapján","course_8a63b4a3":"Kurzus","grading_period_8b0a4a10":"Osztályzási időszak","student_5da6bfd1":"Hallgató"},"hy":{"all_grading_periods_77974940":"Գնահատման բոլոր ժամանակահատվածները","apply_781a2546":"Կիրառել","course_8a63b4a3":"Դասընթաց","student_5da6bfd1":"Ունկնդիր"},"is":{"all_grading_periods_77974940":"Öll einkunnatímabil","an_error_occurred_please_try_again_95361e05":"Villa kom upp Vinsamlegast reynið aftur.","apply_781a2546":"Virkja","apply_filters_note_clicking_this_button_will_cause_753f04":"Setja upp síur. Ath: síðan endurhleðst ef smellt er á þennan hnapp.","arrange_by_a121617c":"Raða eftir","course_8a63b4a3":"Námskeið","grading_period_8b0a4a10":"Einkunnatímabil","student_5da6bfd1":"Nemandi"},"it":{"all_grading_periods_77974940":"Tutti i periodi di valutazione","an_error_occurred_please_try_again_95361e05":"Si è verificato un errore. Riprova.","apply_781a2546":"Applica","apply_filters_note_clicking_this_button_will_cause_753f04":"Applica filtri. Nota: se fai clic su questo pulsante, la pagina verrà ricaricata.","arrange_by_a121617c":"Disponi per","course_8a63b4a3":"Corso","grading_period_8b0a4a10":"Periodo di valutazione","student_5da6bfd1":"Studente"},"ja":{"all_grading_periods_77974940":"すべての採点期間","an_error_occurred_please_try_again_95361e05":"エラーが発生しました。再度試してください。","apply_781a2546":"適用","apply_filters_note_clicking_this_button_will_cause_753f04":"フィルターを適用する。注：このボタンをクリックすると、ページが再読み込みされます。","arrange_by_a121617c":"～で並べ替え","course_8a63b4a3":"コース","grading_period_8b0a4a10":"採点期間","student_5da6bfd1":"受講生"},"ko":{"apply_781a2546":"적용","student_5da6bfd1":"학생"},"mi":{"all_grading_periods_77974940":"Takiwā kōeke katoa","an_error_occurred_please_try_again_95361e05":"Kua puta tētahi hapa Tēnā koa ngana anō.","apply_781a2546":"Tono","apply_filters_note_clicking_this_button_will_cause_753f04":"Hoatuhia ngā tātari. Tuhipoka: ma te pāwhiri i tēnei pātene ka meinga te whārangi ki te uta anō.","arrange_by_a121617c":"Whakarite e","course_8a63b4a3":"akoranga","grading_period_8b0a4a10":"Wā kōeke","student_5da6bfd1":"Ākonga"},"nb":{"all_grading_periods_77974940":"Alle vurderingsperioder","an_error_occurred_please_try_again_95361e05":"Det oppstod en feil. Vennligst prøv igjen.","apply_781a2546":"Bruk","apply_filters_note_clicking_this_button_will_cause_753f04":"Bruk filtre. Merk: Ved å klikke på denne tasten vil siden bli lastet opp på nytt.","arrange_by_a121617c":"Sorter etter","course_8a63b4a3":"Emne","grading_period_8b0a4a10":"Vurderingsperiode","student_5da6bfd1":"Student"},"nb-x-k12":{"all_grading_periods_77974940":"Alle vurderingsperioder","an_error_occurred_please_try_again_95361e05":"Det oppstod en feil. Vennligst prøv igjen.","apply_781a2546":"Bruk","apply_filters_note_clicking_this_button_will_cause_753f04":"Bruk filtre. Merk: Ved å klikke på denne tasten vil siden bli lastet opp på nytt.","arrange_by_a121617c":"Sorter etter","course_8a63b4a3":"Fag","grading_period_8b0a4a10":"Vurderingsperiode","student_5da6bfd1":"Elev"},"nl":{"all_grading_periods_77974940":"Alle beoordelingsperioden","an_error_occurred_please_try_again_95361e05":"Er is een fout opgetreden. Probeer het opnieuw.","apply_781a2546":"Toepassen","apply_filters_note_clicking_this_button_will_cause_753f04":"Pas filters toe. Opmerking: als je op deze knop klikt, wordt de pagina opnieuw geladen.","arrange_by_a121617c":"Rangschikken op","course_8a63b4a3":"Cursus","grading_period_8b0a4a10":"Beoordelingsperiode","student_5da6bfd1":"Cursist"},"nn":{"all_grading_periods_77974940":"Alle periodar for karaktersetjing","an_error_occurred_please_try_again_95361e05":"Det oppstod ein feil. Prøv på nytt seinare.","apply_781a2546":"Bruk","apply_filters_note_clicking_this_button_will_cause_753f04":"Legg til filter. Merk: ved å klikke på knappen vil sida laste på nytt.","arrange_by_a121617c":"Sorter etter","course_8a63b4a3":"Emne","grading_period_8b0a4a10":"Karaktersetjingsperiode","student_5da6bfd1":"Student"},"pl":{"all_grading_periods_77974940":"Wszystkie okresy oceniania","an_error_occurred_please_try_again_95361e05":"Wystąpił błąd. Spróbuj ponownie.","apply_781a2546":"Zastosuj","apply_filters_note_clicking_this_button_will_cause_753f04":"Zastosuj filtry! Uwaga: kliknięcie tego przycisku spowoduje ponowne wczytanie strony.","arrange_by_a121617c":"Układ","course_8a63b4a3":"Kurs","grading_period_8b0a4a10":"Okres oceniania","student_5da6bfd1":"Uczestnik"},"pt":{"all_grading_periods_77974940":"Todos os períodos de avaliação","an_error_occurred_please_try_again_95361e05":"Um erro ocorreu. É favor tentar novamente.","apply_781a2546":"Aplicar","apply_filters_note_clicking_this_button_will_cause_753f04":"Aplicar filtros. Nota: clicar neste botão fará com que a página seja recarregada.","arrange_by_a121617c":"Organizar por","course_8a63b4a3":"Disciplina","grading_period_8b0a4a10":"Período de classificação","student_5da6bfd1":"Aluno"},"pt-BR":{"all_grading_periods_77974940":"Todos os períodos de avaliação","an_error_occurred_please_try_again_95361e05":"Ocorreu um erro. Por favor, tente novamente.","apply_781a2546":"Aplicar","apply_filters_note_clicking_this_button_will_cause_753f04":"Aplicar filtros. Nota: Clicar nesse botão causará o recarregamento da página.","arrange_by_a121617c":"Ordenar por","course_8a63b4a3":"Curso","grading_period_8b0a4a10":"Período de Pontuação","student_5da6bfd1":"Aluno"},"ru":{"all_grading_periods_77974940":"Все периоды выставления оценок","an_error_occurred_please_try_again_95361e05":"Возникла ошибка. Попробуйте еще раз.","apply_781a2546":"Применить","apply_filters_note_clicking_this_button_will_cause_753f04":"Примените фильтры. Примечание: нажатие этой кнопки приведет к перезагрузке страницы.","arrange_by_a121617c":"Упорядочить по","course_8a63b4a3":"Курс","grading_period_8b0a4a10":"Период оценивания","student_5da6bfd1":"Студент"},"sl":{"all_grading_periods_77974940":"Vsa ocenjevalna obdobja","an_error_occurred_please_try_again_95361e05":"Prišlo je do napake. Poskusite znova.","apply_781a2546":"Uporabi","apply_filters_note_clicking_this_button_will_cause_753f04":"Uporabi filtre Opomba: s klikom tega gumba se bo stran ponovno naložila.","arrange_by_a121617c":"Razvrsti glede na","course_8a63b4a3":"Predmet","grading_period_8b0a4a10":"Ocenjevalno obdobje","student_5da6bfd1":"Študent"},"sv":{"all_grading_periods_77974940":"Alla bedömningsperioder","an_error_occurred_please_try_again_95361e05":"Ett fel uppstod. Försök igen.","apply_781a2546":"Tillämpa","apply_filters_note_clicking_this_button_will_cause_753f04":"Använd filter. Obs! Om du klickar på den här knappen kommer sidan att laddas om.","arrange_by_a121617c":"Sortera efter","course_8a63b4a3":"Kurs","grading_period_8b0a4a10":"Bedömningsperiod","student_5da6bfd1":"Student"},"sv-x-k12":{"all_grading_periods_77974940":"Alla bedömningsperioder","an_error_occurred_please_try_again_95361e05":"Ett fel uppstod. Försök igen.","apply_781a2546":"Tillämpa","apply_filters_note_clicking_this_button_will_cause_753f04":"Använd filter. Obs! Om du klickar på den här knappen kommer sidan att laddas om.","arrange_by_a121617c":"Sortera efter","course_8a63b4a3":"Kurs","grading_period_8b0a4a10":"Bedömningsperiod","student_5da6bfd1":"Elev"},"tr":{"all_grading_periods_77974940":"Tüm Notlandırma Periyotları","an_error_occurred_please_try_again_95361e05":"Hata oluştu. Lütfen tekrar deneyin.","apply_781a2546":"Uygula","apply_filters_note_clicking_this_button_will_cause_753f04":"Filtreleri uygula. Not: bu butona tıkladığınızda sayfa yeniden yüklenecek.","arrange_by_a121617c":"Göre düzenle","course_8a63b4a3":"Ders","grading_period_8b0a4a10":"Notlandırma Periyodu","student_5da6bfd1":"Öğrenci"},"uk":{"all_grading_periods_77974940":"Усі періоди оцінювання","an_error_occurred_please_try_again_95361e05":"Виникла помилка. Будь ласка, спробуйте ще раз.","apply_781a2546":"Застосувати","apply_filters_note_clicking_this_button_will_cause_753f04":"Застосуйте фільтри. Зауваження: натискання на кнопки викличе перевантаження сторінки.","arrange_by_a121617c":"Впорядкувати по","course_8a63b4a3":"Курс","grading_period_8b0a4a10":"Період оцінювання","student_5da6bfd1":"Студент"},"zh-Hans":{"all_grading_periods_77974940":"所有评分时段","an_error_occurred_please_try_again_95361e05":"发生错误。请重试。","apply_781a2546":"应用","apply_filters_note_clicking_this_button_will_cause_753f04":"应用筛选条件。注释：点击此按钮将重载页面。","arrange_by_a121617c":"整理顺序","course_8a63b4a3":"课程","grading_period_8b0a4a10":"评分周期","student_5da6bfd1":"学生"},"zh-Hant":{"all_grading_periods_77974940":"所有評分時段","an_error_occurred_please_try_again_95361e05":"發生了一個錯誤。請重試。","apply_781a2546":"應用","apply_filters_note_clicking_this_button_will_cause_753f04":"應用篩選。注意：點擊此按鈕將導致內容頁重新載入。","arrange_by_a121617c":"排列規則為","course_8a63b4a3":"課程","grading_period_8b0a4a10":"評分時段","student_5da6bfd1":"學生"}}'))
var Ea=S["default"].scoped("grade_summary")
var Ba=a("CTAn")
var Da=a.n(Ba)
function Ra(e){const t=e.options.map(t=>{const a=t[e.textAttribute]
const n=t[e.valueAttribute]
return Object(Qe["a"])("option",{value:n},n,a)})
return Object(Qe["a"])(Da.a,{defaultValue:e.defaultValue,disabled:e.disabled,id:e.id,inline:true,label:e.label,onChange:e.onChange,width:"15rem"},void 0,t)}class La extends Ze.a.Component{constructor(e){super(e)
this.onSelection=(e,t)=>{this.setState({[e]:t.target.value})}
this.onSubmit=()=>{this.setState({processing:true},()=>{this.state.assignmentSortOrder!==this.props.selectedAssignmentSortOrder?this.props.saveAssignmentOrder(this.state.assignmentSortOrder).then(this.reloadPage).catch(e=>{Object(Na["b"])(Ea.t("An error occurred. Please try again."))(e)
this.setState({processing:false})}):this.reloadPage()})}
this.reloadPage=()=>{const e=this.state.courseID,t=this.props.selectedCourseID
const a=this.props.courses.find(e=>e.id===t)
const n=this.props.courses.find(t=>t.id===e)
const s=n.url
const o=this.state.studentID===this.props.currentUserID?"":"/".concat(this.state.studentID)
let r
r=n.gradingPeriodSetId&&a.gradingPeriodSetId===n.gradingPeriodSetId&&this.state.gradingPeriodID?"?grading_period_id=".concat(this.state.gradingPeriodID):""
this.props.goToURL("".concat(s).concat(o).concat(r))}
this.onSelectAssignmentSortOrder=this.onSelection.bind(this,"assignmentSortOrder")
this.onSelectCourse=this.onSelection.bind(this,"courseID")
this.onSelectStudent=this.onSelection.bind(this,"studentID")
this.onSelectGradingPeriod=this.onSelection.bind(this,"gradingPeriodID")
this.state={assignmentSortOrder:e.selectedAssignmentSortOrder,courseID:e.selectedCourseID,gradingPeriodID:e.selectedGradingPeriodID,processing:false,studentID:e.selectedStudentID}}componentDidMount(){this.props.displayPageContent()}anySelectMenuChanged(e){const t={assignmentSortOrder:"selectedAssignmentSortOrder",courseID:"selectedCourseID",gradingPeriodID:"selectedGradingPeriodID",studentID:"selectedStudentID"}
return e.some(e=>this.state[e]!==this.props[t[e]])}gradingPeriodOptions(){return[{id:"0",title:Ea.t("All Grading Periods")}].concat(this.props.gradingPeriods)}noSelectMenuChanged(){return!this.anySelectMenuChanged(["courseID","studentID","gradingPeriodID","assignmentSortOrder"])}render(){return Object(Qe["a"])(st["a"],{alignItems:"end",wrapItems:true,margin:"0 0 small 0"},void 0,Object(Qe["a"])(st["a"].Item,{},void 0,this.props.students.length>1&&Object(Qe["a"])(Ra,{defaultValue:this.props.selectedStudentID,disabled:this.anySelectMenuChanged(["courseID"]),id:"student_select_menu",label:Ea.t("Student"),onChange:this.onSelectStudent,options:this.props.students,textAttribute:"name",valueAttribute:"id"}),this.props.gradingPeriods.length>0&&Object(Qe["a"])(Ra,{defaultValue:this.props.selectedGradingPeriodID,disabled:this.anySelectMenuChanged(["courseID"]),id:"grading_period_select_menu",label:Ea.t("Grading Period"),onChange:this.onSelectGradingPeriod,options:this.gradingPeriodOptions(),textAttribute:"title",valueAttribute:"id"}),this.props.courses.length>1&&Object(Qe["a"])(Ra,{defaultValue:this.props.selectedCourseID,disabled:this.anySelectMenuChanged(["studentID","gradingPeriodID","assignmentSortOrder"]),id:"course_select_menu",label:Ea.t("Course"),onChange:this.onSelectCourse,options:this.props.courses,textAttribute:"nickname",valueAttribute:"id"}),Object(Qe["a"])(Ra,{defaultValue:this.props.selectedAssignmentSortOrder,disabled:this.anySelectMenuChanged(["courseID"]),id:"assignment_sort_order_select_menu",label:Ea.t("Arrange By"),onChange:this.onSelectAssignmentSortOrder,options:this.props.assignmentSortOptions,textAttribute:0,valueAttribute:1})),Object(Qe["a"])(st["a"].Item,{margin:"0 0 0 small"},void 0,Object(Qe["a"])(kt["a"],{disabled:this.state.processing||this.noSelectMenuChanged(),id:"apply_select_menus",onClick:this.onSubmit,type:"submit",size:"medium",variant:"primary"},void 0,Object(Qe["a"])(Zt["a"],{},void 0,Object(Qe["a"])(ot["a"],{},void 0,Ea.t("Apply"))),Object(Qe["a"])(Vt["a"],{},void 0,Ea.t("Apply filters. Note: clicking this button will cause the page to reload.")))))}}La.defaultProps={selectedGradingPeriodID:null}
var Ua=a("nibu")
const Va={getSelectedGradingPeriodId(){const e=ENV.current_grading_period_id
if(!e||"0"===e)return null
return e},getAssignmentId:e=>e.getTemplateData({textValues:["assignment_id"]}).assignment_id,parseScoreText(e,t,a){const n="number"===typeof t?t:null
const s="string"===typeof a?a:"-"
let o=Ia["a"].parse(e)
o=isNaN(o)?n:o
return{numericalValue:o,formattedValue:Ha["a"].formatGrade(o,{defaultValue:s})}},getOriginalScore(e){let t=parseFloat(e.find(".original_points").text())
t=isNaN(t)?null:t
return{numericalValue:t,formattedValue:e.find(".original_score").text()}},onEditWhatIfScore(e,t){e.find(".grade").data("originalValue")||e.find(".grade").data("originalValue",e.find(".grade").html())
const a=e.find(".screenreader-only").clone(true)
e.find(".grade").data("screenreader_link",a)
e.find(".grade").empty().append(s()("#grade_entry"))
e.find(".score_value").hide()
t.text(za.t("Enter a What-If score."))
const n=e.parents(".student_assignment").find(".what_if_score").text()
const o=Va.parseScoreText(n,0,"0")
s()("#grade_entry").val(o.formattedValue).show().focus().select()},onScoreChange(e,t){const a=Va.getOriginalScore(e)
const n=e.find("#grade_entry").val()
let o=Va.parseScoreText(n)
if(null==o.numericalValue){const t=e.find(".what_if_score").text()
o=Va.parseScoreText(t)}null==o.numericalValue&&(o=a)
const r=o.numericalValue!=a.numericalValue
e.find(".what_if_score").text(o.formattedValue)
let i=t.update
if(e.hasClass("dont_update")){i=false
e.removeClass("dont_update")}const _=Va.getAssignmentId(e)
if(i){const t=s.a.replaceTags(s()(".update_submission_url").attr("href"),"assignment_id",_)
const a=r?o.numericalValue:null
s.a.ajaxJSON(t,"PUT",{"submission[student_entered_score]":a},t=>{const a={student_entered_score:t.submission.student_entered_score}
e.fillTemplateData({data:a})},s.a.noop)}s()("#grade_entry").hide().appendTo(s()("body"))
const l=e.find(".grade")
null==o.numericalValue?l.html(l.data("originalValue")):l.html(Object(Sa["a"])(o.formattedValue))
Xa(e)
const c=e.find(".assignment_score")
const d=c.find(".score_teaser")
if(r){c.attr("title","")
d.text(za.t("This is a What-If score"))
const a=s()("#revert_score_template").clone(true).attr("id","").show()
c.find(".score_holder").append(a)
l.addClass("changed")
t.refocus&&setTimeout(()=>{e.find(".revert_score_link").focus()},0)}else{qa(e)
c.attr("title",za.t("Click to test a different score"))
l.removeClass("changed")
e.find(".revert_score_link").remove()
t.refocus&&setTimeout(()=>{e.find(".grade").focus()},0)}if(!r){const t=e.find(".grade").data("screenreader_link")
e.find(".grade").prepend(t)}Va.updateScoreForAssignment(_,o.numericalValue)
Va.updateStudentGrades()},onScoreRevert(e,t){const a=e.find(".assignment_score")
const n=a.find(".grade")
const s=Object(Ne["a"])({refocus:true,skipEval:false},t)
const o=Va.getOriginalScore(e)
let r
null==o.numericalValue&&(o.formattedValue=Va.parseScoreText(null).formattedValue)
if(e.data("muted")){r=za.t("Instructor is working on grades")
const e=ENV.post_policies_enabled?"icon-off":"icon-muted muted_icon"
n.html('<i class="'.concat(e,'" aria-hidden="true" title="').concat(r,'"=></i>'))}else{r=za.t("Click to test a different score")
n.text(o.formattedValue)}qa(e)
e.find(".what_if_score").text(o.formattedValue)
e.find(".revert_score_link").remove()
e.find(".score_value").text(o.formattedValue)
a.attr("title",r)
n.removeClass("changed")
const i=e.getTemplateValue("assignment_id")
Va.updateScoreForAssignment(i,o.numericalValue)
s.skipEval||Va.updateStudentGrades()
const _=e.find(".grade").data("screenreader_link")
n.prepend(_)
s.refocus&&setTimeout(()=>{e.find(".grade").focus()},0)}}
function Xa(e){const t=e.find(".grade")
let a
let n
a=t.find(".tooltip_wrap right")
if(0===a.length){a=s()('<span class="tooltip_wrap right"></span>')
t.append(a)
n=a.find(".tooltip_text score_teaser")
if(0===n.length){n=s()('<span class="tooltip_text score_teaser"></span>')
a.append(n)}}}function qa(e){let t
t=e.data("muted")?za.t("Instructor is working on grades"):za.t("Click to test a different score")
Xa(e)
const a=e.find(".tooltip_text.score_teaser")
a.text(t)}function Wa(){if(ENV.grading_period_set)return Oa["a"].deserializeSet(ENV.grading_period_set)
return null}function Fa(){let e
e=ENV.effective_due_dates&&ENV.grading_period_set?Ta["a"].calculate(ENV.submissions,ENV.assignment_groups,ENV.group_weighting_scheme,Wa(),Object(Aa["a"])(ENV.effective_due_dates,ENV.student_id)):Ta["a"].calculate(ENV.submissions,ENV.assignment_groups,ENV.group_weighting_scheme)
const t=Va.getSelectedGradingPeriodId()
if(t)return e.gradingPeriods[t]
return e}function Ja(e,t){return t>0&&!isNaN(e)}function Ka(e,t){const a=Object(Ua["c"])(e,t)
return Object(Ga["a"])(a,Ga["a"].DEFAULT)}function Qa(e){return za.n(e,{percentage:true})}function Ya(e,t){if(Ja(e,t))return Qa(Ka(e,t))
return za.t("N/A")}function Za(){const e=ENV.grading_period_set
const t=Va.getSelectedGradingPeriodId()
return(!t||0===t)&&e&&e.weighted}function $a(e,t,a){const n=[]
let s
s=e?{bins:ENV.grading_periods,grades:t.gradingPeriods,elementIdPrefix:"#submission_period"}:{bins:ENV.assignment_groups,grades:t.assignmentGroups,elementIdPrefix:"#submission_group"}
if(s.grades)for(let e=0;e<s.bins.length;e++){const t=s.bins[e].id
let o=s.grades[t]
o=o?o[a]:{score:0,possible:0}
const r=za.n(o.score,{precision:Ga["a"].DEFAULT})
const i=za.n(o.possible,{precision:Ga["a"].DEFAULT})
const _={teaserText:"".concat(r," / ").concat(i),gradeText:Ya(o.score,o.possible),rowElementId:"".concat(s.elementIdPrefix,"-").concat(t)}
n.push(_)}return n}function en(e,t){if("percent"===e)return""
const a=Va.getSelectedGradingPeriodId()
const n=Wa()
if(null==a&&n&&n.weighted)return""
return t}function tn(e,t,a){const n=s()(".grade.changed").length>0
const o=ENV.show_total_grade_as_points
const r=$a(Za(),e,t)
for(let e=0;e<r.length;e++){const t=s()(r[e].rowElementId)
t.find(".grade").text(r[e].gradeText)
t.find(".score_teaser").text(r[e].teaserText)
t.find(".points_possible").text(r[e].teaserText)}const i=e[t].score
const _=e[t].possible
const l="".concat(za.n(i,{precision:Ga["a"].DEFAULT})," / ").concat(za.n(_,{precision:Ga["a"].DEFAULT}))
const c=Ya(i,_)
let d
let u
if(an()){const e=nn()?ENV.effective_final_score:Ka(i,_)
const t=Object(Pa["d"])(e,ENV.grading_scheme)
s()(".final_grade .letter_grade").text(t)}if(!n&&nn()){d=Qa(ENV.effective_final_score)
u=l}else if(o&&"percent"!==a){d=l
u=c}else{d=c
u=l}const p=s()(".student_assignment.final_grade")
p.find(".grade").text(d)
p.find(".score_teaser").text(u)
const m=en(a,l)
p.find(".points_possible").text(m)
"percent"===a&&p.find(".score_teaser").hide()
if(n){const e=za.t("Based on What-If scores, the new total is now %{grade}",{grade:d})
s.a.screenReaderFlashMessageExclusive(e)}s()(".revert_all_scores").showIf(s()("#grades_summary .revert_score_link").length>0)}function an(){return s()(".final_grade .letter_grade").length>0&&ENV.grading_scheme}function nn(){return null!=ENV.effective_final_score}function sn(){const e=za.t("This assignment is dropped and will not be considered in the total calculation")
const t=s()("#only_consider_graded_assignments").attr("checked")
const a=t?"current":"final"
const n=ENV.group_weighting_scheme
const o=!ENV.exclude_total
const r=Fa()
s()(".dropped").attr("aria-label","")
s()(".dropped").attr("title","")
s()(".student_assignment").find(".points_possible").attr("aria-label","")
l.a.forEach(r.assignmentGroups,e=>{l.a.forEach(e[a].submissions,e=>{s()("#submission_".concat(e.submission.assignment_id)).toggleClass("dropped",!!e.drop)})})
s()(".dropped").attr("aria-label",e)
s()(".dropped").attr("title",e)
o&&tn(r,a,n)}function on(e,t){const a=l.a.find(ENV.submissions,t=>"".concat(t.assignment_id)==="".concat(e))
a?a.score=t:ENV.submissions.push({assignment_id:e,score:t})}function rn(e){s()("#show_all_details_button").click(t=>{t.preventDefault()
const a=s()("#show_all_details_button")
a.toggleClass("showAll")
if(a.hasClass("showAll")){a.text(za.t("Hide All Details"))
s()("tr.student_assignment.editable").each((function(){const e=s()(this).getTemplateValue("assignment_id")
const t=s()(this).data("muted")
if(!t){s()("#comments_thread_".concat(e)).show()
s()("#rubric_".concat(e)).show()
s()("#grade_info_".concat(e)).show()
s()("#final_grade_info_".concat(e)).show()}}))
e.text(za.t("assignment details expanded"))}else{a.text(za.t("Show All Details"))
s()("tr.rubric_assessments").hide()
s()("tr.comments").hide()
e.text(za.t("assignment details collapsed"))}})}function _n(){document.getElementById("grade-summary-content").style.display=""
document.getElementById("student-grades-right-content").style.display=""}function ln(e){window.location.href=e}function cn(e){return ja["a"].post(ENV.save_assignment_order_url,{assignment_order:e})}function dn(){return ENV.courses_with_grades.map(e=>Object(Ca["a"])(e))}function un(){return{assignmentSortOptions:ENV.assignment_sort_options,courses:dn(),currentUserID:ENV.current_user.id,displayPageContent:_n,goToURL:ln,gradingPeriods:ENV.grading_periods||[],saveAssignmentOrder:cn,selectedAssignmentSortOrder:ENV.current_assignment_sort_order,selectedCourseID:ENV.context_asset_string.match(/.*_(\d+)$/)[1],selectedGradingPeriodID:ENV.current_grading_period_id,selectedStudentID:ENV.student_id,students:ENV.students}}function pn(){et.a.render(Ze.a.createElement(La,Va.getSelectMenuGroupProps()),document.getElementById("GradeSummarySelectMenuGroup"))}function mn(){s()(document).ready((function(){Va.updateStudentGrades()
const e=s()(this).find("#student-grades-whatif button")
const t=s()(this).find("#revert-all-to-actual-score")
const a=s()(this).find("#aria-announcer")
s()(".revert_all_scores_link").click(t=>{t.preventDefault()
s()("#grades_summary .revert_score_link").each((function(){s()(this).trigger("click",{skipEval:true,refocus:false})}))
s()("#.show_guess_grades.exists").show()
Va.updateStudentGrades()
e.focus()
s.a.screenReaderFlashMessageExclusive(za.t("Grades are now reverted to original scores"))})
s()(".toggle_comments_link, .toggle_score_details_link, .toggle_rubric_assessments_link, .toggle_final_grade_info").click((function(e){e.preventDefault()
const t=s()("#".concat(s()(this).attr("aria-controls")))
const a=this
s()(a).attr("aria-expanded","none"===t.css("display"))
t.toggle()
"none"!==t.css("display")&&t.find(".screenreader-toggle").focus()}))
s()(".screenreader-toggle").click((function(e){e.preventDefault()
const t=s()(this).data("aria")
const a=s()("a[aria-controls='".concat(t,"']"))
s()(a).attr("aria-expanded",false)
s()(a).focus()
s()(this).closest(".rubric_assessments, .comments").hide()}))
function n(e){if("click"===e.type||13===e.keyCode){if(0===s()("#grades_summary.editable").length||s()(this).find("#grade_entry").length>0||s()(e.target).closest(".revert_score_link").length>0)return
Va.onEditWhatIfScore(s()(this),a)}}s()(".student_assignment.editable .assignment_score").on("click keypress",n)
s()("#grade_entry").keydown((function(e){if(13===e.keyCode){a.text("")
s()(this)[0].blur()}else if(27===e.keyCode){a.text("")
const e=s()(this).parents(".student_assignment").addClass("dont_update").find(".original_score").text()
s()(this).val(e||"")[0].blur()}}))
s()("#grades_summary .student_assignment").bind("score_change",(function(e,t){Va.onScoreChange(s()(this),t)}))
s()("#grade_entry").blur((function(){const e=s()(this).parents(".student_assignment")
e.triggerHandler("score_change",{update:true,refocus:true})}))
s()("#grades_summary").delegate(".revert_score_link","click",(function(e,t){e.preventDefault()
e.stopPropagation()
Va.onScoreRevert(s()(this).parents(".student_assignment"),t)}))
s()("#grades_summary:not(.editable) .assignment_score").css("cursor","default")
s()("#grades_summary tr").hover((function(){s()(this).find("th.title .context").addClass("context_hover")}),(function(){s()(this).find("th.title .context").removeClass("context_hover")}))
s()(".show_guess_grades_link").click(()=>{s()("#grades_summary .student_entered_score").each((function(){const e=Va.parseScoreText(s()(this).text())
if(null!=e.numericalValue){const t=s()(this).parents(".student_assignment")
t.find(".what_if_score").text(e.formattedValue)
t.find(".score_value").hide()
t.triggerHandler("score_change",{update:false,refocus:false})}}))
s()(".show_guess_grades").hide()
t.focus()
s.a.screenReaderFlashMessageExclusive(za.t("Grades are now showing what-if scores"))})
s()("#grades_summary .student_entered_score").each((function(){const e=Va.parseScoreText(s()(this).text())
null!=e.numericalValue&&s()(".show_guess_grades").show().addClass("exists")}))
s()(".comments .play_comment_link").mediaCommentThumbnail("normal")
s()(".play_comment_link").live("click",(function(e){e.preventDefault()
const t=s()(this).parents(".comment_media")
const a=t.getTemplateData({textValues:["media_comment_id"]}).media_comment_id
if(a){let e="any"
s()(this).hasClass("video_comment")?e="video":s()(this).hasClass("audio_comment")&&(e="audio")
t.children(":not(.media_comment_content)").remove()
t.find(".media_comment_content").mediaComment("show_inline",a,e)}}))
s()("#only_consider_graded_assignments").change(()=>{Va.updateStudentGrades()}).triggerHandler("change")
rn(a)
Ma["a"].renderPills()}))}var fn=l.a.extend(Va,{setup:mn,getGradingPeriodSet:Wa,canBeConvertedToGrade:Ja,calculateGrade:Ya,calculateGrades:Fa,calculateTotals:tn,calculateSubtotals:$a,calculatePercentGrade:Ka,finalGradePointsPossibleText:en,formatPercentGrade:Qa,getSelectMenuGroupProps:un,renderSelectMenuGroup:pn,updateScoreForAssignment:on,updateStudentGrades:sn})
a("Sv6n")
a("vpJZ")
fn.setup()
class gn extends r.a.Router{initialize(){if(!ENV.student_outcome_gradebook_enabled)return
s()("#content").tabs({activate:this.activate})
const e=ENV.context_asset_string.replace("course_","")
const t=ENV.student_id
if(ENV.gradebook_non_scoring_rubrics_enabled)this.outcomeView=new xa({el:s()("#outcomes"),course_id:e,student_id:t})
else{this.outcomes=new C([],{course_id:e,user_id:t})
this.outcomeView=new Ke({el:s()("#outcomes"),collection:this.outcomes,toggles:s()(".outcome-toggles")})}}tab(e,t){"outcomes"!==e&&"assignments"!==e&&(e=i["a"].contextGet("grade_summary_tab")||"assignments")
s()("a[href='#".concat(e,"']")).click()
if("outcomes"===e){if(!this.outcomeView)return
this.outcomeView.show(t)
s()(".outcome-toggles").show()}else s()(".outcome-toggles").hide()}activate(e,t){const a=t.newPanel.attr("id")
hn.navigate("#tab-".concat(a),{trigger:true})
return i["a"].contextSet("grade_summary_tab",a)}}gn.prototype.routes={"":"tab","tab-:route(/*path)":"tab"}
let hn
s()(()=>{fn.renderSelectMenuGroup()
hn=new gn
r.a.history.start()})},"08kA":function(e,t,a){"use strict"
var n=a("s4NR"),s=a("CxY0"),o=a("U6jy")
function r(e){return e&&e.rel}function i(e,t){function a(a){e[a]=o(t,{rel:a})}t.rel.split(/\s+/).forEach(a)
return e}function _(e,t){var a=t.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
a&&(e[a[1]]=a[2])
return e}function l(e){try{var t=e.match(/<?([^>]*)>(.*)/),a=t[1],r=t[2].split(";"),i=s.parse(a),l=n.parse(i.query)
r.shift()
var c=r.reduce(_,{})
c=o(l,c)
c.url=a
return c}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(l).filter(r).reduce(i,{})}},"2/9e":function(e,t,a){"use strict"
var n=a("An8g")
a("q1tI")
var s=a("i8i4")
var o=a.n(s)
var r=a("bwhI")
var i=a("pQTu")
var _=a("m0r6")
Object(_["a"])(JSON.parse('{"ar":{"late_8bd684b6":"متأخر","missing_d59852a7":"مفقود"},"cy":{"late_8bd684b6":"yn hwyr","missing_d59852a7":"ar goll"},"da":{"late_8bd684b6":"sen","missing_d59852a7":"mangler"},"da-x-k12":{"late_8bd684b6":"sen","missing_d59852a7":"mangler"},"de":{"late_8bd684b6":"verspätet","missing_d59852a7":"fehlt"},"en-AU":{"late_8bd684b6":"late","missing_d59852a7":"missing"},"en-AU-x-unimelb":{"late_8bd684b6":"late","missing_d59852a7":"missing"},"en-CA":{"late_8bd684b6":"late","missing_d59852a7":"missing"},"en-GB":{"late_8bd684b6":"late","missing_d59852a7":"missing"},"en-GB-x-lbs":{"late_8bd684b6":"late","missing_d59852a7":"missing"},"en-GB-x-ukhe":{"late_8bd684b6":"late","missing_d59852a7":"missing"},"es":{"late_8bd684b6":"con atraso","missing_d59852a7":"faltante"},"fa":{"late_8bd684b6":"با تأخیر","missing_d59852a7":"از دست رفته"},"fi":{"late_8bd684b6":"myöhässä","missing_d59852a7":"puuttuu"},"fr":{"late_8bd684b6":"En retard","missing_d59852a7":"manquant"},"fr-CA":{"late_8bd684b6":"en retard","missing_d59852a7":"manquant"},"he":{"late_8bd684b6":"מאוחר","missing_d59852a7":"חסר"},"ht":{"late_8bd684b6":"an reta","missing_d59852a7":"manke"},"hu":{"late_8bd684b6":"késői","missing_d59852a7":"hiányzó"},"is":{"late_8bd684b6":"seint","missing_d59852a7":"vantar"},"it":{"late_8bd684b6":"in ritardo","missing_d59852a7":"mancante"},"ja":{"late_8bd684b6":"遅延","missing_d59852a7":"欠如"},"mi":{"late_8bd684b6":"Tōmuri","missing_d59852a7":"ngaro"},"nb":{"late_8bd684b6":"sen","missing_d59852a7":"mangler"},"nb-x-k12":{"late_8bd684b6":"sen","missing_d59852a7":"mangler"},"nl":{"late_8bd684b6":"te laat","missing_d59852a7":"ontbreekt"},"nn":{"late_8bd684b6":"for sein","missing_d59852a7":"manglar"},"pl":{"late_8bd684b6":"po czasie","missing_d59852a7":"brak"},"pt":{"late_8bd684b6":"atrasada","missing_d59852a7":"em falta"},"pt-BR":{"late_8bd684b6":"atrasado","missing_d59852a7":"em falta"},"ru":{"late_8bd684b6":"поздно","missing_d59852a7":"отсутствует"},"sl":{"late_8bd684b6":"zamuda","missing_d59852a7":"manjkajoče"},"sv":{"late_8bd684b6":"sena","missing_d59852a7":"saknas"},"sv-x-k12":{"late_8bd684b6":"sena","missing_d59852a7":"saknas"},"uk":{"late_8bd684b6":"пізно","missing_d59852a7":"відсутній"},"zh-Hans":{"late_8bd684b6":"迟交","missing_d59852a7":"缺失"},"zh-Hant":{"late_8bd684b6":"逾期","missing_d59852a7":"缺失"}}'))
a("jQeR")
a("0sPK")
var l=i["default"].scoped("gradingStatusPill")
function c(e,t){for(let a=0;a<e.length;a+=1)t(e[a])}t["a"]={renderPills(){const e=document.querySelectorAll(".submission-missing-pill")
const t=document.querySelectorAll(".submission-late-pill")
c(e,e=>{o.a.render(Object(n["a"])(r["a"],{variant:"danger",text:l.t("missing")}),e)})
c(t,e=>{o.a.render(Object(n["a"])(r["a"],{variant:"danger",text:l.t("late")}),e)})}}},"3lb9":function(e,t,a){"use strict"
a.d(t,"a",(function(){return p}))
var n=a("VTBJ")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("hPGw")
var u=c.a.createElement("path",{d:"M960 1920C429.807 1920 0 1490.193 0 960S429.807 0 960 0s960 429.807 960 960-429.807 960-960 960zm0-101.053c474.384 0 858.947-384.563 858.947-858.947S1434.384 101.053 960 101.053 101.053 485.616 101.053 960 485.616 1818.947 960 1818.947zM917.926 727.848c-85.075 39.632-157.432 107.975-229.844 207.898-10.327 14.249-10.744 22.907-.135 30.565 7.458 5.384 11.792 3.662 22.656-7.928 1.453-1.562 1.453-1.562 2.94-3.174 9.391-10.17 16.956-18.8 33.115-37.565 53.392-62.005 79.472-87.526 120.003-110.867 35.075-20.198 65.9 9.485 60.03 47.471-1.647 10.664-4.483 18.534-11.791 35.432-2.907 6.722-4.133 9.646-5.496 13.23-13.173 34.63-24.269 63.518-47.519 123.85l-1.112 2.886c-7.03 18.242-7.03 18.242-14.053 36.48-30.45 79.138-48.927 127.666-67.991 178.988l-1.118 3.008a10180.575 10180.575 0 0 0-10.189 27.469c-21.844 59.238-34.337 97.729-43.838 138.668-1.484 6.37-1.484 6.37-2.988 12.845-5.353 23.158-8.218 38.081-9.82 53.42-2.77 26.522-.543 48.24 7.792 66.493 9.432 20.655 29.697 35.43 52.819 38.786 38.518 5.592 75.683 5.194 107.515-2.048 17.914-4.073 35.638-9.405 53.03-15.942 50.352-18.932 98.861-48.472 145.846-87.52 41.11-34.26 80.008-76 120.788-127.872 3.555-4.492 3.555-4.492 7.098-8.976 12.318-15.707 18.352-25.908 20.605-36.683 2.45-11.698-7.439-23.554-15.343-19.587-3.907 1.96-7.993 6.018-14.22 13.872-4.454 5.715-6.875 8.77-9.298 11.514-9.671 10.95-19.883 22.157-30.947 33.998-18.241 19.513-36.775 38.608-63.656 65.789-13.69 13.844-30.908 25.947-49.42 35.046-29.63 14.559-56.358-3.792-53.148-36.635 2.118-21.681 7.37-44.096 15.224-65.767 17.156-47.367 31.183-85.659 62.216-170.048 13.459-36.6 19.27-52.41 26.528-72.201 21.518-58.652 38.696-105.868 55.04-151.425 20.19-56.275 31.596-98.224 36.877-141.543 3.987-32.673-5.103-63.922-25.834-85.405-22.986-23.816-55.68-34.787-96.399-34.305-45.053.535-97.607 15.256-145.963 37.783zm308.381-388.422c-80.963-31.5-178.114 22.616-194.382 108.33-11.795 62.124 11.412 115.76 58.78 138.225 93.898 44.531 206.587-26.823 206.592-130.826.005-57.855-24.705-97.718-70.99-115.729z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconInfo",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconInfoLine"
return t}(l["Component"])
p.glyphName="info"
p.variant="Line"
p.propTypes=Object(n["a"])({},d["a"].propTypes)},"4fRq":function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)
if(a){var n=new Uint8Array(16)
e.exports=function(){a(n)
return n}}else{var s=new Array(16)
e.exports=function(){for(var e,t=0;t<16;t++){0===(3&t)&&(e=4294967296*Math.random())
s[t]=e>>>((3&t)<<3)&255}return s}}},"5JRF":function(e,t,a){"use strict"
var n=a("rePB")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("17x9")
var u=a.n(d)
var p=a("TSYQ")
var m=a.n(p)
var f=a("J2CL")
var g=a("nAyT")
var h=a("KgFQ")
var b=a("jtGx")
var y=a("VTBJ")
function v(e){var t=e.typography,a=e.colors,n=e.spacing
return Object(y["a"])({},t,{primaryInverseColor:a.textLightest,primaryColor:a.textDarkest,secondaryColor:a.textDark,secondaryInverseColor:a.textLight,warningColor:a.textWarning,brandColor:a.textBrand,errorColor:a.textDanger,successColor:a.textSuccess,alertColor:a.textAlert,paragraphMargin:"".concat(n.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
a.d(t,"a",(function(){return S}))
var k,w,x,j,C
var O={componentId:"cjUyb",template:function(e){return"\n\n.cjUyb_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.cjUyb_bGBk sub,.cjUyb_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.cjUyb_bGBk sup{top:-0.4em}\n\n.cjUyb_bGBk sub{bottom:-0.4em}\n\n.cjUyb_bGBk code,.cjUyb_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.cjUyb_bGBk em,.cjUyb_bGBk i{font-style:italic}\n\n.cjUyb_bGBk b,.cjUyb_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.cjUyb_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.cjUyb_bGBk[type]{text-align:left}\n\n[dir=rtl] input.cjUyb_bGBk[type]{text-align:right}\n\n.cjUyb_bGBk:focus,input.cjUyb_bGBk[type]:focus{outline:none}\n\n.cjUyb_bGBk.cjUyb_qFsi,input.cjUyb_bGBk[type].cjUyb_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bLsb,input.cjUyb_bGBk[type].cjUyb_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ezBQ,input.cjUyb_bGBk[type].cjUyb_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dlnd,input.cjUyb_bGBk[type].cjUyb_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cJLh,input.cjUyb_bGBk[type].cjUyb_cJLh{color:").concat(e.successColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fpfC,input.cjUyb_bGBk[type].cjUyb_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eHcp,input.cjUyb_bGBk[type].cjUyb_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dwua,input.cjUyb_bGBk[type].cjUyb_dwua{color:").concat(e.errorColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eZgl,input.cjUyb_bGBk[type].cjUyb_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fbNi,input.cjUyb_bGBk[type].cjUyb_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.cjUyb_bGBk.cjUyb_drST,input.cjUyb_bGBk[type].cjUyb_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_pEgL,input.cjUyb_bGBk[type].cjUyb_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bdMA,input.cjUyb_bGBk[type].cjUyb_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ijuF,input.cjUyb_bGBk[type].cjUyb_ijuF{font-style:normal}\n\n.cjUyb_bGBk.cjUyb_fetN,input.cjUyb_bGBk[type].cjUyb_fetN{font-style:italic}\n\n.cjUyb_bGBk.cjUyb_dfBC,input.cjUyb_bGBk[type].cjUyb_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_doqw,input.cjUyb_bGBk[type].cjUyb_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.cjUyb_bGBk.cjUyb_ycrn,input.cjUyb_bGBk[type].cjUyb_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.cjUyb_bGBk.cjUyb_cMDj,input.cjUyb_bGBk[type].cjUyb_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eoMd,input.cjUyb_bGBk[type].cjUyb_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fdca,input.cjUyb_bGBk[type].cjUyb_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fEWX,input.cjUyb_bGBk[type].cjUyb_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.cjUyb_bGBk.cjUyb_fNIu,input.cjUyb_bGBk[type].cjUyb_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.cjUyb_bGBk.cjUyb_dfDs,input.cjUyb_bGBk[type].cjUyb_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bDjL,input.cjUyb_bGBk[type].cjUyb_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.cjUyb_bGBk.cjUyb_eQnG,input.cjUyb_bGBk[type].cjUyb_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bbUA,input.cjUyb_bGBk[type].cjUyb_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.cjUyb_bGBk.cjUyb_bRWU,input.cjUyb_bGBk[type].cjUyb_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.cjUyb_bGBk.cjUyb_wZsr,input.cjUyb_bGBk[type].cjUyb_wZsr{text-transform:none}\n\n.cjUyb_bGBk.cjUyb_fCZK,input.cjUyb_bGBk[type].cjUyb_fCZK{text-transform:capitalize}\n\n.cjUyb_bGBk.cjUyb_dsRi,input.cjUyb_bGBk[type].cjUyb_dsRi{text-transform:uppercase}\n\n.cjUyb_bGBk.cjUyb_bLtD,input.cjUyb_bGBk[type].cjUyb_bLtD{text-transform:lowercase}")},root:"cjUyb_bGBk","color-primary":"cjUyb_qFsi","color-secondary":"cjUyb_bLsb","color-primary-inverse":"cjUyb_ezBQ","color-secondary-inverse":"cjUyb_dlnd","color-success":"cjUyb_cJLh","color-brand":"cjUyb_fpfC","color-warning":"cjUyb_eHcp","color-error":"cjUyb_dwua","color-alert":"cjUyb_eZgl","wrap-break-word":"cjUyb_fbNi","weight-normal":"cjUyb_drST","weight-light":"cjUyb_pEgL","weight-bold":"cjUyb_bdMA","style-normal":"cjUyb_ijuF","style-italic":"cjUyb_fetN","x-small":"cjUyb_dfBC",small:"cjUyb_doqw",medium:"cjUyb_ycrn",large:"cjUyb_cMDj","x-large":"cjUyb_eoMd","xx-large":"cjUyb_fdca","lineHeight-default":"cjUyb_fEWX","lineHeight-fit":"cjUyb_fNIu","lineHeight-condensed":"cjUyb_dfDs","lineHeight-double":"cjUyb_bDjL","letterSpacing-normal":"cjUyb_eQnG","letterSpacing-condensed":"cjUyb_bbUA","letterSpacing-expanded":"cjUyb_bRWU","transform-none":"cjUyb_wZsr","transform-capitalize":"cjUyb_fCZK","transform-uppercase":"cjUyb_dsRi","transform-lowercase":"cjUyb_bLtD"}
var S=(k=Object(g["a"])("7.0.0",null,"Use Text from ui-text instead."),w=Object(f["themeable"])(v,O),k(x=w(x=(C=j=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e
var a=this.props,s=a.wrap,o=a.weight,r=a.fontStyle,i=a.size,_=a.lineHeight,l=a.letterSpacing,d=a.transform,u=a.color,p=a.children
var f=Object(h["a"])(t,this.props)
return c.a.createElement(f,Object.assign({},Object(b["a"])(this.props,t.propTypes),{className:m()((e={},Object(n["a"])(e,O.root,true),Object(n["a"])(e,O[i],i),Object(n["a"])(e,O["wrap-".concat(s)],s),Object(n["a"])(e,O["weight-".concat(o)],o),Object(n["a"])(e,O["style-".concat(r)],r),Object(n["a"])(e,O["transform-".concat(d)],d),Object(n["a"])(e,O["lineHeight-".concat(_)],_),Object(n["a"])(e,O["letterSpacing-".concat(l)],l),Object(n["a"])(e,O["color-".concat(u)],u),e)),ref:this.props.elementRef}),p)}}])
t.displayName="Text"
return t}(l["Component"]),j.propTypes={as:u.a.elementType,wrap:u.a.oneOf(["normal","break-word"]),weight:u.a.oneOf(["normal","light","bold"]),fontStyle:u.a.oneOf(["italic","normal"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),color:u.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand"]),children:u.a.node,elementRef:u.a.func},j.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},C))||x)||x)},"5nFh":function(e,t,a){"use strict"
a.d(t,"a",(function(){return g}))
var n=a("VTBJ")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a("17x9")
var d=a.n(c)
var u=a("cClk")
var p=a("BTe1")
var m=a("9yTY")
var f=function(e){var t=e.expanded
return{expanded:!t}}
var g=function(e){Object(_["a"])(t,e)
function t(e){var a
Object(s["a"])(this,t)
a=Object(r["a"])(this,Object(i["a"])(t).call(this))
a.handleToggle=function(e){a.isControlled()||a.setState(f)
a.props.onToggle(e,!a.expanded)}
a.state={expanded:a.isControlled(e)?e.expanded:!!e.defaultExpanded}
a._contentId=Object(p["a"])("Expandable__content")
return a}Object(o["a"])(t,[{key:"isControlled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props
return"boolean"===typeof e.expanded}},{key:"componentWillReceiveProps",value:function(e){this.isControlled()&&!this.isControlled(e)&&this.props.expanded!==this.state.expanded&&this.setState(f)}},{key:"render",value:function(){var e=this
var t=this.props,a=t.children,s=t.render,o=void 0===s?a:s
return"function"===typeof o?o({expanded:this.expanded,getToggleProps:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object(n["a"])({"aria-controls":e._contentId,"aria-expanded":e.expanded,onClick:Object(m["a"])(e.handleToggle,t.onClick)},t)},getDetailsProps:function(t){return{id:e._contentId}}}):null}},{key:"expanded",get:function(){return this.isControlled()?this.props.expanded:this.state.expanded}}])
t.displayName="Expandable"
return t}(l["Component"])
g.propTypes={expanded:Object(u["a"])(d.a.bool,"onToggle","defaultExpanded"),defaultExpanded:d.a.bool,onToggle:d.a.func,children:d.a.func,render:d.a.func}
g.defaultProps={defaultExpanded:false,onToggle:function(e,t){},expanded:void 0,children:null,render:void 0}},"8o96":function(e,t,a){"use strict"
a.d(t,"a",(function(){return r}))
var n=a("QF4Q")
var s=a("gCYW")
var o=a("ISHz")
function r(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["width"]
var r=Object(n["a"])(e)
var i=Object(s["a"])(r)
var _=false
var l
var c=function e(){if(_)return
var n=Object(s["a"])(r)
var c={width:n.width,height:n.height}
a.some((function(e){return c[e]!=i[e]}))&&"function"===typeof t&&t(c)
i=c
l=Object(o["a"])(e)}
c()
return{remove:function(){_=true
l.cancel()}}}},"8ruJ":function(e,t,a){"use strict"
a.d(t,"a",(function(){return p}))
var n=a("VTBJ")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("hPGw")
var u=c.a.createElement("path",{d:"M1903.483 807.19c22.023 22.023 22.023 57.712 0 79.848l-677.638 677.637c-10.616 10.504-24.96 16.49-39.98 16.49h-225.88c-31.17 0-56.469-25.299-56.469-56.47v-225.88c0-15.02 5.986-29.364 16.49-39.867l677.636-677.637c22.137-22.136 57.825-22.136 79.962 0l225.879 225.879zM1668.23 962.482l115.424-115.424-146.031-146.031-115.424 115.424 146.03 146.03zm-505.744 505.743l425.895-425.895-146.03-146.03-425.895 425.894v146.031h146.03zM0 0h1468.214v564.698h-112.94V112.94H112.94v1694.092h1242.334v-225.879h112.94v338.819H0V0zm338.819 790.588V338.83h790.576v451.758H338.82zm112.94-112.94h564.697V451.77H451.758v225.88zm-112.94 451.758v-112.94h564.697v112.94H338.82zm0 225.88v-112.94h338.818v112.94H338.82z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconAssignment",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconAssignmentLine"
return t}(l["Component"])
p.glyphName="assignment"
p.variant="Line"
p.propTypes=Object(n["a"])({},d["a"].propTypes)},"8t0o":function(e,t,a){"use strict"
var n=a("rePB")
var s=a("Ff2n")
var o=a("1OyB")
var r=a("vuIU")
var i=a("md7G")
var _=a("foSv")
var l=a("Ji7U")
a("DEX3")
var c=a("q1tI")
var d=a.n(c)
var u=a("17x9")
var p=a.n(u)
var m=a("TSYQ")
var f=a.n(m)
var g=a("n12J")
var h=a("J2CL")
var b=a("rW8M")
var y=a("/UXv")
var v=a("kR0I")
var k=a("nAyT")
var w=a("E+IV")
var x=a("jtGx")
var j=a("4Awi")
var C=a("KgFQ")
var O=a("oXx0")
var S=a("o4+2")
function z(e){var t=e.colors,a=e.typography,n=e.borders,s=e.spacing
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,color:t.textLink,textDecorationWithinText:"underline",hoverTextDecorationWithinText:"none",textDecorationOutsideText:"none",hoverTextDecorationOutsideText:"underline",focusOutlineWidth:n.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:n.style,hoverColor:Object(S["a"])(t.textLink,10),colorInverse:t.textLight,focusInverseOutlineColor:t.borderLightest,focusInverseIconOutlineColor:t.borderLightest,iconSize:"1.125em",iconPlusTextMargin:s.xxSmall}}z["canvas"]=function(e){return{color:e["ic-link-color"],focusOutlineColor:e["ic-brand-primary"],hoverColor:Object(S["a"])(e["ic-link-color"],10)}}
z["canvas-high-contrast"]=function(e){return{textDecorationOutsideText:"underline",hoverTextDecorationOutsideText:"none"}}
a.d(t,"a",(function(){return N}))
var G,I,T,A,P,H
var M={componentId:"fbyHH",template:function(e){return"\n\n.fbyHH_bGBk,a.fbyHH_bGBk,button.fbyHH_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";outline-color:transparent;outline-offset:0.25rem;outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit",";transition:outline-color 0.2s;vertical-align:baseline}\n\n.fbyHH_bGBk:focus,a.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{outline-color:").concat(e.focusOutlineColor||"inherit","}\n\n.fbyHH_bGBk[aria-disabled],a.fbyHH_bGBk[aria-disabled],button.fbyHH_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.fbyHH_bGBk::-moz-focus-inner,a.fbyHH_bGBk::-moz-focus-inner,button.fbyHH_bGBk::-moz-focus-inner{border:0}\n\na.fbyHH_bGBk,button.fbyHH_bGBk{color:").concat(e.color||"inherit",";cursor:pointer}\n\na.fbyHH_bGBk.fbyHH_vIby,button.fbyHH_bGBk.fbyHH_vIby{-webkit-text-decoration:").concat(e.textDecorationWithinText||"inherit",";text-decoration:").concat(e.textDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk.fbyHH_bSMN,button.fbyHH_bGBk.fbyHH_bSMN{-webkit-text-decoration:").concat(e.textDecorationOutsideText||"inherit",";text-decoration:").concat(e.textDecorationOutsideText||"inherit","}\n\na.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{color:").concat(e.color||"inherit","}\n\na.fbyHH_bGBk:active,a.fbyHH_bGBk:hover,button.fbyHH_bGBk:active,button.fbyHH_bGBk:hover{color:").concat(e.hoverColor||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_vIby,a.fbyHH_bGBk:hover.fbyHH_vIby,button.fbyHH_bGBk:active.fbyHH_vIby,button.fbyHH_bGBk:hover.fbyHH_vIby{-webkit-text-decoration:").concat(e.hoverTextDecorationWithinText||"inherit",";text-decoration:").concat(e.hoverTextDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_bSMN,a.fbyHH_bGBk:hover.fbyHH_bSMN,button.fbyHH_bGBk:active.fbyHH_bSMN,button.fbyHH_bGBk:hover.fbyHH_bSMN{-webkit-text-decoration:").concat(e.hoverTextDecorationOutsideText||"inherit",";text-decoration:").concat(e.hoverTextDecorationOutsideText||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH,a.fbyHH_bGBk.fbyHH_dQmH:link,a.fbyHH_bGBk.fbyHH_dQmH:visited,button.fbyHH_bGBk.fbyHH_dQmH{color:").concat(e.colorInverse||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,button.fbyHH_bGBk.fbyHH_dQmH:focus{outline-color:").concat(e.focusInverseOutlineColor||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:active,.fbyHH_bGBk.fbyHH_dQmH:focus,.fbyHH_bGBk.fbyHH_dQmH:hover,a.fbyHH_bGBk.fbyHH_dQmH:link:active,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:hover,a.fbyHH_bGBk.fbyHH_dQmH:visited:active,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:hover,button.fbyHH_bGBk.fbyHH_dQmH:active,button.fbyHH_bGBk.fbyHH_dQmH:focus,button.fbyHH_bGBk.fbyHH_dQmH:hover{color:").concat(e.colorInverse||"inherit","}\n\nbutton.fbyHH_bGBk{-moz-appearance:none;-moz-user-select:text;-ms-user-select:text;-webkit-appearance:none;-webkit-user-select:text;appearance:none;background:none;border:none;cursor:pointer;font-size:1em;margin:0;padding:0;text-align:inherit;user-select:text}\n\n[dir=ltr] button.fbyHH_bGBk,[dir=rtl] button.fbyHH_bGBk{text-align:inherit}\n\n.fbyHH_dnnz{box-sizing:border-box;font-size:").concat(e.iconSize||"inherit","}\n\n.fbyHH_ddMx .fbyHH_dnnz{-webkit-padding-end:").concat(e.iconPlusTextMargin||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .fbyHH_ddMx .fbyHH_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=rtl] .fbyHH_ddMx .fbyHH_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n.fbyHH_bkXt .fbyHH_dnnz{-webkit-padding-end:0;-webkit-padding-start:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=ltr] .fbyHH_bkXt .fbyHH_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n[dir=rtl] .fbyHH_bkXt .fbyHH_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n.fbyHH_FcDy.fbyHH_bkXt,.fbyHH_FcDy.fbyHH_ddMx{align-items:center}")},root:"fbyHH_bGBk",isWithinText:"fbyHH_vIby",isOutsideText:"fbyHH_bSMN","color--link-inverse":"fbyHH_dQmH",icon:"fbyHH_dnnz","iconPlacement--start":"fbyHH_ddMx","iconPlacement--end":"fbyHH_bkXt",truncates:"fbyHH_FcDy"}
var N=(G=Object(k["a"])("8.0.0",{linkRef:"elementRef",variant:"color",disabled:"interaction"}),I=Object(O["a"])(),T=Object(h["themeable"])(z,M),G(A=I(A=T(A=(H=P=function(e){Object(l["a"])(t,e)
function t(){var e
var a
Object(o["a"])(this,t)
for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r]
a=Object(i["a"])(this,(e=Object(_["a"])(t)).call.apply(e,[this].concat(s)))
a.state={hasFocus:false}
a.handleElementRef=function(e){var t=a.props,n=t.elementRef,s=t.linkRef
a._link=e
"function"===typeof s&&s(e)
"function"===typeof n&&n(e)}
a.handleClick=function(e){var t=a.props,n=t.disabled,s=t.interaction,o=t.onClick
if("disabled"===s||n){e.preventDefault()
e.stopPropagation()}else"function"===typeof o&&o(e)}
a.handleFocus=function(e){a.setState({hasFocus:true})
"function"===typeof a.props.onFocus&&a.props.onFocus(e)}
a.handleBlur=function(e){a.setState({hasFocus:false})
"function"===typeof a.props.onBlur&&a.props.onBlur(e)}
return a}Object(r["a"])(t,[{key:"focus",value:function(){this._link&&this._link.focus()}},{key:"renderIcon",value:function(){this.props.display
return d.a.createElement("span",{className:M.icon},Object(w["a"])(this.props.renderIcon))}},{key:"render",value:function(){var e
var t=this.props,a=t.interaction,o=t.children,r=t.onClick,i=t.color,_=t.href,l=t.margin,c=t.renderIcon,u=t.iconPlacement,p=t.isWithinText,m=t.variant,h=t.disabled,b=Object(s["a"])(t,["interaction","children","onClick","color","href","margin","renderIcon","iconPlacement","isWithinText","variant","disabled"])
var y=(e={},Object(n["a"])(e,M.root,true),Object(n["a"])(e,M["color--link-inverse"],"inverse"===m||"link-inverse"===i),Object(n["a"])(e,M["iconPlacement--".concat(u)],c&&this.hasVisibleChildren),Object(n["a"])(e,M.truncates,this.containsTruncateText),Object(n["a"])(e,M["is".concat(p?"Within":"Outside","Text")],true),e)
var v="disabled"===a||h
var k=r&&"button"!==this.element?"button":null
var w="button"===this.element||"input"===this.element?"button":null
var j="button"!==k||v?null:"0"
return d.a.createElement(g["a"],Object.assign({},Object(x["b"])(b),{elementRef:this.handleElementRef,as:this.element,display:this.display,margin:l,href:_,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-disabled":v?"true":null,role:k,type:w,tabIndex:j,className:f()(y)}),c&&"start"===u&&this.renderIcon(),o,c&&"end"===u&&this.renderIcon())}},{key:"containsTruncateText",get:function(){var e=false
d.a.Children.forEach(this.props.children,(function(t){t&&Object(j["a"])(t,["TruncateText"])&&(e=true)}))
!e||this.props.display
return e}},{key:"display",get:function(){if(this.props.display)return this.props.display
var e=this.containsTruncateText
return this.props.renderIcon?e?"inline-flex":"inline-block":e?"block":"auto"}},{key:"element",get:function(){return Object(C["a"])(t,this.props)}},{key:"focused",get:function(){return Object(y["a"])(this._link)}},{key:"focusable",get:function(){return Object(v["a"])(this._link)}},{key:"hasVisibleChildren",get:function(){return Object(b["a"])(this.props.children)}}])
t.displayName="Link"
return t}(c["Component"]),P.propTypes={children:p.a.node.isRequired,href:p.a.string,color:p.a.oneOf(["link","link-inverse"]),elementRef:p.a.func,as:p.a.elementType,interaction:p.a.oneOf(["enabled","disabled"]),margin:h["ThemeablePropTypes"].spacing,renderIcon:p.a.oneOfType([p.a.func,p.a.node]),iconPlacement:p.a.oneOf(["start","end"]),display:p.a.oneOf(["auto","block","inline-block","flex","inline-flex"]),isWithinText:p.a.bool,onClick:p.a.func,onFocus:p.a.func,onBlur:p.a.func,linkRef:p.a.func,variant:p.a.oneOf(["default","inverse"]),disabled:p.a.bool},P.defaultProps={href:void 0,elementRef:void 0,interaction:"enabled",margin:void 0,renderIcon:void 0,display:void 0,color:"link",as:void 0,iconPlacement:"start",isWithinText:true,onClick:void 0,onFocus:void 0,onBlur:void 0},H))||A)||A)||A)},AjOV:function(e,t,a){"use strict"
var n=a("17x9")
var s=a.n(n)
const o={text:s.a.string,value:s.a.number,valid:s.a.boolean}
const r={points:s.a.number,description:s.a.string,long_description:s.a.string,endOfRangePoints:s.a.number}
s.a.arrayOf(s.a.shape(r)).isRequired,s.a.number,s.a.string,s.a.number,s.a.bool.isRequired
const i={criterion_id:s.a.string.isRequired,comments:s.a.string,points:s.a.shape(o).isRequired,focusPoints:s.a.number,saveCommentsForLater:s.a.bool}
const _={id:s.a.string.isRequired,description:s.a.string,long_description:s.a.string,learning_outcome_id:s.a.string,points:s.a.number,ratings:s.a.arrayOf(s.a.shape(r)),mastery_points:s.a.number}
s.a.arrayOf(s.a.shape(_)),s.a.bool,s.a.number.isRequired,s.a.string.isRequired
s.a.bool,s.a.shape({saved_comments:s.a.objectOf(s.a.arrayOf(s.a.string))})
s.a.arrayOf(s.a.shape(i)).isRequired,s.a.number},EcEN:function(e,t,a){var n=a("xDdU")
var s=a("xk4V")
var o=s
o.v1=n
o.v4=s
e.exports=o},I2ZF:function(e,t){var a=[]
for(var n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1)
function s(e,t){var n=t||0
var s=a
return[s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],"-",s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]],s[e[n++]]].join("")}e.exports=s},O7M4:function(e,t,a){"use strict"
var n=a("rePB")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("17x9")
var u=a.n(d)
var p=a("TSYQ")
var m=a.n(p)
var f=a("J2CL")
var g=a("jtGx")
var h=a("n12J")
function b(e){var t=e.colors
return{debugOutlineColor:t.borderSuccess}}a.d(t,"a",(function(){return j}))
var y,v,k,w
var x={componentId:"dHGMZ",template:function(e){return"\n\n.dHGMZ_bGBk{box-sizing:border-box;flex-shrink:0;min-width:0.0625rem}\n\n.dHGMZ_ffgL{align-self:flex-start}\n\n.dHGMZ_fjOx{align-self:flex-end}\n\n.dHGMZ_bJAR{align-self:center}\n\n.dHGMZ_eFer{align-self:stretch}\n\n.dHGMZ_SpYf{flex-grow:1}\n\n.dHGMZ_buwJ{flex-shrink:1}\n\n.dHGMZ_fFVr{outline:0.0625rem dashed ".concat(e.debugOutlineColor||"inherit","}")},root:"dHGMZ_bGBk","align--start":"dHGMZ_ffgL","align--end":"dHGMZ_fjOx","align--center":"dHGMZ_bJAR","align--stretch":"dHGMZ_eFer",grow:"dHGMZ_SpYf",shrink:"dHGMZ_buwJ",visualDebug:"dHGMZ_fFVr"}
var j=(y=Object(f["themeable"])(b,x),y(v=(w=k=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e
var a=Object(g["a"])(this.props,t.propTypes)
var s=this.props,o=s.align,r=s.as,i=s.elementRef,_=s.children,l=s.direction,d=s.grow,u=s.margin,p=s.overflowX,f=s.overflowY,b=s.padding,y=s.shrink,v=s.size,k=s.textAlign,w=s.visualDebug
var j="column"===l
var C={flexBasis:v}
var O=(e={},Object(n["a"])(e,x.root,true),Object(n["a"])(e,x.visualDebug,w),Object(n["a"])(e,x.grow,d),Object(n["a"])(e,x.shrink,y),Object(n["a"])(e,x["align--".concat(o)],o),e)
return c.a.createElement(h["a"],Object.assign({},a,{className:m()(O),style:C,elementRef:i,as:r,minHeight:j?v:void 0,minWidth:"row"===l?v:void 0,textAlign:k,margin:u,padding:b,overflowX:p,overflowY:f||(j?"auto":"visible")}),_)}}])
t.displayName="FlexItem"
return t}(l["Component"]),k.propTypes={align:u.a.oneOf(["center","start","end","stretch"]),as:u.a.elementType,elementRef:u.a.func,children:u.a.node,direction:u.a.oneOf(["row","column"]),grow:u.a.bool,shrink:u.a.bool,size:u.a.string,textAlign:u.a.oneOf(["start","center","end"]),margin:f["ThemeablePropTypes"].spacing,padding:f["ThemeablePropTypes"].spacing,visualDebug:u.a.bool,overflowX:u.a.oneOf(["auto","hidden","visible"]),overflowY:u.a.oneOf(["auto","hidden","visible"])},k.defaultProps={as:"span",elementRef:function(e){},grow:false,shrink:false},w))||v)},PDbF:function(e,t,a){"use strict"
var n=a("rePB")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("17x9")
var u=a.n(d)
var p=a("TSYQ")
var m=a.n(p)
var f=a("n12J")
var g=a("J2CL")
var h=a("nAyT")
var b=a("II2N")
var y=a("jtGx")
var v=a("dpqJ")
var k=a("oXx0")
var w=a("YeH6")
function x(e){var t=e.colors,a=e.spacing,n=e.typography
return{background:t.backgroundLightest,color:t.textDarkest,pipeColor:t.borderDark,fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,defaultListPadding:a.large,orderedNumberFontWeight:n.fontWeightBold,orderedNumberMargin:a.xSmall}}x.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
a.d(t,"a",(function(){return T}))
var j,C,O,S,z,G
var I={componentId:"tTloz",template:function(e){return"\n\n.tTloz_bGBk{font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:0}\n\n.tTloz_ddES{-webkit-padding-end:0;-webkit-padding-start:").concat(e.defaultListPadding||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.defaultListPadding||"inherit","}\n\n[dir=ltr] .tTloz_ddES{padding-left:").concat(e.defaultListPadding||"inherit",";padding-right:0}\n\n[dir=rtl] .tTloz_ddES{padding-left:0;padding-right:").concat(e.defaultListPadding||"inherit","}\n\n.tTloz_ddES.tTloz_enMC{-webkit-padding-end:0;-webkit-padding-start:calc(").concat(e.defaultListPadding||"inherit","/2);counter-reset:ol-counter;list-style-type:none;padding-inline-end:0;padding-inline-start:calc(").concat(e.defaultListPadding||"inherit","/2)}\n\n[dir=ltr] .tTloz_ddES.tTloz_enMC{padding-left:calc(").concat(e.defaultListPadding||"inherit","/2);padding-right:0}\n\n[dir=rtl] .tTloz_ddES.tTloz_enMC{padding-left:0;padding-right:calc(").concat(e.defaultListPadding||"inherit","/2)}\n\n.tTloz_ddES.tTloz_enMC li:before{-webkit-margin-end:").concat(e.orderedNumberMargin||"inherit",';-webkit-margin-start:0;content:counters(ol-counter,".") ".";counter-increment:ol-counter;font-weight:').concat(e.orderedNumberFontWeight||"inherit",";margin-inline-end:").concat(e.orderedNumberMargin||"inherit",";margin-inline-start:0}\n\n[dir=ltr] .tTloz_ddES.tTloz_enMC li:before{margin-left:0;margin-right:").concat(e.orderedNumberMargin||"inherit","}\n\n[dir=rtl] .tTloz_ddES.tTloz_enMC li:before{margin-left:").concat(e.orderedNumberMargin||"inherit",";margin-right:0}\n\n.tTloz_eXrk,.tTloz_fLbg{-webkit-padding-start:0;list-style-type:none;padding-inline-start:0}\n\n[dir=ltr] .tTloz_eXrk,[dir=ltr] .tTloz_fLbg{padding-left:0}\n\n[dir=rtl] .tTloz_eXrk,[dir=rtl] .tTloz_fLbg{padding-right:0}")},root:"tTloz_bGBk",default:"tTloz_ddES",ordered:"tTloz_enMC",inline:"tTloz_eXrk",unstyled:"tTloz_fLbg"}
var T=(j=Object(h["a"])("7.0.0",null,"Use List from ui-list instead."),C=Object(k["a"])(),O=Object(g["themeable"])(x,I),j(S=C(S=O(S=(G=z=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"renderChildren",value:function(){var e=this
return l["Children"].map(this.props.children,(function(t){if(!t)return
return Object(b["a"])(t,{variant:e.props.variant,delimiter:e.props.delimiter,size:e.props.size,spacing:e.props.itemSpacing})}))}},{key:"render",value:function(){var e
var a=f["a"].omitViewProps(Object(y["a"])(this.props,t.propTypes),t)
var s=this.props,o=s.as,r=s.margin,i=s.variant,_=s.elementRef
var l=(e={},Object(n["a"])(e,I.root,true),Object(n["a"])(e,I[i],i),Object(n["a"])(e,I.unordered,"ul"===o),Object(n["a"])(e,I.ordered,"ol"===o),e)
return c.a.createElement(f["a"],Object.assign({},a,{className:m()(l),as:o,margin:r,elementRef:_}),this.renderChildren())}}])
t.displayName="List"
return t}(l["Component"]),z.propTypes={children:v["a"].oneOf([w["a"]]),as:u.a.oneOf(["ul","ol"]),margin:g["ThemeablePropTypes"].spacing,size:u.a.oneOf(["small","medium","large"]),variant:u.a.oneOf(["default","unstyled","inline"]),delimiter:u.a.oneOf(["none","pipe","slash","arrow","dashed","solid"]),itemSpacing:u.a.oneOf(["none","xxx-small","xx-small","x-small","small","medium","large","x-large","xx-large"]),elementRef:u.a.func},z.defaultProps={children:null,itemSpacing:void 0,elementRef:void 0,as:"ul",margin:"none",variant:"default",delimiter:"none",size:"medium"},z.Item=w["a"],G))||S)||S)||S)},Q0Ww:function(e,t,a){"use strict"
a.d(t,"a",(function(){return p}))
var n=a("VTBJ")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("hPGw")
var u=c.a.createElement("g",{fillRule:"evenodd",stroke:"none",strokeWidth:"1"},c.a.createElement("path",{d:"M0 1549.71l414.504-414.503 80.598 80.598-414.504 414.504L0 1549.71zm580.351-248.782l80.598 80.598-331.626 331.626-80.598-80.598 331.626-331.626zm-82.844 414.584l248.748-248.748 80.484 80.712-248.748 248.634-80.484-80.598zm1376.38-1601.848c1.823 3.648 180.005 372.438-176.587 729.03l-146.604 146.604-2.622 665.874-222.642 222.642-331.626-331.512-30.552-30.552-9.804-9.804-537.738-537.738-331.626-331.74 222.642-222.642 665.874-2.508L1119.32 264.6c356.478-356.478 725.268-178.296 729.03-176.472l17.1 8.436 8.436 17.1zm-439.585 1494.084l1.938-503.994-361.836 361.95 251.028 250.914 108.87-108.87zm-1189.02-971.28L496.31 887.61l361.836-361.836-503.994 1.824-108.87 108.87zm1371.42 125.628c256.956-256.956 187.986-511.176 162.564-579.69-69.084-25.992-321.366-95.304-579.348 162.792l-623.01 623.01 416.898 416.898 622.896-623.01z"}),c.a.createElement("path",{d:"M1534.987 372.558c-51.072-1.368-131.67 12.768-213.294 94.392l-40.47 40.356 173.394 173.28 40.356-40.242c82.194-82.308 96.9-161.31 94.848-213.18l-2.166-52.554-52.668-2.052z"}))
var p=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconQuiz",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconQuizLine"
return t}(l["Component"])
p.glyphName="quiz"
p.variant="Line"
p.propTypes=Object(n["a"])({},d["a"].propTypes)},U6jy:function(e,t){e.exports=n
var a=Object.prototype.hasOwnProperty
function n(){var e={}
for(var t=0;t<arguments.length;t++){var n=arguments[t]
for(var s in n)a.call(n,s)&&(e[s]=n[s])}return e}},YYau:function(e,t,a){"use strict"
var n=a("An8g")
var s=a("q1tI")
var o=a.n(s)
a("17x9")
var r=a("2DhO")
class i extends o.a.Component{render(){const e=this.props.datetime instanceof Date?this.props.datetime.toString():this.props.datetime
return Object(n["a"])("span",{className:"DatetimeDisplay"},void 0,r["a"].format(e,this.props.format))}}i.defaultProps={format:"%c"}
t["a"]=i},YeH6:function(e,t,a){"use strict"
var n=a("rePB")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
a("DEX3")
var l=a("q1tI")
var c=a.n(l)
var d=a("17x9")
var u=a.n(d)
var p=a("TSYQ")
var m=a.n(p)
var f=a("n12J")
var g=a("J2CL")
var h=a("oXx0")
var b=a("jtGx")
function y(e){var t=e.borders,a=e.colors,n=e.spacing,s=e.typography
return{fontFamily:s.fontFamily,fontWeight:s.fontWeightNormal,lineHeight:s.lineHeight,fontSizeSmall:s.fontSizeSmall,fontSizeMedium:s.fontSizeMedium,fontSizeLarge:s.fontSizeLarge,color:a.textDarkest,inlineColor:a.textDark,inlineLineHeight:s.lineHeightCondensed,noneSpacing:n.xSmall,pipeSpacing:n.xSmall,slashSpacing:n.xxxSmall,arrowSpacing:n.xSmall,marginBottomDefault:n.xxxSmall,spacingXXXSmall:n.xxxSmall,spacingXXSmall:n.xxSmall,spacingXSmall:n.xSmall,spacingSmall:n.small,spacingMedium:n.medium,spacingLarge:n.large,spacingXLarge:n.xLarge,spacingXXLarge:n.xxLarge,delimiterDashedBorder:"".concat(t.widthSmall," dashed ").concat(a.borderMedium),delimiterSolidBorder:"".concat(t.widthSmall," solid ").concat(a.borderMedium)}}y.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}
a.d(t,"a",(function(){return O}))
var v,k,w,x,j
var C={componentId:"dxCCp",template:function(e){return"\n\n.dxCCp_bGBk{color:".concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";padding:0}\n\n.dxCCp_eXrk{box-sizing:border-box;color:").concat(e.inlineColor||"inherit",";display:inline-block;font-size:").concat(e.fontSizeSmall||"inherit",";line-height:").concat(e.inlineLineHeight||"inherit",";max-width:100%;vertical-align:middle}\n\n.dxCCp_eXrk:first-of-type{-webkit-margin-start:0;margin-inline-start:0}\n\n[dir=ltr] .dxCCp_eXrk:first-of-type{margin-left:0}\n\n[dir=rtl] .dxCCp_eXrk:first-of-type{margin-right:0}\n\n.dxCCp_eXrk:last-of-type{-webkit-margin-end:0;margin-inline-end:0}\n\n[dir=ltr] .dxCCp_eXrk:last-of-type{margin-right:0}\n\n[dir=rtl] .dxCCp_eXrk:last-of-type{margin-left:0}\n\n.dxCCp_eXrk:last-of-type .dxCCp_eLRq:after{content:none}\n\n.dxCCp_eXrk.dxCCp_bwkW{-webkit-margin-end:").concat(e.spacingXXXSmall||"inherit",";-webkit-margin-start:").concat(e.spacingXXXSmall||"inherit",";margin-inline-end:").concat(e.spacingXXXSmall||"inherit",";margin-inline-start:").concat(e.spacingXXXSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bwkW{margin-left:").concat(e.spacingXXXSmall||"inherit",";margin-right:").concat(e.spacingXXXSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bwkW{margin-left:").concat(e.spacingXXXSmall||"inherit",";margin-right:").concat(e.spacingXXXSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_fBtB{-webkit-margin-end:").concat(e.spacingXXSmall||"inherit",";-webkit-margin-start:").concat(e.spacingXXSmall||"inherit",";margin-inline-end:").concat(e.spacingXXSmall||"inherit",";margin-inline-start:").concat(e.spacingXXSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_fBtB{margin-left:").concat(e.spacingXXSmall||"inherit",";margin-right:").concat(e.spacingXXSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_fBtB{margin-left:").concat(e.spacingXXSmall||"inherit",";margin-right:").concat(e.spacingXXSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_bFmZ{-webkit-margin-end:").concat(e.spacingXSmall||"inherit",";-webkit-margin-start:").concat(e.spacingXSmall||"inherit",";margin-inline-end:").concat(e.spacingXSmall||"inherit",";margin-inline-start:").concat(e.spacingXSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bFmZ{margin-left:").concat(e.spacingXSmall||"inherit",";margin-right:").concat(e.spacingXSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bFmZ{margin-left:").concat(e.spacingXSmall||"inherit",";margin-right:").concat(e.spacingXSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_bCcs{-webkit-margin-end:").concat(e.spacingSmall||"inherit",";-webkit-margin-start:").concat(e.spacingSmall||"inherit",";margin-inline-end:").concat(e.spacingSmall||"inherit",";margin-inline-start:").concat(e.spacingSmall||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bCcs{margin-left:").concat(e.spacingSmall||"inherit",";margin-right:").concat(e.spacingSmall||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bCcs{margin-left:").concat(e.spacingSmall||"inherit",";margin-right:").concat(e.spacingSmall||"inherit","}\n\n.dxCCp_eXrk.dxCCp_cYsY{-webkit-margin-end:").concat(e.spacingMedium||"inherit",";-webkit-margin-start:").concat(e.spacingMedium||"inherit",";margin-inline-end:").concat(e.spacingMedium||"inherit",";margin-inline-start:").concat(e.spacingMedium||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cYsY{margin-left:").concat(e.spacingMedium||"inherit",";margin-right:").concat(e.spacingMedium||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cYsY{margin-left:").concat(e.spacingMedium||"inherit",";margin-right:").concat(e.spacingMedium||"inherit","}\n\n.dxCCp_eXrk.dxCCp_cpQM{-webkit-margin-end:").concat(e.spacingLarge||"inherit",";-webkit-margin-start:").concat(e.spacingLarge||"inherit",";margin-inline-end:").concat(e.spacingLarge||"inherit",";margin-inline-start:").concat(e.spacingLarge||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cpQM{margin-left:").concat(e.spacingLarge||"inherit",";margin-right:").concat(e.spacingLarge||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cpQM{margin-left:").concat(e.spacingLarge||"inherit",";margin-right:").concat(e.spacingLarge||"inherit","}\n\n.dxCCp_eXrk.dxCCp_baAf{-webkit-margin-end:").concat(e.spacingXLarge||"inherit",";-webkit-margin-start:").concat(e.spacingXLarge||"inherit",";margin-inline-end:").concat(e.spacingXLarge||"inherit",";margin-inline-start:").concat(e.spacingXLarge||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_baAf{margin-left:").concat(e.spacingXLarge||"inherit",";margin-right:").concat(e.spacingXLarge||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_baAf{margin-left:").concat(e.spacingXLarge||"inherit",";margin-right:").concat(e.spacingXLarge||"inherit","}\n\n.dxCCp_eXrk.dxCCp_bNHb{-webkit-margin-end:").concat(e.spacingXXLarge||"inherit",";-webkit-margin-start:").concat(e.spacingXXLarge||"inherit",";margin-inline-end:").concat(e.spacingXXLarge||"inherit",";margin-inline-start:").concat(e.spacingXXLarge||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_bNHb{margin-left:").concat(e.spacingXXLarge||"inherit",";margin-right:").concat(e.spacingXXLarge||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_bNHb{margin-left:").concat(e.spacingXXLarge||"inherit",";margin-right:").concat(e.spacingXXLarge||"inherit","}\n\n.dxCCp_eXrk.dxCCp_cfzP .dxCCp_eLRq{-webkit-margin-end:").concat(e.noneSpacing||"inherit",";-webkit-margin-start:").concat(e.noneSpacing||"inherit",";margin-inline-end:").concat(e.noneSpacing||"inherit",";margin-inline-start:").concat(e.noneSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cfzP .dxCCp_eLRq{margin-left:").concat(e.noneSpacing||"inherit",";margin-right:").concat(e.noneSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cfzP .dxCCp_eLRq{margin-left:").concat(e.noneSpacing||"inherit",";margin-right:").concat(e.noneSpacing||"inherit","}\n\n.dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq{-webkit-margin-end:").concat(e.pipeSpacing||"inherit",";-webkit-margin-start:").concat(e.pipeSpacing||"inherit",";margin-inline-end:").concat(e.pipeSpacing||"inherit",";margin-inline-start:").concat(e.pipeSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq{margin-left:").concat(e.pipeSpacing||"inherit",";margin-right:").concat(e.pipeSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq{margin-left:").concat(e.pipeSpacing||"inherit",";margin-right:").concat(e.pipeSpacing||"inherit",'}\n\n.dxCCp_eXrk.dxCCp_dnHs .dxCCp_eLRq:after{content:"|"}\n\n.dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq{-webkit-margin-end:').concat(e.slashSpacing||"inherit",";-webkit-margin-start:").concat(e.slashSpacing||"inherit",";margin-inline-end:").concat(e.slashSpacing||"inherit",";margin-inline-start:").concat(e.slashSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq{margin-left:").concat(e.slashSpacing||"inherit",";margin-right:").concat(e.slashSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq{margin-left:").concat(e.slashSpacing||"inherit",";margin-right:").concat(e.slashSpacing||"inherit",'}\n\n.dxCCp_eXrk.dxCCp_fKZL .dxCCp_eLRq:after{content:"/"}\n\n.dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq{-webkit-margin-end:').concat(e.arrowSpacing||"inherit",";-webkit-margin-start:").concat(e.arrowSpacing||"inherit",";margin-inline-end:").concat(e.arrowSpacing||"inherit",";margin-inline-start:").concat(e.arrowSpacing||"inherit","}\n\n[dir=ltr] .dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq{margin-left:").concat(e.arrowSpacing||"inherit",";margin-right:").concat(e.arrowSpacing||"inherit","}\n\n[dir=rtl] .dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq{margin-left:").concat(e.arrowSpacing||"inherit",";margin-right:").concat(e.arrowSpacing||"inherit",'}\n\n.dxCCp_eXrk.dxCCp_cwfJ .dxCCp_eLRq:after{content:">"}\n\n.dxCCp_ddES.dxCCp_bwkW,.dxCCp_fLbg.dxCCp_bwkW{margin-bottom:').concat(e.spacingXXXSmall||"inherit",";margin-top:").concat(e.spacingXXXSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_fBtB,.dxCCp_fLbg.dxCCp_fBtB{margin-bottom:").concat(e.spacingXXSmall||"inherit",";margin-top:").concat(e.spacingXXSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_bFmZ,.dxCCp_fLbg.dxCCp_bFmZ{margin-bottom:").concat(e.spacingXSmall||"inherit",";margin-top:").concat(e.spacingXSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_bCcs,.dxCCp_fLbg.dxCCp_bCcs{margin-bottom:").concat(e.spacingSmall||"inherit",";margin-top:").concat(e.spacingSmall||"inherit","}\n\n.dxCCp_ddES.dxCCp_cYsY,.dxCCp_fLbg.dxCCp_cYsY{margin-bottom:").concat(e.spacingMedium||"inherit",";margin-top:").concat(e.spacingMedium||"inherit","}\n\n.dxCCp_ddES.dxCCp_cpQM,.dxCCp_fLbg.dxCCp_cpQM{margin-bottom:").concat(e.spacingLarge||"inherit",";margin-top:").concat(e.spacingLarge||"inherit","}\n\n.dxCCp_ddES.dxCCp_baAf,.dxCCp_fLbg.dxCCp_baAf{margin-bottom:").concat(e.spacingXLarge||"inherit",";margin-top:").concat(e.spacingXLarge||"inherit","}\n\n.dxCCp_ddES.dxCCp_bNHb,.dxCCp_fLbg.dxCCp_bNHb{margin-bottom:").concat(e.spacingXXLarge||"inherit",";margin-top:").concat(e.spacingXXLarge||"inherit","}\n\n.dxCCp_ddES:first-of-type,.dxCCp_fLbg:first-of-type{margin-top:0}\n\n.dxCCp_ddES:last-of-type,.dxCCp_fLbg:last-of-type{margin-bottom:0}\n\n.dxCCp_ddES.dxCCp_dtEo,.dxCCp_fLbg.dxCCp_dtEo{list-style-position:inside}\n\n.dxCCp_ddES.dxCCp_dtEo:not(:first-of-type),.dxCCp_fLbg.dxCCp_dtEo:not(:first-of-type){border-top:").concat(e.delimiterDashedBorder||"inherit","}\n\n.dxCCp_ddES.dxCCp_iLHf,.dxCCp_fLbg.dxCCp_iLHf{list-style-position:inside}\n\n.dxCCp_ddES.dxCCp_iLHf:not(:first-of-type),.dxCCp_fLbg.dxCCp_iLHf:not(:first-of-type){border-top:").concat(e.delimiterSolidBorder||"inherit","}\n\n.dxCCp_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.dxCCp_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.dxCCp_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}")},root:"dxCCp_bGBk",inline:"dxCCp_eXrk",delimiter:"dxCCp_eLRq","spacing--xxx-small":"dxCCp_bwkW","spacing--xx-small":"dxCCp_fBtB","spacing--x-small":"dxCCp_bFmZ","spacing--small":"dxCCp_bCcs","spacing--medium":"dxCCp_cYsY","spacing--large":"dxCCp_cpQM","spacing--x-large":"dxCCp_baAf","spacing--xx-large":"dxCCp_bNHb","delimiter--none":"dxCCp_cfzP","delimiter--pipe":"dxCCp_dnHs","delimiter--slash":"dxCCp_fKZL","delimiter--arrow":"dxCCp_cwfJ",default:"dxCCp_ddES",unstyled:"dxCCp_fLbg","delimiter--dashed":"dxCCp_dtEo","delimiter--solid":"dxCCp_iLHf",small:"dxCCp_doqw",medium:"dxCCp_ycrn",large:"dxCCp_cMDj"}
var O=(v=Object(h["a"])(),k=Object(g["themeable"])(y,C),v(w=k(w=(j=x=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){var e
var a=f["a"].omitViewProps(Object(b["a"])(this.props,t.propTypes),t)
var s=this.props,o=s.delimiter,r=s.variant,i=s.size
var _="none"===o&&"inline"!==r
var l="none"!==this.props.delimiter||"none"===this.props.spacing
l&&this.props.spacing
var d=(e={},Object(n["a"])(e,C.root,true),Object(n["a"])(e,C[r],true),Object(n["a"])(e,C[i],i),Object(n["a"])(e,C["delimiter--".concat(o)],true),Object(n["a"])(e,C["spacing--".concat(this.props.spacing)],this.props.spacing&&!l),e)
return c.a.createElement(f["a"],Object.assign({},a,{as:"li",margin:this.props.margin,padding:this.props.padding,className:m()(d),elementRef:this.props.elementRef}),this.props.children,!_&&c.a.createElement("span",{className:C.delimiter,"aria-hidden":"true"}))}}])
t.displayName="ListItem"
return t}(l["Component"]),x.propTypes={children:u.a.node.isRequired,variant:u.a.oneOf(["default","unstyled","inline"]),delimiter:u.a.oneOf(["none","pipe","slash","arrow","dashed","solid"]),size:u.a.oneOf(["small","medium","large"]),margin:g["ThemeablePropTypes"].spacing,padding:g["ThemeablePropTypes"].spacing,spacing:u.a.oneOf(["none","xxx-small","xx-small","x-small","small","medium","large","x-large","xx-large"]),elementRef:u.a.func},x.defaultProps={padding:void 0,margin:void 0,spacing:void 0,variant:void 0,delimiter:void 0,size:void 0,elementRef:void 0},j))||w)||w)},btHx:function(e,t,a){"use strict"
var n=a("ouhR")
var s=a.n(n)
var o=a("FIFq")
var r=a.n(o)
var i=a("GLiE")
var _=a.n(i)
var l,c=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){for(var a in t)u.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},u={}.hasOwnProperty,p=[].slice,m=[].indexOf||function(e){for(var t=0,a=this.length;t<a;t++)if(t in this&&this[t]===e)return t
return-1}
l=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){d(t,e)
function t(){this._setStateAfterFetch=c(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var a,n,o,r
null==e&&(e={})
e=_.a.clone(e)
this.loadedAll=false
n="fetching"+l(e.page)+"Page"
this[n]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(o=this.urls)?o[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
r=null
e.dataFilter=(i=this,function(t){i[n]=false
i._setStateAfterFetch(r,e)
return t})
var i
a=e.dfd||s.a.Deferred()
r=t.__super__.fetch.call(this,e).done(function(t){return function(n,s,o){var r
t.trigger("fetch",t,n,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,n,e);(null!=(r=t.urls)?r.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(p.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:a})})):a.resolve(n,s,o)}}(this))
a.abort=r.abort
a.success=a.done
a.error=a.fail
return a}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var a,n,s,o,r,i,_,l,c,d,u,p,f,g
null==this._urlCache&&(this._urlCache=[])
g=(i=t.url,m.call(this._urlCache,i)<0)
g||this._urlCache.push(t.url)
n=!this.atLeastOnePageFetched
u=n||("next"===(_=t.page)||"bottom"===_)&&g
p=n||("prev"===(l=t.page)||"top"===l)&&g
o=this.urls
this.urls=this._parsePageLinks(e)
u&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=o.bottom:delete this.urls.bottom
p&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=o.top:delete this.urls.top
f=null!=(c=this.urls.first)?c:this.urls.next
if(null!=f){r=parseInt(f.match(this.perPageRegex)[1],10);(null!=(a=null!=this.options?this.options:this.options={}).params?a.params:a.params={}).per_page=r}this.urls.last&&(s=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(s[1],10));(null!=(d=this.urls)?d.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,a
t=null!=(a=e.getResponseHeader("link"))?a.split(","):void 0
null==t&&(t=[])
return _.a.reduce(t,(n=this,function(e,t){var a,s
a=t.match(n.nameRegex)[1]
s=t.match(n.linkRegex)[1]
e[a]=s
return e}),{})
var n}
return t}(r.a.Collection)},cClk:function(e,t,a){"use strict"
a.d(t,"a",(function(){return n}))
function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange"
var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(n,s,o){var r=e.apply(null,arguments)
if(r)return r
if(n[s]&&"function"!==typeof n[t])return new Error(["You provided a '".concat(s,"' prop without an '").concat(t,"' handler on '").concat(o,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(a,"'. Otherwise, set '").concat(t,"'.")].join(""))}}},cbNQ:function(e,t,a){"use strict"
a.d(t,"a",(function(){return s}))
a.d(t,"b",(function(){return o}))
const n={}.hasOwnProperty
function s(e,t){for(const a in t)n.call(t,a)&&(e[a]=t[a])
function a(){this.constructor=e}a.prototype=t.prototype
e.prototype=new a
e.__super__=t.prototype
return e}function o(e,t){Object.keys(t).forEach(a=>Object.defineProperty(e,a,{get:t[a],enumerable:true,configurable:true}))
return e}},kon1:function(e,t,a){"use strict"
a.d(t,"a",(function(){return p}))
var n=a("VTBJ")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("hPGw")
var u=c.a.createElement("path",{d:"M110 1920v-113.326h1699.888V1920H110zm367.539-528.779l143.47 95.647-60.29 93.154H326.816l150.724-188.8zm94.627-133.61c41.59-62.33 42.497-142.565 2.266-204.214-16.205-24.932-14.506-58.476 3.627-82.388l38.757-49.07 389.954 260.196-32.75 51.45c-15.753 27.085-46.011 41.364-75.25 36.038-72.754-12.92-146.19 18.359-187.667 80.801l-27.991 41.704-138.825-92.7 27.879-41.818zm672.022-1127.933c12.466-16.66 35.018-21.532 51.223-10.766L1537.93 280.74c16.092 10.766 20.399 33.318 11.106 49.523l-481.409 756.337-380.208-253.736 556.77-703.187zM312.65 1693.348h309.833l123.186-190.727 59.722-89.414c16.433-24.592 45.104-37.398 72.642-32.185 76.495 14.28 154.123-22.098 192.654-88.394l575.242-903.547c40.344-69.696 20.626-158.657-44.99-202.627l-242.744-161.83c-65.616-43.63-155.37-27.764-203.533 35.585L488.53 901.654c-47.71 62.782-51.336 148.683-8.953 213.506 15.3 23.685 14.62 54.963-1.7 79.668l-58.249 87.26-190.16 238.438c-25.84 32.298-30.712 75.475-12.807 112.646 17.906 37.058 54.737 60.176 95.987 60.176z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconHighlighter",viewBox:"0 0 1920 1920",bidirectional:true}),u)}}])
t.displayName="IconHighlighterLine"
return t}(l["Component"])
p.glyphName="highlighter"
p.variant="Line"
p.propTypes=Object(n["a"])({},d["a"].propTypes)},lU25:function(e,t,a){"use strict"
var n=a("An8g")
var s=a("LvDl")
var o=a.n(s)
var r=a("ouhR")
var i=a.n(r)
var _=a("q1tI")
var l=a.n(_)
var c=a("TSYQ")
var d=a.n(c)
a("17x9")
var u=a("5JRF")
var p=a("pQTu")
var m=a("m0r6")
Object(m["a"])(JSON.parse('{"ar":{"no_details_1ee29870":"لا توجد تفاصيل","points_pts_e5596bf7":"%{points} نقاط","points_to_endofrangepoints_pts_aad207f0":"%{points} إلى \\u003e%{endOfRangePoints} نقطة","rating_selected_85c31e4c":"التصنيف المحدد","this_rating_is_selected_ca68fce6":"تم تحديد هذا التصنيف"},"cy":{"no_details_1ee29870":"Dim manylion","points_pts_e5596bf7":"%{points} pwynt","points_to_endofrangepoints_pts_aad207f0":"%{points} i \\u003e%{endOfRangePoints} pwynt","rating_selected_85c31e4c":"Sgôr wedi’i dewis","this_rating_is_selected_ca68fce6":"Mae\'r sgôr hon wedi’i dewis"},"da":{"no_details_1ee29870":"Inge detaljer","points_pts_e5596bf7":"%{points} point","points_to_endofrangepoints_pts_aad207f0":"%{points} til \\u003e%{endOfRangePoints} point","rating_selected_85c31e4c":"Bedømmelse valgt","this_rating_is_selected_ca68fce6":"Denne bedømmelse er valgt"},"da-x-k12":{"no_details_1ee29870":"Inge detaljer","points_pts_e5596bf7":"%{points} point","points_to_endofrangepoints_pts_aad207f0":"%{points} til \\u003e%{endOfRangePoints} point","rating_selected_85c31e4c":"Bedømmelse valgt","this_rating_is_selected_ca68fce6":"Denne bedømmelse er valgt"},"de":{"no_details_1ee29870":"Keine Details","points_pts_e5596bf7":"%{points} Pkte.","points_to_endofrangepoints_pts_aad207f0":"%{points} bis \\u003e%{endOfRangePoints} Pkte.","rating_selected_85c31e4c":"Ausgewählte Einstufung","this_rating_is_selected_ca68fce6":"Diese Einstufung wird ausgewählt."},"el":{"no_details_1ee29870":"Δεν υπάρχουν λεπτομέρεις","points_pts_e5596bf7":"%{points} μόρια"},"en-AU":{"no_details_1ee29870":"No details","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Rating selected","this_rating_is_selected_ca68fce6":"This rating is selected"},"en-AU-x-unimelb":{"no_details_1ee29870":"No details","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Rating selected","this_rating_is_selected_ca68fce6":"This rating is selected"},"en-CA":{"no_details_1ee29870":"No details","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Rating selected","this_rating_is_selected_ca68fce6":"This rating is selected"},"en-GB":{"no_details_1ee29870":"No details","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Rating selected","this_rating_is_selected_ca68fce6":"This rating is selected"},"en-GB-x-lbs":{"no_details_1ee29870":"No details","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Rating selected","this_rating_is_selected_ca68fce6":"This rating is selected"},"en-GB-x-ukhe":{"no_details_1ee29870":"No details","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Rating selected","this_rating_is_selected_ca68fce6":"This rating is selected"},"es":{"no_details_1ee29870":"Sin detalles","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} a \\u003e%{endOfRangePoints} pts ","rating_selected_85c31e4c":"Calificación seleccionada","this_rating_is_selected_ca68fce6":"Esta calificación está seleccionada"},"fa":{"no_details_1ee29870":"اطلاعات بیشتر موجود نیست","points_pts_e5596bf7":"%{points} امتیاز"},"fi":{"no_details_1ee29870":"Ei tietoja","points_pts_e5596bf7":"%{points} pistettä","points_to_endofrangepoints_pts_aad207f0":"%{points} - \\u003e%{endOfRangePoints} pistettä","rating_selected_85c31e4c":"Arvostelu valittu","this_rating_is_selected_ca68fce6":"Tämä arvostelu valitaan"},"fr":{"no_details_1ee29870":"Aucune information","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} à \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Notation sélectionnée","this_rating_is_selected_ca68fce6":"Cette note est sélectionnée"},"fr-CA":{"no_details_1ee29870":"Aucune information","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} à \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Notation sélectionnée","this_rating_is_selected_ca68fce6":"Cette notation est sélectionnée"},"he":{"no_details_1ee29870":"אין פרטים","points_pts_e5596bf7":"%{points} נקודות"},"ht":{"no_details_1ee29870":"Pa gen detay","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} a \\u003e%{endOfRangePoints} pwen","rating_selected_85c31e4c":"Nòt seleksyone","this_rating_is_selected_ca68fce6":"Nòt sa a seleksyone"},"hu":{"no_details_1ee29870":"Nincsenek részletek","points_pts_e5596bf7":"%{points} pont"},"hy":{"no_details_1ee29870":"Մանրամասներ չկան"},"is":{"no_details_1ee29870":"Engar upplýsingar","points_pts_e5596bf7":"%{points} punktar","points_to_endofrangepoints_pts_aad207f0":"%{points} í \\u003e %{endOfRangePoints} punktar","rating_selected_85c31e4c":"Einkunn valin","this_rating_is_selected_ca68fce6":"Þessi einkunn er valin"},"it":{"no_details_1ee29870":"Nessun dettaglio","points_pts_e5596bf7":"%{points} pt","points_to_endofrangepoints_pts_aad207f0":"%{points} in \\u003e%{endOfRangePoints} pt","rating_selected_85c31e4c":"Valutazione selezionata","this_rating_is_selected_ca68fce6":"Questa valutazione è selezionata"},"ja":{"no_details_1ee29870":"詳細情報なし","points_pts_e5596bf7":"%{points} 点","points_to_endofrangepoints_pts_aad207f0":"%{points}%{endOfRangePoints} 点を超えるものまで","rating_selected_85c31e4c":"選択された評価","this_rating_is_selected_ca68fce6":"この評価が選択されています"},"ko":{"no_details_1ee29870":"세부 정보 없음"},"mi":{"no_details_1ee29870":"Kāore he taipitopito","points_pts_e5596bf7":"%{points} ngā koinga","points_to_endofrangepoints_pts_aad207f0":"%{points} kī \\u003e%{endOfRangePoints} ngā koinga","rating_selected_85c31e4c":"Whakatauranga kua tīpakotia","this_rating_is_selected_ca68fce6":"Kua tīpakohia tēnei tohu"},"nb":{"no_details_1ee29870":"Ingen detaljer","points_pts_e5596bf7":"%{points} poeng","points_to_endofrangepoints_pts_aad207f0":"%{points} til \\u003e%{endOfRangePoints} poeng","rating_selected_85c31e4c":"Valgte vurderinger","this_rating_is_selected_ca68fce6":"Denne vurderingen er valgt"},"nb-x-k12":{"no_details_1ee29870":"Ingen detaljer","points_pts_e5596bf7":"%{points} poeng","points_to_endofrangepoints_pts_aad207f0":"%{points} til \\u003e%{endOfRangePoints} poeng","rating_selected_85c31e4c":"Vurdering valgt","this_rating_is_selected_ca68fce6":"Denne vurderingen er valgt"},"nl":{"no_details_1ee29870":"Geen details","points_pts_e5596bf7":"%{points} punten","points_to_endofrangepoints_pts_aad207f0":"%{points} tot \\u003e%{endOfRangePoints} ptn","rating_selected_85c31e4c":"Beoordeling geselecteerd","this_rating_is_selected_ca68fce6":"Deze beoordeling wordt geselecteerd"},"nn":{"no_details_1ee29870":"Ingen detaljar","points_pts_e5596bf7":"%{points} poeng","points_to_endofrangepoints_pts_aad207f0":"%{points} til \\u003e%{endOfRangePoints} poeng","rating_selected_85c31e4c":"Nivå valt","this_rating_is_selected_ca68fce6":"Nivået er valt"},"pl":{"no_details_1ee29870":"Brak szczegółowych informacji","points_pts_e5596bf7":"%{points} pkt","points_to_endofrangepoints_pts_aad207f0":"%{points} do \\u003e %{endOfRangePoints} pkt","rating_selected_85c31e4c":"Wybrane oceny","this_rating_is_selected_ca68fce6":"Wybrano tę ocenę"},"pt":{"no_details_1ee29870":"Nenhum detalhe","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} a \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Classificação selecionada","this_rating_is_selected_ca68fce6":"Esta classificação está selecionada"},"pt-BR":{"no_details_1ee29870":"Nenhum detalhe","points_pts_e5596bf7":"%{points} pts","points_to_endofrangepoints_pts_aad207f0":"%{points} para \\u003e%{endOfRangePoints} pts","rating_selected_85c31e4c":"Avaliação selecionada","this_rating_is_selected_ca68fce6":"Esta avaliação está selecionada"},"ru":{"no_details_1ee29870":"Нет сведений","points_pts_e5596bf7":"%{points} баллы","points_to_endofrangepoints_pts_aad207f0":"%{points} до \\u003e %{endOfRangePoints} баллов","rating_selected_85c31e4c":"Выбранная оценка","this_rating_is_selected_ca68fce6":"Данная оценка выбрана"},"sl":{"no_details_1ee29870":"Ni podrobnosti.","points_pts_e5596bf7":"%{points} točk","points_to_endofrangepoints_pts_aad207f0":"%{points} do \\u003e%{endOfRangePoints} točk","rating_selected_85c31e4c":"Rezultat je izbran.","this_rating_is_selected_ca68fce6":"To vrednotenje je izbrano."},"sv":{"no_details_1ee29870":"Inga detaljer","points_pts_e5596bf7":"%{points} poäng","points_to_endofrangepoints_pts_aad207f0":"%{points} till \\u003e %{endOfRangePoints} poäng","rating_selected_85c31e4c":"Vald bedömning","this_rating_is_selected_ca68fce6":"Den här bedömningen är vald"},"sv-x-k12":{"no_details_1ee29870":"Inga detaljer","points_pts_e5596bf7":"%{points} poäng","points_to_endofrangepoints_pts_aad207f0":"%{points} till \\u003e %{endOfRangePoints} poäng","rating_selected_85c31e4c":"Vald bedömning","this_rating_is_selected_ca68fce6":"Den här bedömningen är vald"},"tr":{"no_details_1ee29870":"Ayrıntı yok","points_pts_e5596bf7":"%{points} puan","points_to_endofrangepoints_pts_aad207f0":"%{points} to \\u003e%{endOfRangePoints} puan"},"uk":{"points_pts_e5596bf7":"%{points} балів"},"zh-Hans":{"no_details_1ee29870":"无详细信息","points_pts_e5596bf7":"%{points} 得分","points_to_endofrangepoints_pts_aad207f0":"%{points}至 \\u003e%{endOfRangePoints} 分","rating_selected_85c31e4c":"已选择等级","this_rating_is_selected_ca68fce6":"已选择此等级"},"zh-Hant":{"no_details_1ee29870":"沒有詳細資料","points_pts_e5596bf7":"%{points} 分","points_to_endofrangepoints_pts_aad207f0":"%{points}至 \\u003e%{endOfRangePoints} 分","rating_selected_85c31e4c":"已選擇評級","this_rating_is_selected_ca68fce6":"已選擇此評級。"}}'))
a("jQeR")
a("0sPK")
var f=p["default"].scoped("edit_rubricRatings")
a("AjOV")
const g=(e,t)=>null!==t?f.t("%{points} to >%{endOfRangePoints} pts",{points:f.toNumber(e,{precision:2,strip_insignificant_zeros:true}),endOfRangePoints:f.toNumber(t,{precision:2,strip_insignificant_zeros:true})}):f.t("%{points} pts",{points:f.toNumber(e,{precision:2,strip_insignificant_zeros:true})})
const h=e=>{const t=e.assessing,a=e.classes,s=e.description,o=e.endOfRangePoints,r=e.footer,i=e.long_description,_=e.points,l=e.onClick,c=e.shaderClass,p=e.tierColor,m=e.hidePoints,h=e.isSummary,b=e.selected,y=e.width
const v={backgroundColor:p}
const k={borderBottomColor:p}
const w=d()("shader",c)
const x=()=>Object(n["a"])("div",{className:"rating-points"},void 0,Object(n["a"])(u["a"],{size:"small",weight:"bold"},void 0,g(_,o)))
return Object(n["a"])("div",{className:a,onClick:t?l:null,onKeyPress:e=>"Enter"===e.key?l():null,role:t?"button":null,style:{width:y},tabIndex:t?0:null},void 0,m?null:x(),Object(n["a"])("div",{className:"rating-description"},void 0,Object(n["a"])(u["a"],{size:"small",lineHeight:"condensed",weight:"bold"},void 0,s)),Object(n["a"])(u["a"],{size:"small",lineHeight:"condensed"},void 0,i),Object(n["a"])("div",{className:"rating-footer"},void 0,r),Object(n["a"])("div",{className:w,style:v,"aria-label":h||!b?null:f.t("This rating is selected")},void 0,Object(n["a"])("div",{className:"triangle",style:k})))}
const b=(e,t,a)=>{const n=o.a.sortBy(a,"points").reverse()
const s=t>0?e*(n[0].points/t):e
const r=o.a.find(n,e=>s>=e.points)
return"#".concat(r?r.color:o.a.last(n).color)}
h.defaultProps={footer:null,selected:false,endOfRangePoints:null,hidePoints:false,shaderClass:null}
const y=e=>{const t=e.assessing,a=e.selectedRatingId,s=e.customRatings,r=e.defaultMasteryThreshold,_=e.footer,c=e.tiers,u=e.points,p=e.pointsPossible,m=e.hidePoints,g=e.onPointChange,y=e.isSummary,v=e.useRange
const k=c.map((e,t)=>{const a=c[t+1]
return{current:e.points,next:a?a.points:null}})
const w=()=>a?o.a.findIndex(c,e=>e.id===a&&(v||e.points===u)):k.findIndex(e=>{let t=e.current,a=e.next
const n=u===t
const s=u>a&&u<=t
const o=0===u&&null===a
return n||v&&(s||o)})
const x=(e,t)=>{if(t)return e===t.points?null:t.points
if(0!==e)return 0
return null}
const j=e=>{if(!e)return"transparent"
return s&&s.length>0?b(u,p,s):null}
const C=e=>{if(!e)return null
if(s&&s.length>0)return null
return u>=1.5*r?"exceedsMasteryShader":u>=r?"meetsMasteryShader":u>=r/2?"nearMasteryShader":"wellBelowMasteryShader"}
const O=e=>{g(e)
i.a.screenReaderFlashMessage(f.t("Rating selected"))}
const S=void 0!==u?w():null
const z=c.map((e,t)=>({tier:e,index:t,selected:S===t})).filter(e=>{let t=e.selected
return!y||t})
const G=z.map(e=>{let a=e.tier,n=e.index
const s=S===n
const o=d()({"rating-tier":true,selected:s})
return l.a.createElement(h,Object.assign({key:n,assessing:t,classes:o,endOfRangePoints:v?x(a.points,c[n+1]):null,footer:y?_:null,onClick:()=>O(a),shaderClass:C(s),tierColor:j(s),hidePoints:y||m,isSummary:y,selected:s,width:"".concat(100/z.length,"%")},a))}).filter(e=>null!==e)
const I=()=>Object(n["a"])(h,{assessing:t,classes:"rating-tier",description:f.t("No details"),footer:_,isSummary:y,points:0,hidePoints:y||m},0)
var T=Object(n["a"])("div",{className:"rating-all-footer"},void 0,_)
const A=()=>y||o.a.isNil(_)?null:T
return Object(n["a"])("div",{className:"rating-all"},void 0,Object(n["a"])("div",{className:d()("rating-tier-list",{"react-assessing":t})},void 0,G.length>0||!y?G:I()),A())}
y.defaultProps={footer:null,hidePoints:false,onPointChange:()=>{}}
t["a"]=y},nhsw:function(e,t,a){"use strict"
var n=a("rePB")
var s=a("VTBJ")
var o=a("1OyB")
var r=a("vuIU")
var i=a("md7G")
var _=a("foSv")
var l=a("Ji7U")
var c=a("q1tI")
var d=a.n(c)
var u=a("17x9")
var p=a.n(u)
var m=a("TSYQ")
var f=a.n(m)
var g=a("J2CL")
var h=a("dpqJ")
var b=a("nAyT")
var y=a("II2N")
var v=a("jtGx")
var k=a("n12J")
var w=a("O7M4")
function x(e){var t=e.colors,a=e.typography
return{fontFamily:a.fontFamily,debugOutlineColor:t.borderDebug}}a.d(t,"a",(function(){return I}))
var j,C,O,S,z
var G={componentId:"cGJLp",template:function(e){return"\n\n.cGJLp_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit","}\n\n.cGJLp_bZNM{flex-direction:column}\n\n.cGJLp_eUXf{flex-direction:column-reverse}\n\n.cGJLp_qOas{flex-direction:row}\n\n.cGJLp_sGoV{flex-direction:row-reverse}\n\n.cGJLp_ePRQ{flex-wrap:wrap}\n\n.cGJLp_busO{justify-content:flex-start}\n\n.cGJLp_crdn{justify-content:flex-end}\n\n.cGJLp_eRIA{justify-content:center}\n\n.cGJLp_flTs{justify-content:space-around}\n\n.cGJLp_oDLF{justify-content:space-between}\n\n.cGJLp_fZWR{align-items:center}\n\n.cGJLp_cCxO{align-items:flex-start}\n\n.cGJLp_fncw{align-items:flex-end}\n\n.cGJLp_cQFX{align-items:stretch}\n\n.cGJLp_fFVr{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}")},root:"cGJLp_bGBk",column:"cGJLp_bZNM","column-reverse":"cGJLp_eUXf",row:"cGJLp_qOas","row-reverse":"cGJLp_sGoV",wrapItems:"cGJLp_ePRQ","justifyItems--start":"cGJLp_busO","justifyItems--end":"cGJLp_crdn","justifyItems--center":"cGJLp_eRIA","justifyItems--space-around":"cGJLp_flTs","justifyItems--space-between":"cGJLp_oDLF","alignItems--center":"cGJLp_fZWR","alignItems--start":"cGJLp_cCxO","alignItems--end":"cGJLp_fncw","alignItems--stretch":"cGJLp_cQFX",visualDebug:"cGJLp_fFVr"}
var I=(j=Object(b["a"])("7.0.0",null,"Use Flex from ui-flex instead."),C=Object(g["themeable"])(x,G),j(O=C(O=(z=S=function(e){Object(l["a"])(t,e)
function t(){Object(o["a"])(this,t)
return Object(i["a"])(this,Object(_["a"])(t).apply(this,arguments))}Object(r["a"])(t,[{key:"renderChildren",value:function(){var e=this
return c["Children"].map(this.props.children,(function(t){return t?Object(y["a"])(t,Object(s["a"])({visualDebug:e.props.visualDebug},t.props,{direction:e.props.direction.replace(/-reverse/,"")})):null}))}},{key:"render",value:function(){var e
var a=Object(v["a"])(this.props,t.propTypes)
var s=this.props,o=s.as,r=s.elementRef,i=s.children,_=s.direction,l=s.height,c=s.inline,u=s.margin,p=s.padding,m=s.justifyItems,g=s.textAlign,h=s.visualDebug,b=s.width,y=s.wrapItems
var w=this.props.alignItems||("column"===_||"column-reverse"===_?"stretch":"center")
var x=(e={},Object(n["a"])(e,G.root,true),Object(n["a"])(e,G.visualDebug,h),Object(n["a"])(e,G["justifyItems--".concat(m)],true),Object(n["a"])(e,G["alignItems--".concat(w)],true),Object(n["a"])(e,G.wrapItems,y),e)
return i&&d.a.Children.count(i)>0?d.a.createElement(k["a"],Object.assign({},a,{className:f()(x,G[_]),elementRef:r,as:o,display:c?"inline-flex":"flex",width:b,height:l,margin:u,padding:p,textAlign:g}),this.renderChildren()):null}}])
t.displayName="Flex"
return t}(c["Component"]),S.propTypes={children:h["a"].oneOf([w["a"]]),as:p.a.elementType,elementRef:p.a.func,direction:p.a.oneOf(["row","column","row-reverse","column-reverse"]),height:p.a.oneOfType([p.a.string,p.a.number]),width:p.a.oneOfType([p.a.string,p.a.number]),inline:p.a.bool,textAlign:p.a.oneOf(["start","center","end"]),margin:g["ThemeablePropTypes"].spacing,padding:g["ThemeablePropTypes"].spacing,alignItems:p.a.oneOf(["center","start","end","stretch"]),justifyItems:p.a.oneOf(["center","start","end","space-around","space-between"]),visualDebug:p.a.bool,wrapItems:p.a.bool},S.defaultProps={children:null,as:"span",elementRef:function(e){},direction:"row",justifyItems:"start",inline:false,visualDebug:false,wrapItems:false,width:void 0,height:void 0,padding:void 0,margin:void 0,alignItems:void 0,textAlign:void 0},S.Item=w["a"],z))||O)||O)},pPlI:function(e,t,a){"use strict"
var n=a("pQTu")
var s=a("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"CollectionView":{"no_items":"لا توجد عناصر."}},"cy":{"CollectionView":{"no_items":"Dim eitemau."}},"da":{"CollectionView":{"no_items":"Ingen elementer."}},"da-x-k12":{"CollectionView":{"no_items":"Ingen elementer."}},"de":{"CollectionView":{"no_items":"Keine Elemente"}},"el":{"CollectionView":{"no_items":"Δεν υπάρχουν στοιχεία."}},"en-AU":{"CollectionView":{"no_items":"No items."}},"en-AU-x-unimelb":{"CollectionView":{"no_items":"No items."}},"en-CA":{"CollectionView":{"no_items":"No items."}},"en-GB":{"CollectionView":{"no_items":"No items."}},"en-GB-x-ukhe":{"CollectionView":{"no_items":"No items."}},"es":{"CollectionView":{"no_items":"No hay items."}},"fa":{"CollectionView":{"no_items":"هیچ موردی یافت نشد."}},"fi":{"CollectionView":{"no_items":"Ei kohteita."}},"fr":{"CollectionView":{"no_items":"Aucun élément"}},"fr-CA":{"CollectionView":{"no_items":"Aucun élément"}},"he":{"CollectionView":{"no_items":"אין פריטים"}},"ht":{"CollectionView":{"no_items":"Okenn eleman."}},"hu":{"CollectionView":{"no_items":"Nincsenek elemek."}},"hy":{"CollectionView":{"no_items":"Տարրերը բացակայում են:"}},"is":{"CollectionView":{"no_items":"Engin atriði."}},"it":{"CollectionView":{"no_items":"Nessun elemento."}},"ja":{"CollectionView":{"no_items":"アイテムがありません。"}},"ko":{"CollectionView":{"no_items":"항목이 없습니다."}},"mi":{"CollectionView":{"no_items":"Kāore he tūemi."}},"nb":{"CollectionView":{"no_items":"Ingen elementer."}},"nb-x-k12":{"CollectionView":{"no_items":"Ingen elementer."}},"nl":{"CollectionView":{"no_items":"Geen items."}},"nn":{"CollectionView":{"no_items":"Ingen element."}},"pl":{"CollectionView":{"no_items":"Brak elementów."}},"pt":{"CollectionView":{"no_items":"Nenhum item."}},"pt-BR":{"CollectionView":{"no_items":"Nenhum item."}},"ru":{"CollectionView":{"no_items":"Элементы отсутствуют."}},"sv":{"CollectionView":{"no_items":"Inga objekt."}},"sv-x-k12":{"CollectionView":{"no_items":"Inga objekt."}},"tr":{"CollectionView":{"no_items":"Öğe bulunamadı."}},"zh-Hans":{"CollectionView":{"no_items":"没有项目。"}},"zh-Hant":{"CollectionView":{"no_items":"沒有項目。"}}}'))
a("jQeR")
a("0sPK")
var o=n["default"].scoped("CollectionView")
var r=a("ouhR")
var i=a.n(r)
var _=a("GLiE")
var l=a.n(_)
var c=a("FIFq")
var d=a.n(c)
var u=a("3O+N")
var p=a.n(u)
a("DfGn")
var m=p.a.default
var f=m.template,g=m.templates=m.templates||{}
var h="collectionView"
g[h]=f((function(e,t,a,n,s){this.compilerInfo=[4,">= 1.0.0"]
a=this.merge(a,e.helpers)
s=s||{}
var o,r="",i="function",_=this.escapeExpression,l=this
function c(e,t){var n,s,o=""
o+='\n<ul class="collectionViewItems '
if(s=a.listClassName)n=s.call(e,{hash:{},data:t})
else{s=e&&e.listClassName
n=typeof s===i?s.call(e,{hash:{},data:t}):s}o+=_(n)+'"></ul>\n'
return o}function d(e,t){var n,s,o=""
o+='\n<p class="emptyMessage">'
if(s=a.emptyMessage)n=s.call(e,{hash:{},data:t})
else{s=e&&e.emptyMessage
n=typeof s===i?s.call(e,{hash:{},data:t}):s}o+=_(n)+"</p>\n"
return o}o=a["if"].call(t,(o=t&&t.collection,null==o||false===o?o:o.length),{hash:{},inverse:l.program(3,d,s),fn:l.program(1,c,s),data:s});(o||0===o)&&(r+=o)
r+="\n"
return r}))
var b=g[h]
var y=a("cbNQ")
var v=function(e,t){return function(){return e.apply(t,arguments)}},k=function(e,t){for(var a in t)w.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},w={}.hasOwnProperty
t["a"]=function(e){k(t,e)
function t(){this.renderItem=v(this.renderItem,this)
this.renderOnAdd=v(this.renderOnAdd,this)
this.removeItem=v(this.removeItem,this)
this.renderOnReset=v(this.renderOnReset,this)
this.removePreviousItems=v(this.removePreviousItems,this)
this.reorder=v(this.reorder,this)
this.render=v(this.render,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("itemView")
t.optionProperty("itemViewOptions")
t.optionProperty("emptyMessage")
t.optionProperty("listClassName")
t.prototype.className="collectionView"
t.prototype.els={".collectionViewItems":"$list"}
t.prototype.defaults=Object(y["b"])({itemViewOptions:{}},{emptyMessage:function(){return o.t("no_items","No items.")}})
t.prototype.template=b
t.prototype.initialize=function(e){t.__super__.initialize.apply(this,arguments)
return this.attachCollection()}
t.prototype.render=function(){t.__super__.render.apply(this,arguments)
this.empty||this.renderItems()
return this}
t.prototype.toJSON=function(){return l.a.extend(this.options,{emptyMessage:this.emptyMessage,listClassName:this.listClassName,ENV:ENV})}
t.prototype.reorder=function(){var e,t,a
this.collection.sort()
this.$list.children().detach()
e=function(){var e,a,n,s
n=this.collection.models
s=[]
for(e=0,a=n.length;e<a;e++){t=n[e]
s.push(t.itemView.$el)}return s}.call(this)
return(a=this.$list).append.apply(a,e)}
t.prototype.attachCollection=function(){this.listenTo(this.collection,"reset",this.renderOnReset)
this.listenTo(this.collection,"add",this.renderOnAdd)
this.listenTo(this.collection,"remove",this.removeItem)
return this.empty=!this.collection.length}
t.prototype.detachCollection=function(){return this.stopListening(this.collection)}
t.prototype.switchCollection=function(e){this.detachCollection()
this.collection=e
return this.attachCollection()}
t.prototype.removePreviousItems=function(e){var t,a,n,s,o
o=[]
for(t=0,a=e.length;t<a;t++){n=e[t]
o.push(null!=(s=n.view)?s.remove():void 0)}return o}
t.prototype.renderOnReset=function(e,t){this.empty=!this.collection.length
this.removePreviousItems(t.previousModels)
return this.render()}
t.prototype.renderItems=function(){this.collection.each(this.renderItem.bind(this))
return this.trigger("renderedItems")}
t.prototype.removeItem=function(e){this.empty=!this.collection.length
return this.empty?this.render():e.view.remove()}
t.prototype.renderOnAdd=function(e){this.empty&&this.render()
this.empty=false
return this.renderItem(e)}
t.prototype.renderItem=function(e){var t
t=this.createItemView(e)
t.render()
"function"===typeof this.attachItemView&&this.attachItemView(e,t)
return this.insertView(t)}
t.prototype.createItemView=function(e){var t
t=new this.itemView(i.a.extend({},this.itemViewOptions||{},{model:e}))
e.itemView=t
return t}
t.prototype.insertView=function(e){var t
t=this.collection.indexOf(e.model)
return 0===t?this.prependView(e):t===this.collection.length-1?this.appendView(e):this.insertViewAtIndex(e,t)}
t.prototype.insertViewAtIndex=function(e,t){var a
a=this.$list.children().eq(t)
return a.length?a.before(e.el):this.$list.append(e.el)}
t.prototype.prependView=function(e){return this.$list.prepend(e.el)}
t.prototype.appendView=function(e){return this.$list.append(e.el)}
return t}(d.a.View)},"vc+K":function(e,t,a){"use strict"
a.d(t,"a",(function(){return o}))
a.d(t,"b",(function(){return r}))
function n(e,t){return(e||"").replace(/(?:^|[-_])(\w)/g,(e,a,n)=>0===n&&t?a?a.toLowerCase():"":a?a.toUpperCase():"")}function s(e){return e.replace(/([A-Z])/g,e=>"_".concat(e.toLowerCase()))}function o(e){let t
const a={}
for(t in e)e.hasOwnProperty(t)&&(a[n(t,true)]=e[t])
return a}function r(e){let t
const a={}
for(t in e)e.hasOwnProperty(t)&&(a[s(t)]=e[t])
return a}},xDdU:function(e,t,a){var n=a("4fRq")
var s=a("I2ZF")
var o
var r
var i=0
var _=0
function l(e,t,a){var l=t&&a||0
var c=t||[]
e=e||{}
var d=e.node||o
var u=void 0!==e.clockseq?e.clockseq:r
if(null==d||null==u){var p=n()
null==d&&(d=o=[1|p[0],p[1],p[2],p[3],p[4],p[5]])
null==u&&(u=r=16383&(p[6]<<8|p[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime()
var f=void 0!==e.nsecs?e.nsecs:_+1
var g=m-i+(f-_)/1e4
g<0&&void 0===e.clockseq&&(u=u+1&16383);(g<0||m>i)&&void 0===e.nsecs&&(f=0)
if(f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
i=m
_=f
r=u
m+=122192928e5
var h=(1e4*(268435455&m)+f)%4294967296
c[l++]=h>>>24&255
c[l++]=h>>>16&255
c[l++]=h>>>8&255
c[l++]=255&h
var b=m/4294967296*1e4&268435455
c[l++]=b>>>8&255
c[l++]=255&b
c[l++]=b>>>24&15|16
c[l++]=b>>>16&255
c[l++]=u>>>8|128
c[l++]=255&u
for(var y=0;y<6;++y)c[l+y]=d[y]
return t||s(c)}e.exports=l},xk4V:function(e,t,a){var n=a("4fRq")
var s=a("I2ZF")
function o(e,t,a){var o=t&&a||0
if("string"==typeof e){t="binary"===e?new Array(16):null
e=null}e=e||{}
var r=e.random||(e.rng||n)()
r[6]=15&r[6]|64
r[8]=63&r[8]|128
if(t)for(var i=0;i<16;++i)t[o+i]=r[i]
return t||s(r)}e.exports=o},y2yB:function(e,t,a){"use strict"
a.d(t,"a",(function(){return p}))
var n=a("VTBJ")
var s=a("1OyB")
var o=a("vuIU")
var r=a("md7G")
var i=a("foSv")
var _=a("Ji7U")
var l=a("q1tI")
var c=a.n(l)
var d=a("hPGw")
var u=c.a.createElement("path",{d:"M.08 568.062l176.13-176.13 783.988 783.865 783.74-783.864 176.13 176.13-959.87 960.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(_["a"])(t,e)
function t(){Object(s["a"])(this,t)
return Object(r["a"])(this,Object(i["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return c.a.createElement(d["a"],Object.assign({},this.props,{name:"IconArrowOpenDown",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconArrowOpenDownSolid"
return t}(l["Component"])
p.glyphName="arrow-open-down"
p.variant="Solid"
p.propTypes=Object(n["a"])({},d["a"].propTypes)},yJLO:function(e,t,a){"use strict"
var n=a("pQTu")
var s=a("m0r6")
Object(s["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","update":"تحديث"}},"cy":{"buttons":{"cancel":"Canslo","update":"Diweddaru"}},"da":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"da-x-k12":{"buttons":{"cancel":"Annuller","update":"Opdatering"}},"de":{"buttons":{"cancel":"Abbrechen","update":"Aktualisieren"}},"el":{"buttons":{"cancel":"Ακύρωση","update":"Ενημέρωση"}},"en-AU":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-CA":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","update":"Update"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","update":"Update"}},"es":{"buttons":{"cancel":"Cancelar","update":"Actualizar"}},"fa":{"buttons":{"cancel":"لغو","update":"بهنگام سازی"}},"fi":{"buttons":{"cancel":"Peruuta","update":"Päivitä"}},"fr":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"fr-CA":{"buttons":{"cancel":"Annuler","update":"Mettre à jour"}},"he":{"buttons":{"cancel":"ביטול","update":"עדכון"}},"ht":{"buttons":{"cancel":"Anile","update":"Aktyalize"}},"hu":{"buttons":{"cancel":"Mégse","update":"Frissítés"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","update":"Թարմացնել"}},"is":{"buttons":{"cancel":"Hætta við","update":"Uppfæra"}},"it":{"buttons":{"cancel":"Annulla","update":"Aggiorna"}},"ja":{"buttons":{"cancel":"キャンセル","update":"更新"}},"ko":{"buttons":{"cancel":"취소","update":"업데이트"}},"mi":{"buttons":{"cancel":"Whakakore","update":"Whakahōu"}},"nb":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","update":"Oppdater"}},"nl":{"buttons":{"cancel":"Annuleren","update":"Bijwerken"}},"nn":{"buttons":{"cancel":"Avbryt","update":"Oppdatering"}},"pl":{"buttons":{"cancel":"Anuluj","update":"Aktualizuj"}},"pt":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"pt-BR":{"buttons":{"cancel":"Cancelar","update":"Atualizar"}},"ru":{"buttons":{"cancel":"Отменить","update":"Обновить"}},"sl":{"buttons":{"cancel":"Prekliči","update":"Posodobi"}},"sv":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","update":"Uppdatera"}},"tr":{"buttons":{"cancel":"İptal","update":"Güncelle"}},"uk":{"buttons":{"cancel":"Скасувати","update":"Оновлення"}},"zh-Hans":{"buttons":{"cancel":"取消","update":"更新"}},"zh-Hant":{"buttons":{"cancel":"取消","update":"更新"}}}'))
a("jQeR")
a("0sPK")
var o=n["default"].scoped("dialog")
var r=a("ouhR")
var i=a.n(r)
var _=a("GLiE")
var l=a.n(_)
var c=a("FIFq")
var d=a.n(c)
a("YGE8")
var u=function(e,t){return function(){return e.apply(t,arguments)}},p=function(e,t){for(var a in t)m.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},m={}.hasOwnProperty
t["a"]=function(e){p(t,e)
function t(){this.cancel=u(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=l.a.extend({},this.defaultOptions(),{buttons:[{text:o.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:o.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},l.a.result(this,"dialogOptions"))
var t
this.dialog=i()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
i()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(d.a.View)},yb06:function(e,t,a){"use strict"
var n=a("JPcv")
var s="<<anonymous>>"
var o={listOf:d,mapOf:p,orderedMapOf:m,setOf:f,orderedSetOf:g,stackOf:h,iterableOf:b,recordOf:y,shape:k,contains:k,mapContains:w,list:_("List",n.List.isList),map:_("Map",n.Map.isMap),orderedMap:_("OrderedMap",n.OrderedMap.isOrderedMap),set:_("Set",n.Set.isSet),orderedSet:_("OrderedSet",n.OrderedSet.isOrderedSet),stack:_("Stack",n.Stack.isStack),seq:_("Seq",n.Seq.isSeq),record:_("Record",(function(e){return e instanceof n.Record})),iterable:_("Iterable",n.Iterable.isIterable)}
function r(e){var t=typeof e
if(Array.isArray(e))return"array"
if(e instanceof RegExp)return"object"
if(e instanceof n.Iterable)return"Immutable."+e.toSource().split(" ")[0]
return t}function i(e){function t(t,a,n,o,r,i){for(var _=arguments.length,l=Array(_>6?_-6:0),c=6;c<_;c++)l[c-6]=arguments[c]
i=i||n
o=o||s
if(null!=a[n])return e.apply(void 0,[a,n,o,r,i].concat(l))
var d=r
if(t)return new Error("Required "+d+" `"+i+"` was not specified in `"+o+"`.")}var a=t.bind(null,false)
a.isRequired=t.bind(null,true)
return a}function _(e,t){function a(a,n,s,o,i){var _=a[n]
if(!t(_)){var l=r(_)
return new Error("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+s+"`, expected `"+e+"`.")}return null}return i(a)}function l(e,t,a){function n(n,s,o,i,_){for(var l=arguments.length,c=Array(l>5?l-5:0),d=5;d<l;d++)c[d-5]=arguments[d]
var u=n[s]
if(!a(u)){var p=i
var m=r(u)
return new Error("Invalid "+p+" `"+_+"` of type `"+m+"` supplied to `"+o+"`, expected an Immutable.js "+t+".")}if("function"!==typeof e)return new Error("Invalid typeChecker supplied to `"+o+"` for propType `"+_+"`, expected a function.")
var f=u.toArray()
for(var g=0,h=f.length;g<h;g++){var b=e.apply(void 0,[f,g,o,i,_+"["+g+"]"].concat(c))
if(b instanceof Error)return b}}return i(n)}function c(e){function t(t,a,n,s,o){for(var r=arguments.length,i=Array(r>5?r-5:0),_=5;_<r;_++)i[_-5]=arguments[_]
var l=t[a]
if("function"!==typeof e)return new Error("Invalid keysTypeChecker (optional second argument) supplied to `"+n+"` for propType `"+o+"`, expected a function.")
var c=l.keySeq().toArray()
for(var d=0,u=c.length;d<u;d++){var p=e.apply(void 0,[c,d,n,s,o+" -> key("+c[d]+")"].concat(i))
if(p instanceof Error)return p}}return i(t)}function d(e){return l(e,"List",n.List.isList)}function u(e,t,a,n){function s(){for(var s=arguments.length,o=Array(s),r=0;r<s;r++)o[r]=arguments[r]
return l(e,a,n).apply(void 0,o)||t&&c(t).apply(void 0,o)}return i(s)}function p(e,t){return u(e,t,"Map",n.Map.isMap)}function m(e,t){return u(e,t,"OrderedMap",n.OrderedMap.isOrderedMap)}function f(e){return l(e,"Set",n.Set.isSet)}function g(e){return l(e,"OrderedSet",n.OrderedSet.isOrderedSet)}function h(e){return l(e,"Stack",n.Stack.isStack)}function b(e){return l(e,"Iterable",n.Iterable.isIterable)}function y(e){function t(t,a,s,o,i){for(var _=arguments.length,l=Array(_>5?_-5:0),c=5;c<_;c++)l[c-5]=arguments[c]
var d=t[a]
if(!(d instanceof n.Record)){var u=r(d)
var p=o
return new Error("Invalid "+p+" `"+i+"` of type `"+u+"` supplied to `"+s+"`, expected an Immutable.js Record.")}for(var m in e){var f=e[m]
if(!f)continue
var g=d.toObject()
var h=f.apply(void 0,[g,m,s,o,i+"."+m].concat(l))
if(h)return h}}return i(t)}function v(e){var t=void 0===arguments[1]?"Iterable":arguments[1]
var a=void 0===arguments[2]?n.Iterable.isIterable:arguments[2]
function s(n,s,o,i,_){for(var l=arguments.length,c=Array(l>5?l-5:0),d=5;d<l;d++)c[d-5]=arguments[d]
var u=n[s]
if(!a(u)){var p=r(u)
var m=i
return new Error("Invalid "+m+" `"+_+"` of type `"+p+"` supplied to `"+o+"`, expected an Immutable.js "+t+".")}var f=u.toObject()
for(var g in e){var h=e[g]
if(!h)continue
var b=h.apply(void 0,[f,g,o,i,_+"."+g].concat(c))
if(b)return b}}return i(s)}function k(e){return v(e)}function w(e){return v(e,"Map",n.Map.isMap)}e.exports=o},yufi:function(e,t,a){"use strict"
a.d(t,"a",(function(){return z}))
var n=a("1OyB")
var s=a("vuIU")
var o=a("md7G")
var r=a("foSv")
var i=a("Ji7U")
var _=a("q1tI")
var l=a.n(_)
var c=a("17x9")
var d=a.n(c)
var u=a("KgFQ")
var p=a("jtGx")
var m=a("Zgll")
var f=a("XQb/")
var g=a("5nFh")
var h=a("cClk")
var b=a("/UXv")
var y=a("TstA")
var v=a("n12J")
var k=a("rf+m")
var w=a("y2yB")
var x=a("oXx0")
var j,C,O,S
var z=(j=Object(x["a"])(),j(C=(S=O=function(e){Object(i["a"])(t,e)
function t(){var e
var a
Object(n["a"])(this,t)
for(var s=arguments.length,i=new Array(s),_=0;_<s;_++)i[_]=arguments[_]
a=Object(o["a"])(this,(e=Object(r["a"])(t)).call.apply(e,[this].concat(i)))
a._button=null
a._shouldTransition=false
return a}Object(s["a"])(t,[{key:"focus",value:function(){this._button.focus()}},{key:"componentDidMount",value:function(){this._shouldTransition=true}},{key:"renderIcon",value:function(e){var t=e?this.props.iconExpanded:this.props.icon
return l.a.createElement(t,null)}},{key:"renderToggle",value:function(e,t){var a=this
var n=this.props,s=n.toggleLabel,o=n.size
var r
r="function"===typeof s?s(t):s
return l.a.createElement(m["a"],Object.assign({},e,{withBackground:false,withBorder:false,size:"large"===o?"medium":"small",elementRef:function(e){a._button=e},screenReaderLabel:r}),this.renderIcon(t))}},{key:"renderDetails",value:function(e){return l.a.createElement(v["a"],Object.assign({},e,{display:"block",borderWidth:"small none none none"}),this.props.transition&&this._shouldTransition?l.a.createElement(f["a"],{transitionOnMount:true,in:true,type:"fade"},this.props.children):this.props.children)}},{key:"render",value:function(){var e=this
var a=Object(u["a"])(t,this.props)
return l.a.createElement(g["a"],Object(p["c"])(this.props,g["a"].propTypes),(function(n){var s=n.expanded,o=n.getToggleProps,r=n.getDetailsProps
return l.a.createElement(v["a"],Object.assign({},Object(p["a"])(e.props,t.propTypes),{borderWidth:e.props.border?"small":"none",as:a,elementRef:e.props.elementRef,display:"block",borderRadius:"medium",background:"primary"}),l.a.createElement(y["a"],{padding:"small"===e.props.size?"x-small":"small small small x-small"},l.a.createElement(y["a"].Item,null,e.renderToggle(o(),s)),l.a.createElement(y["a"].Item,{shouldGrow:true,shouldShrink:true,padding:"0 0 0 x-small"},e.props.summary)),s?e.renderDetails(r()):l.a.createElement("span",r()))}))}},{key:"focused",get:function(){return Object(b["a"])(this._button)}}])
t.displayName="ToggleGroup"
return t}(_["Component"]),O.propTypes={children:d.a.node.isRequired,summary:d.a.node.isRequired,toggleLabel:d.a.oneOfType([d.a.node,d.a.func]).isRequired,as:d.a.elementType,elementRef:d.a.func,size:d.a.oneOf(["small","medium","large"]),expanded:Object(h["a"])(d.a.bool,"onToggle","defaultExpanded"),defaultExpanded:d.a.bool,onToggle:d.a.func,icon:d.a.oneOfType([d.a.node,d.a.func]),iconExpanded:d.a.oneOfType([d.a.node,d.a.func]),transition:d.a.bool,border:d.a.bool},O.defaultProps={expanded:void 0,size:"medium",icon:k["a"],iconExpanded:w["a"],defaultExpanded:false,onToggle:function(e,t){},transition:true,as:"span",elementRef:function(e){},border:true},S))||C)}}])

//# sourceMappingURL=grade_summary-c-b03248e04a.js.map