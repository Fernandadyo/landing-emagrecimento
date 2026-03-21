/* eslint-disable */
export default function ImageCube() {
  const faces = [
    { src: '/images/resultado-corpo.jpg',  alt: 'Corpo conquistado' },
    { src: '/images/bikini-resultado.jpg', alt: 'Resultado na praia' },
    { src: '/images/vida-social.jpg',      alt: 'Vida social plena' },
    { src: '/images/festa-danca.jpg',      alt: 'Celebrando a vida' },
    { src: '/images/rotina-cafe.jpg',      alt: 'Na rotina do dia a dia' },
    { src: '/images/perfil-lateral.jpg',   alt: 'Perfil fitness' },
  ]
  const faceClasses = ['face-front','face-back','face-right','face-left','face-top','face-bottom']

  return (
    <div className="cube-scene mx-auto">
      <div className="cube">
        {faces.map((f, i) => (
          <div key={i} className={`cube-face ${faceClasses[i]}`}>
            <img src={f.src} alt={f.alt} />
          </div>
        ))}
      </div>
    </div>
  )
}
