import styled from "styled-components";

const StyledSlider = styled.div`
max-width: 1180px;
margin: 0 auto;
padding: 122px 0 108px;
background-color: #fff;

.group-button{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 60px 0;
 
    

    .itemActive{
        background: linear-gradient(#5D91F4, #9E5CB6);
    }
    .btn-el:hover{
        background: linear-gradient(#5D91F4, #9E5CB6);
        }
    }
    .button-ellement:hover{
        cursor: pointer;
    }
}
.slick-slider{
    touch-action: none;
    padding-top: 60px;
    max-width: 1180px;
    .slick-dots{
        bottom: 600px;
        .slick-active{
            .btn-el{
            background: linear-gradient(#5D91F4, #9E5CB6);
            }
        }
        li{
            width: 130px;
            height: 64px;
            border-radius: 5px;
            margin: 0 5px;
        .nFlex{
            display: grid;
            justify-items: center;
        }
        .btn-el{
            width: 64px;
            background-color: #274490;
        }

        svg{
            width: 64px;
            padding-top: 15px;
            height: 44px;
        }

        .textDots{
            font-size: 16px;
            padding-top: 10px;
        }

        

        .btn-el:hover{
        background: linear-gradient(#5D91F4, #9E5CB6);
        }
    }
    }
    .carousel-slide{
        display: flex !important;
        margin: 0 auto;
        align-items: center;
        justify-content: space-evenly;
        .image-slide{
            padding: 0px;
            height: 507px;
        }
        .text-slide{
            max-width: 380px;
            height: 260px;
            .text-slide-t{
                font-size: 20px;
                line-height: 28px;
            }
            .text-slide-head{
                font-size: 34px;
                line-height: 34px;
            }
        }
            
    }


    @keyframes loading {
            from {
            width: 100%;
            }

            to {
            width: 0%;
            }
        }

        .loader-line{
            width: 300px;
            height: 3px;
            position: relative;
            overflow: hidden;
            background-color: #ddd;
            margin: 5px auto;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            bottom: -80px;
        }

        .slick-active .loader-line {
            transition: width 0.3s ease-in-out;
        }

        .slick-active .loader-line {
            width: 300px;
            transition: width 0.3s ease-in-out;
        }
        .slick-active{
            .loading {
                height: 8px;
                animation: loading 5s ease-in;
                background-image: linear-gradient(#5D91F4, #9E5CB6);
                display: inline-block;
                position: absolute;
                top: 0;
                left: 0;
                border-radius: 4px;
            }
        }
    

`;

export default StyledSlider;