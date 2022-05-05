

const objUsuario = [{
  imgUser : "assets/img/catanacomics.svg",
  nameUser: "catanacomics",
  textUser : "Catana",
  alt : "user foto",
  key:1
}]




function Usuario(props){
  return (
    <>
    <div class="usuario">
      <img key={props.key} src={props.imgUser} alt={props.alt} />
      <div class="texto">
        <strong>{props.nameUser}</strong>
       {props.textUser}
      </div>
    </div>
    </>
  )
}

const objSugestions =[{

  image: "assets/img/bad.vibes.memes.svg",
  user: "bad.vibes.memes",
  action: "Segue você",
  key:1

},
{
  image: "assets/img/chibirdart.svg",
  user: "chibirdart",
  action: "Segue você",
  key:2

},
{
  image: "assets/img/razoesparaacreditar.svg",
  user: "razoesparaacreditar",
  action: "Novo no Instagram",
  key:3

},
{
  image: "assets/img/adorable_animals.svg",
  user: "adorable_animals",
  action: "Segue você",
  key:4

},
{
  image: "assets/img/smallcutecats.svg",
  user: "smallcutecats",
  action: "Segue você",
  key: 5

}]


function Sugestoes(props){
  return (
    <div class="sugestao">
      <div class="usuario">
        <img key={props.key} src={props.image} alt="foto de perfil" />
        <div class="texto">
          <div class="nome">{props.user}</div>
          <div class="razao">{props.action}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>

  )
}
export default function sugestions(){
    return (
      <div class="sidebar">
        {objUsuario.map((user) => {
          return (
            <Usuario
              imgUser={user.imgUser}
              nameUser={user.nameUser}
              textUser={user.textUser}
              alt={user.alt}
              key={user.key}
            />
          )
        })}

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
            {objSugestions.map((sugest)=>{
              return (
                <Sugestoes

                    image={sugest.image}
                    user={sugest.user}
                    action={sugest.action}
                    key={sugest.key}
                 />
              )
            })}
   
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}