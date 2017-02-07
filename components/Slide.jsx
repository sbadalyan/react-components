import React from 'react';

export default class Slide extends React.Component {

    renderSlide(slide){
        return(
            <div key={slide.id} className={`slide ${(slide.id==this.props.selectedImgId)?'show':''}`}>
                <img src ={slide.src} height={slide.height} width={slide.width} />
            </div>
        );
    }
    renderSlideList(){
        return this.props.slides.map((slide)=>this.renderSlide(slide));
    }
    renderBullet(slide){
        return (
                <div key={slide.id}  className={`bullet ${(slide.id==this.props.selectedImgId)?'active':''}`}></div>
            );
    }
    renderBullets(){
      return this.props.slides.map((slide)=>this.renderBullet(slide));
    }
    render (){
        return(
            <div className='slider'>               
                {this.renderSlideList()}  
                <div className='bullet-wrapper'>{this.renderBullets()}</div>             
            </div>              
        );
    }
}