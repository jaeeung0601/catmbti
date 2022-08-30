import React from "react";
import Button from 'react-bootstrap/Button'
const {Kakao} = window;

const KakaoShareButton = ({data}) =>{
    const url = "https://catmbtichoi.netlify.app/"
    const resultUrl = window.location.href;
    console.log('data',data)
    React.useEffect(()=>{
        Kakao.cleanup()
        Kakao.init("f0facc66ff663e4a253b31b13bf86ce6")
        console.log(Kakao.isInitialized)
    },[])
    const shareKakao = () =>{
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '예비집사 판별기 결과',
          description: `예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는 ${data.name}입니다.`,
          imageUrl: url+data.image ,
          link: {
            mobileWebUrl: resultUrl,
            webUrl : resultUrl
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: url,
              webUrl : url
            },
          }
        ]
      });
    }
      return(<Button onClick={shareKakao} style={{marginLeft:10}}>카카오톡 공유하기</Button>)
}
export default KakaoShareButton