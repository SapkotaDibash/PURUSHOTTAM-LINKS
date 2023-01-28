$('#SearchInput').keyup(function () {
    const val = $(this).val();
    if (val.length == 0) {
        $('.transparent_BG').remove();
        return;
    }
    $('.transparent_BG').remove();
    $('body').append(transparentBG);




    const filteredArrayList = search(val);

    $('.filteredItems_Summarry').append('Found Items For : ' + val);
    $('.filteredItems_Summarry').append('<br>Fonund Link Counts : ' + filteredArrayList.length);
    $('.filteredItems_Summarry').append('<br><hr>');

    for (let i = 0; i < filteredArrayList.length; i++) {
        const r=filteredArrayList[i];
        const SN = ( i + 1).toString().padStart(2, 0);
        let HTML_LINKS = `${SN}. <a href="${r['link_obj']}">${r['display_name']}</a><br>`;
        $('.filteredItems_List').append(HTML_LINKS);

    }

});
function search(string) {
    const newArray = [
        ...FILE_LINKS_OBJ.coop_imp_files,
        ...FILE_LINKS_OBJ.coop_imp_files_2,
        ...FILE_LINKS_OBJ.Links,
    ];

    const FilteredArray = newArray.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));

    return FilteredArray

}

const transparentBG = `
<div class="transparent_BG">
    <div class="filteredItems_Summarry"></div>
    <div class="filteredItems_List"></div>
</div>
`;