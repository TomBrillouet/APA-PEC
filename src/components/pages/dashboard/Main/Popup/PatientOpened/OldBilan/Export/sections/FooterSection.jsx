export default function FooterSection({ pro }) {
  return (
    <>
      <p>
        Ce bilan constitue le point de départ de votre accompagnement.
        L'objectif est de progresser à votre rythme en toute sécurité.
      </p>
      <hr />
      <div className="center">
        <p>
          Merci de votre confiance. Pour toute question ou pour planifier la
          prochaine séance, n'hésitez pas à me contacter.
        </p>
        <p>
          <em>
            Document remis au patient à l'issue du bilan initial en Activité
            Physique Adaptée - {pro.firstName} {pro.lastName}
          </em>
        </p>
      </div>
    </>
  )
}
