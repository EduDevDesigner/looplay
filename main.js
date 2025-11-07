// SCRIPT VÍDEOS
const video = document.getElementById('video1');
const controls = document.getElementById('videoControls');

// Lista de vídeos locais
const videos = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4"
];

let currentVideo = 0;

function loadVideo(index) {
  if (index < 0) index = videos.length - 1;
  if (index >= videos.length) index = 0;
  currentVideo = index;
  video.src = videos[currentVideo];
  video.currentTime = 0;
  video.pause(); // carrega o vídeo parado
}

loadVideo(0);

// Mostrar controles ao clicar no vídeo
document.querySelector('#videoPlane').addEventListener('click', () => {
  controls.classList.add('show');
});

// Botões
document.getElementById('playBtn').addEventListener('click', () => video.play());
document.getElementById('pauseBtn').addEventListener('click', () => video.pause());
document.getElementById('stopBtn').addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});
document.getElementById('closeBtn').addEventListener('click', () => {
  controls.classList.remove('show');
  video.pause();
  video.currentTime = 0;
});
document.getElementById('nextBtn').addEventListener('click', () => {
  loadVideo(currentVideo + 1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
  loadVideo(currentVideo - 1);
});
//-----------------------------------------------------------------------

/// SCRIPT TELA DE LOAD
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const startBtn = document.getElementById("startBtn");
  const logomarca = document.getElementById("logomarca");
  const music = document.getElementById("bgMusic");
  const infoBox = document.getElementById("infoBox"); // telinha informativa

  // Tempo do spinner antes do botão aparecer
  setTimeout(() => {
    const spinner = document.getElementById("spinner");
    if (spinner) spinner.style.display = "none";
    logomarca.style.display = "block";
    startBtn.style.display = "block";
  }, 5000);

  // Ao clicar no botão iniciar
  startBtn.addEventListener("click", () => {
    loader.style.opacity = "0";
    startBtn.style.display = "none";
    logomarca.style.display = "none";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

    music.loop = true;
    music.play();
    music.volume = 0.1;

    // Mostra a telinha informativa com efeito gradual
    if (infoBox) {
      infoBox.classList.add("show");

      // esconde automaticamente após 6 segundos
      setTimeout(() => {
        infoBox.classList.remove("show");
      }, 6000);
    }
  });
});

//----------------------------------------------------------------------



//----------------------------------------------------------------------

// Script da Revista Clicável
document.addEventListener('DOMContentLoaded', () => {
  const modelEntity = document.getElementById('revista1');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('fecharBtn');
  const popupImage = document.getElementById('popupImage');

  // --- Segurança: se o usuário quiser trocar a imagem dinamicamente ---
  // popupImage.src = 'imagens/exemplo.jpg'; // já definido no HTML

  // Função para abrir overlay
  function openOverlay() {
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
    // foco acessível no botão fechar
    closeBtn.focus();
  }

  // Função para fechar overlay
  function closeOverlay() {
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
    // optional: devolver foco para o canvas (A-Frame) ou para a câmera
    // document.querySelector('canvas').focus();
  }

  // Escuta clique no modelo GLTF
  // Use 'click' — funciona com o cursor de mouse do A-Frame
  modelEntity.addEventListener('click', (evt) => {
    // Se quiser garantir que o modelo esteja carregado, verifique:
    // evt.target.getAttribute('gltf-model') ou escute 'model-loaded' separadamente.
    openOverlay();
  });

  // Também aceita toque (por segurança)
  modelEntity.addEventListener('touchstart', (e) => {
    openOverlay();
  });

  // Fecha ao clicar no botão
  closeBtn.addEventListener('click', () => {
    closeOverlay();
  });

  // Fecha também ao apertar ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOverlay();
  });

  // Fecha se clicar fora da imagem interna (opcional)
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });
});
//----------------------------------------------------------------------

// Componente para redirecionar ao clicar
      AFRAME.registerComponent('link-to', {
        schema: { type: 'string' },
        init: function () {
          this.el.addEventListener('click', () => {
            window.open(this.data, '_blank'); // Abre em nova aba
          });
        }
      });

//----------------------------------------------------------------------
// MENU LATERAL
// MENU LATERAL
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const audioSettingsBtn = document.getElementById('audioSettingsBtn');
const audioMenu = document.getElementById('audioMenu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.toggle('show');

  // se fechar o menu lateral, fecha também o de áudio
  if (!sideMenu.classList.contains('show')) {
    audioMenu.style.display = 'none';
  }
});

// AUDIO SETTINGS
const masterVolume = document.getElementById('masterVolume');
const videoVolume = document.getElementById('videoVolume');
const musicVolume = document.getElementById('musicVolume');
const bgMusic = document.getElementById('bgMusic');

// pega todos os vídeos do site
const videos2 = document.querySelectorAll("video");

// toggle menu de áudio
audioSettingsBtn.addEventListener('click', () => {
  audioMenu.style.display = audioMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Função para aplicar volumes
function updateVolumes() {
  const master = parseFloat(masterVolume.value);
  
  // vídeos
  videos2.forEach(video => {
    video.volume = master * parseFloat(videoVolume.value);
  });

  // música de fundo
  bgMusic.volume = master * parseFloat(musicVolume.value);
}

// Eventos
masterVolume.addEventListener('input', updateVolumes);
videoVolume.addEventListener('input', updateVolumes);
musicVolume.addEventListener('input', updateVolumes);

// Inicializa valores ao carregar
updateVolumes();



//-----------------------------------------------------------------------
//

//----------------------------------------------------------------------
//REMOVER OS MOVIMENTOS DO TECLADO
document.addEventListener("DOMContentLoaded", () => {
  const rig = document.querySelector("#rig");
  if (rig) {
    rig.removeAttribute("wasd-controls"); 
    rig.removeAttribute("movement-controls");
  }
});

