function applyEnchant() {

    const enchant =
        document.getElementById("enchant")
        .value
        .toLowerCase()
        .replace(/ /g, "_");

    let level =
        parseInt(
            document.getElementById("level").value
        );

    if(level > 255) level = 255;
    if(level < 1) level = 1;

    const cmd =
        `/enchant @p ${enchant} ${level}`;

    navigator.clipboard.writeText(cmd);

    document.getElementById("status")
        .innerText =
        "Command copied:\\n" + cmd;
}
