'use client';

import { createElement, useEffect } from 'react';

const PLAYER_ID = 'vid-69f61cddac9b67e415ce2412';
const PLAYER_SCRIPT =
  'https://scripts.converteai.net/a30937b9-5a3c-4cd5-bff6-7f6144148fd2/players/69f61cddac9b67e415ce2412/v4/player.js';

export default function Home() {
  useEffect(() => {
    if (document.getElementById('vturb-player-script')) return;

    const script = document.createElement('script');
    script.id = 'vturb-player-script';
    script.src = PLAYER_SCRIPT;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <main className="page-shell vsl-page">
      <section className="content">
        <h1>
          FAÇA <span>ELA G@Z4R</span> EM MENOS DE 5 MINUTOS
        </h1>

        <p>Assista até o final antes que esse vídeo saia do ar. 🔞</p>

        <div className="player-wrap">
          {createElement(
            'vturb-smartplayer',
            {
              id: PLAYER_ID,
              style: {
                display: 'block',
                margin: '0 auto',
                width: '100%',
                maxWidth: 'var(--player-vertical-width, 400px)',
              },
            },
            <div slot="preload" className="player-preload" key="preload">
              <div
                id="loading_69f61cddac9b67e415ce2412"
                className="player-loading"
              >
                <div className="player-spinner" />
                <div className="player-percentage">99%</div>
              </div>
            </div>,
          )}
        </div>
      </section>
    </main>
  );
}
