import styled from "styled-components";

export const CreatedUserPageDiv = styled.div`

    .createdCard{
        box-sizing: border-box;
        position: absolute;
        z-index: 1;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    
    .createdCard > div{
        display: flex;
        flex-direction: column;
        width: 465px;
        height: 636px;
        padding: 48px 81px 0 59px;
    
        background-color: white;
        box-shadow: 0.3px 0.3px 8px #ddd, -0.3px -0.3px 8px #ddd;
    }

    .createdCard h1{
        margin: 0 auto;

        font-size: 36px;
        font-weight: 500;
        line-height: 48px;
    }

    .createdCard span{
        margin-top: 20px;

        font-size: 14px;
        font-weight: 500;
        color: #8C98A9;
    }

    .createdCard p{
        margin-top: 7px;
        font-size: 22px;
        font-weight: 400;
        line-height: 30px;
    }

    .createdCard .email{
        padding-bottom: 20px;
        border-bottom: 1px solid var(--grey-0);
    }

    .createdCard > div > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-top: 20px;
    }

    .createdCard Button{
        position: absolute;
        bottom: 35px;
        left: 40px;

        width: 380px;
    }

    @media (max-width: 1400px){
        
        .createdCard > div{
            width: 415px;
            height: 565px;
            padding: 42px 72px 0 53px;
        }

        .createdCard h1{
            font-size: 32px;
            line-height: 43px;
        }

        .createdCard span{
            margin-top: 18px;

            font-size: 13px;
        }

        .createdCard p{
            font-size: 20px;
            line-height: 27px;
        }

        .createdCard .email{
            padding-bottom: 18px;
        }

        .createdCard > div > div{
            margin-top: 18px;
        }

        .createdCard Button{
            bottom: 32px;
            left: 36px;

            width: 338px;
        }
    }

    @media (max-width: 1250px){
        
        .createdCard > div{
            width: 330px;
            height: 452px;
            padding: 34px 58px 0 42px;
        }

        .createdCard h1{
            font-size: 26px;
            line-height: 34px;
        }

        .createdCard span{
            margin-top: 14px;

            font-size: 10px;
        }

        .createdCard p{
            margin-top: 6px;
            font-size: 16px;
            line-height: 22px;
        }

        .createdCard .email{
            padding-bottom: 14px;
        }

        .createdCard > div > div{
            margin-top: 14px;
        }

        .createdCard Button{
            bottom: 25px;
            left: 28px;

            width: 270px;
        }
    }

    @media (max-width: 1000px){

        .createdCard > div{
            width: 258px;
            height: 355px;
            padding: 27px 45px 0 33px;
        }

        .createdCard h1{
            font-size: 20px;
            line-height: 27px;
        }

        .createdCard span{
            margin-top: 12px;

            font-size: 8px;
        }

        .createdCard p{
            margin-top: 4px;
            font-size: 13px;
            line-height: 17px;
        }

        .createdCard .email{
            padding-bottom: 12px;
        }

        .createdCard > div > div{
            margin-top: 12px;
        }

        .createdCard Button{
            bottom: 20px;
            left: 22px;

            width: 212px;
        }
    }
`