import React from 'react';
import Slide from '../components/Slide.jsx';

export default class SliderView extends React.Component{

    constructor(props) {
        super(props);
        this.timeout=null;
        this.state = {
            selectedImgId:1,
            slides: [
                {
                    id:1,
                    height:'300px',
                    width:'300px',
                    src:'http://imgsv.imaging.nikon.com/lineup/lens/zoom/normalzoom/af-s_dx_18-140mmf_35-56g_ed_vr/img/sample/sample1_l.jpg'
                },
                {
                    id:2,
                    height:'300px',
                    width:'300px',
                    src:'https://kidskonnect.com/assets/uploads/2014/12/birds-featured.jpg'
                },
                {   id:3,
                    height:'300px',
                    width:'300px',
                    src:'http://webneel.com/daily/sites/default/files/images/daily/04-2013/9-bird-photography-by-geir.preview.jpg'
                },
                {   id:4,
                    height:'300px',
                    width:'300px',
                    src:'https://s-media-cache-ak0.pinimg.com/originals/88/19/20/8819208316ca67a31b621430803a5e88.jpg'
                },
                {   id:5,
                    height:'300px',
                    width:'300px',
                    src:'http://webneel.com/daily/sites/default/files/images/daily/04-2013/9-bird-photography-by-geir.preview.jpg'
                }
            ]
        }
    }
    scrollAction(direction){
        let slideCount = document.querySelectorAll('.slide').length;
        if(direction=='next'){
            if(this.state.selectedImgId==slideCount){
                this.setState({
                   selectedImgId:1
                })
            }else{
                let id = this.state.selectedImgId+1;
                this.setState({
                    selectedImgId:id
                })
            }
        }else{
            if(this.state.selectedImgId==1){
                this.setState({
                   selectedImgId:slideCount
                })
            }else{
                let id = this.state.selectedImgId-1;
                this.setState({
                    selectedImgId:id
                })
            }
        }
    } 
    componentDidMount(){
        this.timeout = setInterval(()=>{ this.scrollAction('next')}, 5000);

    }
    componentWillUnmount(){
        clearInterval(this.timeout);
    }
    render(){
        return(
            <div className='slider-wrapper'>
                <span className="arrow arrow-back" onClick={()=>this.scrollAction('back')}>                  
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                        <path d="M0-.5h24v24H0z" fill="none"/>
                    </svg>
                </span>                       
                <Slide selectedImgId={this.state.selectedImgId}  slides={this.state.slides}/>             
                <span className="arrow arrow-next" onClick={()=>this.scrollAction('next')}>
                    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        <path d="M0-.25h24v24H0z" fill="none"/>
                    </svg>
                </span>
            </div>
        );
    }


}