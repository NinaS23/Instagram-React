
const objPost = [{
  imageUser:"assets/img/meowed.svg",
  nameUser:  "meowed",
  imageContent:"assets/img/gato-telefone.svg",
  imageUserLikes: "assets/img/respondeai.svg" ,
  textLikes:"respondeai",
  textNumber: "outras 101.523 pessoas"
},
{
    imageUser:"assets/img/barked.svg",
    nameUser:  "  barked",
    imageContent:"assets/img/dog.svg",
    imageUserLikes: "assets/img/adorable_animals.svg" ,
    textLikes:"adorable_animals",
    textNumber: "outras 99.159 pessoas"  
}
]


function PostEstrutura(props){
    return (
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imageUser} />
           {props.nameUser}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imageContent}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imageUserLikes}/>
            <div class="texto">
              Curtido por <strong>{props.textLikes}</strong> e <strong>{props.textNumber}</strong>
            </div>
          </div>
        </div>
      </div>
    )
}



export default function Posts(){
    return (
        <>      
         {objPost.map((post)=>{
             return (
              <PostEstrutura 
              imageUser={post.imageUser}
              nameUser ={post.nameUser}
              imageContent={post.imageContent}
              imageUserLikes={post.imageUserLikes}
              textLikes={post.textLikes}
              textNumber={post.textNumber}
              
              />
             )
         })}
      </>
 
    )
}