import { Fragment } from "preact";
//import { html } from 'htm/preact';
import React from "preact/compat";
//import parser from "html-react-parser";
import DDiv from "./DDiv";
import Fancybox from "./fancybox.js";

//import htm from 'htm';

const Copimg = (props) => {
  /*  
  function h(type, props, ...children) {
    return { type, props, children };
  }
  const html = htm.bind(h);
 */

  const data = {
    data: {
      key: [
        {
          ctxt:
            '<div id="fig_Acartia_test"><span class="blkfigure"><br><div class="fig_title"><span class="spmain"><em>Acartia (Acartiura) hongi</em> (Soh & Suh, 2000) <a href="#key_Acartia_9b">female</a>; <a href="#key_Acartia_13b">male</a>)</span></div><br><span class="ntwo"><a class="fbox" href="https://lipsum.app/id/33/1024x768"><img src="https://lipsum.app/id/33/200x150" border="0" /></a><span id="fig_Acartia_hongi_019" class="spnote">Shen/Bai</span></span> <span class="ntwo"><a class="fbox" href="https://lipsum.app/id/34/1024x768"><img src="https://lipsum.app/id/34/200x150" border="0" /></a><span id="fig_Acartia_hongi_020" class="spnote">Chen/Zhang</span></span><br></span></div><br><div class="fig_title"><span class="spnote"><em>Acartia (Acartiura) hongi</em> (Soh & Suh, 2000)</span></div><br><div class="fig_cap"><span class="spnote">C.-j. Shen & S.-o. Bai, 1956. Pl.VII, Figs.52-54. As <em>Acartia bifilosa</em>. <em>Acartia (Acartiura) hongi</em> Soh & Suh, 2000, (from Chefoo): 52, habitus (dorsal); 53, leg 5. <strong>Female</strong>; 54, leg 5, male.</span></div><br><div class="fig_cap"><span class="spnote">Q.-c Chen & S.-z. Zhang, 1965. Pl.49, 5-8. As <em>Acartia bifilosa</em>. <em>Acartia (Acartiura) hongi</em> Soh & Suh, 2000, <strong>Female</strong> (from E China Sea): 5, habitus (dorsal); 6, P5 (posterior); <strong>Male</strong>: 7, habitus (dorsal); 8, P5 (posterior).</span></div><div class="fig_cite"><span class="spnote">Adapted from Razouls C., de Bovée F., Kouwenberg J. and Desreumaux N., 2005-2020. Diversity and Geographic Distribution of Marine Planktonic Copepods. Sorbonne University, CNRS. Available at http://copepodes.obs-banyuls.fr/en [Accessed May 27 2021].</span></div>'
        },
        {
          ctxt:
            '<div id="fig_Acartia_hongi"><span class="blkfigure"><br><div class="fig_title"><span class="spmain"><em>Acartia (Acartiura) hongi</em> (Soh & Suh, 2000) <a href="#key_Acartia_9b">female</a>; <a href="#key_Acartia_13b">male</a>)</span></div><br><span class="ntwo"><a class="fbox" href="https://lipsum.app/id/35/1024x768"><img src="https://lipsum.app/id/35/200x150" border="0" /></a><span id="fig_Acartia_hongi_021" class="spnote">Shen/Bai</span></span> <span class="ntwo"><a class="fbox" href="https://lipsum.app/id/36/1024x768"><img src="https://lipsum.app/id/35/200x150" border="0" /></a><span id="fig_Acartia_hongi_022" class="spnote">Chen/Zhang</span></span><br></span></div><br><div class="fig_title"><span class="spnote"><em>Acartia (Acartiura) hongi</em> (Soh & Suh, 2000)</span></div><br><div class="fig_cap"><span class="spnote">C.-j. Shen & S.-o. Bai, 1956. Pl.VII, Figs.52-54. As <em>Acartia bifilosa</em>. <em>Acartia (Acartiura) hongi</em> Soh & Suh, 2000, (from Chefoo): 52, habitus (dorsal); 53, leg 5. <strong>Female</strong>; 54, leg 5, male.</span></div><br><div class="fig_cap"><span class="spnote">Q.-c Chen & S.-z. Zhang, 1965. Pl.49, 5-8. As <em>Acartia bifilosa</em>. <em>Acartia (Acartiura) hongi</em> Soh & Suh, 2000, <strong>Female</strong> (from E China Sea): 5, habitus (dorsal); 6, P5 (posterior); <strong>Male</strong>: 7, habitus (dorsal); 8, P5 (posterior).</span></div><div class="fig_cite"><span class="spnote">Adapted from Razouls C., de Bovée F., Kouwenberg J. and Desreumaux N., 2005-2020. Diversity and Geographic Distribution of Marine Planktonic Copepods. Sorbonne University, CNRS. Available at http://copepodes.obs-banyuls.fr/en [Accessed May 27 2021].</span></div>'
        }
      ]
    }
  };

  let keyarr = data.data.key;
  let ctxt = keyarr
    .reduce((acc, cur) => {
      return acc + cur["ctxt"] + "\\n";
    }, "")
    .replace(/^(<\/div>)/g, "")
    .replace(/^(<\/div>)/g, "")
    .replace(/a class=/g, 'a data-fancybox="gallery" class=');
  let ftxt = (ctxt.match(/\<div id=\"fig_(.*)\/span\>\<\/div\>(\\n)*/g) || [
    ""
  ])[0];
  //console.log(ft);
  //let fout = ftxt.split(/\\n/);
  //https://stackoverflow.com/questions/44707656/react-mapping-multiple-arrays
  const fboxs = ftxt.split(/\\n/).map((fx) => {
    let f1 = (fx.match(
      /\<div class=\"fig_title(.*)\/span\>\<\/div\>\<br\>\<span class=\"n/g
    ) || [""])[0];
    let ftitle = f1.replace(
      /(^(\<div class=\"fig_title\">)|(\<\/div\>\<br\>\<span class=\"n)$)/g,
      ""
    );
    let f2 = fx
      .split(/\<(\/)*span\>/)
      .map((txt) => {
        return (txt.match(/\<a data(.*)\>\<\/a\>/g) || [""])[0];
      })
      .filter((v) => v); //filter empty string

    let fsub = fx
      .split(/\<\/a\>/)
      .map((txt) => {
        return (txt.match(
          /\<span id=\"fig_(.*)\/span\>(?!\<(\/)*(span|div)\>)/g
        ) || [""])[0].replace(/(\<\/span\>){2}/, "</span>");
      })
      .filter((v) => v); //filter empty string
    //console.log(fsub);
    let fcap = (fx.match(/\<div class=\"fig_cap(.*)\/div\>/g) || [""])[0];
    /*
    if (fsub.length == f2.length) {
      f2.forEach((el, idx, arr) => {
        arr[idx] = arr[idx].replace(
          /a data-fancybox=(.*)class=\"fbox\"/g,
          "a data-fancybox='gallery' " + "data-caption='" + fsub[idx] + "'"
        );
      });
    }*/

    let fa = f2
      .reduce((acc, cur) => {
        return acc + cur;
      }, "")
      .replace(/(border=\"0\" |class=\"fbox\" )/g, "");
    console.log(fa);
    /*
    const fimg = (ctxt) => {
      return html`${ctxt}`
    }
            <Fancybox>{parse(fa, { library: require("preact") })}</Fancybox>

*/
    return (
      <Fragment>
        <DDiv ctxt={ftitle} class="fig_title" />
        <Fancybox>
          <DDiv ctxt={fa} class="fancybox__container" />
        </Fancybox>
        <DDiv ctxt={fcap} class="fig_cap" />
      </Fragment>
    );
  });

  return <Fragment>{fboxs}</Fragment>;
};
export default Copimg;
