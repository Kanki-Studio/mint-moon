import { 
    HiDocument,
    HiDocumentText,
    HiOutlineArrowPath,
    HiMiniShieldExclamation, 
} from 'react-icons/hi2'

export const NFT_COLLECTION = [
    {name: 'Digital cape', nftImg: "/nft_1.jpg", price: 0.0099},
    {name: 'Digital Dream Spe', nftImg: "/nft_2.jpg", price: 0.019},
    {name: 'Digital Dream', nftImg: "/nft_3.jpg", price: 0.0029},
    {name: 'Digital Dream Scape', nftImg: "/nft_4.jpg", price: 0.0099},
    {name: 'Dream Scape', nftImg: "/nft_5.jpg", price: 0.008},
    {name: 'Dig Dream Scape', nftImg: "/nft_6.jpg", price: 0.09},
    {name: 'Digital Drea', nftImg: "/nft_7.jpg", price: 0.013},    
    {name: 'Digital Drem Spe', nftImg: "/nft_2.jpg", price: 0.019},
    {name: 'Digitaream', nftImg: "/nft_3.jpg", price: 0.0029},
    {name: 'tal Dream Scape', nftImg: "/nft_4.jpg", price: 0.0099},
    {name: 'Dream pe', nftImg: "/nft_5.jpg", price: 0.008},
    {name: 'Di eam Scape', nftImg: "/nft_6.jpg", price: 0.09},
];

export const HOW_IT_WORKS = [
    {
        icon: HiDocument, 
        title: 'Review your case', 
        text: `Performing preliminary checks to assess whether the 
        case can result in a substantial  recovery, based on our expericene`
    },
    {
        icon: HiDocumentText,
        title: 'Gather the evidence',
        text: `Collecting all the information and documentation 
        required to successfully pursue your case.`
    },
    {
        icon: HiMiniShieldExclamation,
        title: 'Confront the entities',
        text: `Systematically confronting the relevant 
        entities that have facilitated the illict transfer of your wealth.`
    },
    {
        icon: HiOutlineArrowPath,
        title: 'Get your money back',
        text: `We take pride in our track record and assure you that 
        we'll go to great lengthss to get your money back.`
    }
]

export const PRICING_DATA = [
    {level: 'BASIC', price: 9.00, features: ['Trading up to $100K per mouth','Send and receive over 85 tokens','Real time crypto trading','IOS and Android App']},
    {level: 'PRO', price: 18.00, features: ['Everything included in Basic','Trading up to $1MM per mouth','Windows & macOs App','Premium Support']},
    {level: 'EXPERT', price: 99.00, features: ['Everything included in Expert','Trading up $10MM per mouth','Windows & macOs App','Dedicated Support']}
]  
