// LINKS DO GOOGLE DRIVE (substitua pelos seus IDs)
const firefoxLink = "https://drive.google.com/uc?export=download&id=1l3MH_pb5Di2CH7vqFWFHVMtKdIH6PSgc";
const appLink = "https://drive.google.com/uc?export=download&id=10hh4BDHI9GwWIjuK0huZieXvPKYkTmSR";

//https://drive.google.com/file/d/1l3MH_pb5Di2CH7vqFWFHVMtKdIH6PSgc/view?usp=sharing

//https://drive.google.com/file/d/10hh4BDHI9GwWIjuK0huZieXvPKYkTmSR/view?usp=sharing


// Detectar sistema
const osText = document.getElementById("os-detect");
if (navigator.appVersion.includes("Win")) {
    osText.textContent = "Sistema detectado: Windows";
} else if (navigator.appVersion.includes("Linux")) {
    osText.textContent = "Sistema detectado: Linux";
} else {
    osText.textContent = "Sistema detectado: Outro";
}

// Barra de progresso simulada + redirecionamento
function startDownload(link) {
    const progressArea = document.querySelector(".progress-area");
    const fill = document.getElementById("progress-fill");
    const text = document.getElementById("progress-text");

    progressArea.style.display = "block";
    fill.style.width = "0%";

    let progress = 0;

    const timer = setInterval(() => {
        progress += Math.random() * 12;

        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            window.location.href = link;
        }

        fill.style.width = progress + "%";
        text.textContent = `Preparando download... ${Math.floor(progress)}%`;
    }, 200);
}
