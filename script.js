const FILE_LINKS_OBJ = {
    "root": [

        { "display_name": 'Coop_Imp Files', 'link_obj': 'coop_imp_files' },
        { "display_name": 'Coop_Imp Files_2', 'link_obj': 'coop_imp_files_2' },
        { "display_name": 'Links', 'link_obj': 'Links' },


    ],


    "coop_imp_files": [

        { "display_name": 'File1', 'link_obj': './files/coop_imp_files/annual-report-template_developed-by-NCBL-2.docx' },
        { "display_name": 'File_2', 'link_obj': './files/coop_imp_files/BoD-Self-evaluation-final.xlsx' },

    ],

    "coop_imp_files_2": [

        { "display_name": 'File_2', 'link_obj': './files/coop_imp_files/BoD-Self-evaluation-final.xlsx' },

    ],

    "Links": [
        { "display_name": 'Copomis Login', 'link_obj': 'https://copomis.mocpa.gov.np/user/login' },
        { "display_name": 'File Compress', 'link_obj': 'https://www.wecompress.com/en/' },


    ],



}
createHTML();













function createHTML() {
    for (let i = 0; i < FILE_LINKS_OBJ['root'].length; i++) {
        const r = FILE_LINKS_OBJ['root'][i];
        const link_key = r['link_obj']
        const subLinks_HTM = subLinks(FILE_LINKS_OBJ[link_key])


        const HTML = `            
   
    <details class="detail">
        <summary><strong>${r['display_name']}</strong></summary>
        <div class="links_container">${subLinks_HTM}</div>
    </details>

    `;


        $('.container').append(HTML);


    }
}


function subLinks(OBJ) {
    let HTML_LINKS = '';
    for (let i = 0; i < OBJ.length; i++) {
        const r = OBJ[i];

        HTML_LINKS += `<a href="${r['link_obj']}">${r['display_name']}</a><br>`;
    }
    return HTML_LINKS;
}





$('summary').click(function() {
    $('.detail').removeAttr('open');
    $(this).attr('open')
});