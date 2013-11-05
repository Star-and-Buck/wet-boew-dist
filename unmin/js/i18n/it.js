/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-05
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Italian dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "it",
	"%lang-en": "Italian",
	"%lang-fr": "italien",
	"%lang-nat": "Italiano",
	"%all": "Tutti",
	"%home": "Home",
	"%main-page": "Pagina principale",
	"%tphp": "Inizio pagina",
	"%you-are-in": "Sei in:",
	"%welcome-to": "Benvenuti",
	"%load": "caricamento...",
	"%process": "elaborazione ...",
	"%srch": "Cerca",
	"%srch-terms": "Cerca parola/e:",
	"%no-match": "Nessuna corrispondenza trovata",
	"%matches": {
		"mixin": "[MIXIN] corrispondenza/e trovata/e"
	},
	"%menu": "Menu",
	"%settings": "Impostazioni",
	"%langs": "Lingue",
	"%about": "A proposito di",
	"%curr": "(attuale)",
	"%hide": "Nascondere",
	"%err": "Errore",
	"%colon": ":",
	"%hyphen": " - ",
	"%full-stop": ".",
	"%comma-space": ", ",
	"%space": "&#32;",
	"%start": "Inizio",
	"%stop": "Stop",
	"%back": "Indietro",
	"%cancel": "Annullare",
	"%new-win": " (Si apre in una nuova finestra)",
	"%min-ago": "un minuto fa",
	"%coup-mins": "un paio di minuti fa",
	"%mins-ago": {
		"mixin": "[MIXIN] Minuti fa"
	},
	"%hour-ago": "un'ora fa",
	"%hours-ago": {
		"mixin": "[MIXIN] ore fa"
	},
	"%days-ago": {
		"mixin": "[MIXIN] giorni fa"
	},
	"%yesterday": "ieri",

	"%nxt": "Prossimo",
	"%nxt-r": "Prossimo (tasto freccia destra)",
	"%prv": "Precedente",
	"%prv-l": "Precedente (tasto freccia sinistra)",
	"%first": "Primo",
	"%last": "Ultimo",
	"%close-esc": "Chiudere (tasto ESC)",
	"%show": "Mostra",

	/* Archived Web page template */
	"%arch-pg": "Questa pagina web è stata archiviata sul web.",
	/* Menu bar */
	"%sm-hlp": "(aprire il sottomenu con il tasto Invio e chiudere con il tasto ESC)",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "Arresto rotazione scheda",
		"on": "Inizio rotazione scheda"
	},
	"%tab-list": "Elenco schede",
	"%tab-pnl-end1": "Fine di questo pannello a schede.",
	"%tab-pnl-end2": "Ritorna alla lista schede",
	"%tab-pnl-end3": "o continuare con il resto della pagina.",
	/* Multimedia player */
	"%play": "Play",
	"%pause": "Pausa",
	"%open": "Aprire",
	"%close": "Chiudere",
	"%rew": "Riavvolgere",
	"%ffwd": "Avanti veloce",
	"%mute": {
		"on": "Muto",
		"off": "Riattivare audio"
	},
	"%cc": {
		"off": "Nascondi i sottotitoli",
		"on": "Mostra i sottotitoli"
	},
	"%cc-err": "Errore caricamento sottotitoli",
	"%adesc": {
		"on": "Attiva descrizione audio",
		"off": "Disattiva descrizione audio"
	},
	"%prog-bar": "utilizzare freccia sinistra e freccia destra per avanzare e riavvolgere il progresso dei media",
	"%no-video": "Your browser does not appear to have the capabilities to play this video, please download the video below",
	"%pos": "Posizione attuale:",
	"%perc": "Percentuale riproduzione:",
	"%dur": "Tempo totale:",
	"%buff": "Bufferizzato:",
	/* Share widget */
	"%fav": "Preferito",
	"%email": "E-mail",
	"%shr-txt": "Condividi questa pagina",
	"%shr-hnt": " con {s} ",
	"%shr-email-sub": "Pagina interessante",
	"%shr-email-bd": "Ho pensato che vi potrebbe interessare questa pagina:\n{t} ({u})",
	"%shr-fav-ttl": "(Aggiungi ai preferiti)",
	"%shr-man": "Si prega di chiudere questa finestra di dialogo e premere Ctrl-D per aggiungere questa pagina ai preferiti.",
	"%shr-all": "Mostra tutto ({n})",
	"%shr-all-ttl": "Tutti i preferiti",
	"%shr-disc": "Nessuna approvazione di prodotti o servizi è espressa o implicita",
	/* Form validation */
	"%frm-nosubmit": "Non è stato possibile inviare il modulo in quanto ",
	"%errs-fnd": " errori sono stati trovati.",
	"%err-fnd": " errore è stato trovato.",
	/* Date picker */
	"%date-hide": "Nascondi calendario",
	"%date-show": "Scegli una data da un calendario per il campo:",
	"%date-sel": "Selezionato",
	/* Calendar */
	"%days": ["Domenica", "Lunedi", "Martedì", "Mercoledì", "Giovedi", "Venerdì", "Sabato"],
	"%mnths": ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
	"%cal": "Calendario",
	"%currDay": "(Giorno attuale)",
	"%cal-goToLnk": "Vai ad un<span class=\"wb-inv\"> mese dell'anno</span>",
	"%cal-goToTtl": "Vai al mese dell'anno",
	"%cal-goToMnth": "Mese:",
	"%cal-goToYr": "Anno:",
	"%cal-goToBtn": "Andare",
	"%prvMnth": "Mese Precedente: ",
	"%nxtMnth": "Prossimo Mese: ",
	/* Slideout */
	"%show-toc": "Mostra l'indice",
	"%hide-toc": "Nascondi indice",
	"%toc": "Indice",
	/* Lightbox */
	"%lb-curr": "Articolo %curr% di %total%",
	"%lb-xhr-err": "Questo contenuto non è stato caricato.",
	"%lb-img-err": "Questa immagine non è stata caricata.",
	/* Charts widget */
	"%table-mention": "Tabella",
	"%table-following": "Grafico. Dettagli nella tabella riportata di seguito.",
	/* Session timeout */
	"%st-to-msg-bgn": "La sessione scadrà automaticamente in #min# min #sec# sec .",
	"%st-to-msg-end": "Seleziona \"Continua sessione\" per estendere la tua sessione.",
	"%st-msgbx-ttl": "Avviso scadenza sessione",
	"%st-alrdy-to-msg": "Spiacenti la sessione è già scaduta. Effettua il login di nuovo.",
	"%st-btn-cont": "Continuare sessione",
	"%st-btn-end": "Termina sessione ora",
	/* Toggle details */
	"%td-toggle": "Alterna tutto",
	"%td-open": "Espandi tutto",
	"%td-close": "Riduci tutto",
	"%td-ttl-open": "Espandi tutte le sezioni di contenuto",
	"%td-ttl-close": "Riduci tutte le sezioni di contenuto",
	/* Table enhancement */
	"%sortAsc": ": organizza in ordine crescente",
	"%sortDesc": ": organizza in ordine decrescente",
	"%emptyTbl": "Non sono disponibili dati in tabella",
	"%infoEntr": "Mostra _START_ a _END_ di _TOTAL_ voci",
	"%infoEmpty": "Mostra 0 a 0 di 0 voci",
	"%infoFilt": "(filtrato da _MAX_ voci totali)",
	"%info1000": "&#160;",
	"%lenMenu": "Mostra _MENU_ voci",
	/* Geomap */
	"%geo-mapcontrol": "Controllo di mappa",
	"%geo-zoomin": "Zoom avanti",
	"%geo-zoomout": "Zoom indietro",
	"%geo-zoomworld": "Zoom sull'estensione della mappa",
	"%geo-zoomfeature": "Zoom sull'elemento",
	"%geo-scaleline": "scala mappa",
	"%geo-mouseposition": "Latitudine e longitudine del cursore del mouse",
	"%geo-ariamap": "Oggetto della mappa. Le descrizioni delle caratteristiche della mappa sono nella tabella qui sotto.",
	"%geo-accessibilize": "<strong>Gli utenti della tastiera:</strong> Quando la mappa è a fuoco, utilizzare i tasti freccia per scorrere la mappa e i tasti più e meno per lo zoom. I tasti freccia non scorreranno la mappa quando lo zoom è sull'intera estensione della mappa.",
	"%geo-accessibilizetitle": "Istruzioni: come navigare sulla mappa",
	"%geo-togglelayer": "Alternare la visualizzazione del livello",
	"%geo-hiddenlayer": "Questo livello è attualmente nascosto.",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis - Canada mappa di base (inglese o francese)",
	"%geo-select": "Selezionare",
	"%geo-labelselect": "Controllare per selezionare l'elemento sulla mappa",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "Versione HTML di base",
	"%wb-enable": "Versione standard",
	/* Template */
	"%tmpl-signin": "Accedi"
};

window.i18nObj = ind;

})( window );