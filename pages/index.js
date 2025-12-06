import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Les Caractéristiques du Chou-Fleur</title>
        <meta name="description" content="Guide complet sur les caractéristiques du chou-fleur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header>
          <h1>🥦 Les Caractéristiques du Chou-Fleur</h1>
          <p className="subtitle">Guide complet sur ce légume nutritif</p>
        </header>

        <main>
          <section className="card">
            <h2>📋 Informations Générales</h2>
            <div className="info-grid">
              <div className="info-item">
                <strong>Nom scientifique:</strong> Brassica oleracea var. botrytis
              </div>
              <div className="info-item">
                <strong>Famille:</strong> Brassicacées
              </div>
              <div className="info-item">
                <strong>Origine:</strong> Proche-Orient et bassin méditerranéen
              </div>
              <div className="info-item">
                <strong>Saison:</strong> Automne et hiver (septembre à mars)
              </div>
            </div>
          </section>

          <section className="card">
            <h2>🎨 Caractéristiques Physiques</h2>
            <ul className="feature-list">
              <li>
                <strong>Forme:</strong> Inflorescence compacte en forme de tête arrondie
              </li>
              <li>
                <strong>Couleur:</strong> Généralement blanc crème, mais existe aussi en violet, orange et vert
              </li>
              <li>
                <strong>Texture:</strong> Florets denses et granuleuses, enveloppés de feuilles vertes
              </li>
              <li>
                <strong>Taille:</strong> Peut atteindre 15-30 cm de diamètre
              </li>
              <li>
                <strong>Poids:</strong> 500g à 2kg en moyenne
              </li>
            </ul>
          </section>

          <section className="card">
            <h2>🌱 Caractéristiques Botaniques</h2>
            <ul className="feature-list">
              <li>
                <strong>Type de plante:</strong> Plante potagère bisannuelle
              </li>
              <li>
                <strong>Structure:</strong> La partie comestible est une inflorescence immature
              </li>
              <li>
                <strong>Croissance:</strong> Nécessite 3-5 mois de culture
              </li>
              <li>
                <strong>Climat:</strong> Préfère les températures fraîches (15-20°C)
              </li>
              <li>
                <strong>Sol:</strong> Riche, bien drainé et légèrement alcalin
              </li>
            </ul>
          </section>

          <section className="card highlight">
            <h2>💪 Valeurs Nutritionnelles</h2>
            <p className="nutrition-intro">Pour 100g de chou-fleur cru:</p>
            <div className="nutrition-grid">
              <div className="nutrient">
                <span className="nutrient-value">25</span>
                <span className="nutrient-label">kcal</span>
              </div>
              <div className="nutrient">
                <span className="nutrient-value">92%</span>
                <span className="nutrient-label">Eau</span>
              </div>
              <div className="nutrient">
                <span className="nutrient-value">2g</span>
                <span className="nutrient-label">Protéines</span>
              </div>
              <div className="nutrient">
                <span className="nutrient-value">5g</span>
                <span className="nutrient-label">Glucides</span>
              </div>
              <div className="nutrient">
                <span className="nutrient-value">2g</span>
                <span className="nutrient-label">Fibres</span>
              </div>
              <div className="nutrient">
                <span className="nutrient-value">0.3g</span>
                <span className="nutrient-label">Lipides</span>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>✨ Vitamines et Minéraux</h2>
            <div className="vitamins-grid">
              <div className="vitamin-card">
                <h3>Vitamine C</h3>
                <p>48mg (80% des AJR)</p>
                <span className="badge">Excellent</span>
              </div>
              <div className="vitamin-card">
                <h3>Vitamine K</h3>
                <p>16µg (20% des AJR)</p>
                <span className="badge">Bon</span>
              </div>
              <div className="vitamin-card">
                <h3>Folate (B9)</h3>
                <p>57µg (14% des AJR)</p>
                <span className="badge">Bon</span>
              </div>
              <div className="vitamin-card">
                <h3>Potassium</h3>
                <p>299mg</p>
                <span className="badge">Bon</span>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>🍽️ Caractéristiques Culinaires</h2>
            <ul className="feature-list">
              <li>
                <strong>Goût:</strong> Doux et légèrement sucré
              </li>
              <li>
                <strong>Texture après cuisson:</strong> Tendre et fondante
              </li>
              <li>
                <strong>Modes de préparation:</strong> Cru, vapeur, rôti, purée, gratin, sauté
              </li>
              <li>
                <strong>Polyvalence:</strong> Peut remplacer les féculents (riz de chou-fleur, pizza)
              </li>
              <li>
                <strong>Conservation:</strong> 5-7 jours au réfrigérateur
              </li>
            </ul>
          </section>

          <section className="card">
            <h2>🏥 Bienfaits pour la Santé</h2>
            <div className="benefits-grid">
              <div className="benefit">
                <div className="benefit-icon">🛡️</div>
                <h3>Antioxydants</h3>
                <p>Riche en glucosinolates et flavonoïdes</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">💓</div>
                <h3>Santé cardiovasculaire</h3>
                <p>Aide à réduire le cholestérol</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🧠</div>
                <h3>Santé cognitive</h3>
                <p>Choline pour le cerveau</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">⚖️</div>
                <h3>Contrôle du poids</h3>
                <p>Faible en calories, riche en fibres</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🦴</div>
                <h3>Santé osseuse</h3>
                <p>Vitamine K pour les os</p>
              </div>
              <div className="benefit">
                <div className="benefit-icon">🔬</div>
                <h3>Anti-cancer</h3>
                <p>Composés sulfurés protecteurs</p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>🌍 Variétés Principales</h2>
            <div className="varieties-grid">
              <div className="variety-card white">
                <h3>Blanc</h3>
                <p>Variété classique, la plus commune</p>
              </div>
              <div className="variety-card purple">
                <h3>Violet</h3>
                <p>Riche en anthocyanes</p>
              </div>
              <div className="variety-card orange">
                <h3>Orange</h3>
                <p>25% plus de vitamine A</p>
              </div>
              <div className="variety-card green">
                <h3>Vert (Romanesco)</h3>
                <p>Forme fractale unique</p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2>⚠️ Précautions</h2>
            <ul className="feature-list">
              <li>Peut causer des ballonnements chez certaines personnes</li>
              <li>Contient des goitrogènes (attention pour troubles thyroïdiens)</li>
              <li>Interaction possible avec anticoagulants (vitamine K)</li>
              <li>Choisir des têtes fermes, sans taches brunes</li>
            </ul>
          </section>
        </main>

        <footer>
          <p>© 2025 - Guide des Caractéristiques du Chou-Fleur</p>
        </footer>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        header {
          text-align: center;
          color: white;
          padding: 40px 20px;
          margin-bottom: 30px;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        .subtitle {
          font-size: 1.3rem;
          opacity: 0.95;
        }

        main {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card.highlight {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #333;
          border-bottom: 3px solid #667eea;
          padding-bottom: 10px;
        }

        .card.highlight h2 {
          color: white;
          border-bottom-color: white;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 15px;
        }

        .info-item {
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #667eea;
        }

        .feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .feature-list li {
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #764ba2;
          line-height: 1.6;
        }

        .nutrition-intro {
          text-align: center;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }

        .nutrition-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
        }

        .nutrient {
          text-align: center;
          padding: 20px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }

        .nutrient-value {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .nutrient-label {
          display: block;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .vitamins-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .vitamin-card {
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 12px;
          text-align: center;
        }

        .vitamin-card h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .vitamin-card p {
          margin-bottom: 10px;
          font-size: 1.1rem;
        }

        .badge {
          display: inline-block;
          padding: 5px 15px;
          background: rgba(255,255,255,0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .benefit {
          padding: 25px;
          background: #f8f9fa;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit:hover {
          background: #667eea;
          color: white;
          transform: scale(1.05);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .benefit h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .benefit p {
          font-size: 0.95rem;
          opacity: 0.8;
        }

        .varieties-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .variety-card {
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          color: white;
          font-weight: bold;
        }

        .variety-card.white {
          background: linear-gradient(135deg, #e0e0e0 0%, #bdbdbd 100%);
          color: #333;
        }

        .variety-card.purple {
          background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
        }

        .variety-card.orange {
          background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
        }

        .variety-card.green {
          background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
        }

        .variety-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        footer {
          text-align: center;
          padding: 40px 20px;
          color: white;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .card {
            padding: 20px;
          }

          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
