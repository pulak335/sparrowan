import React, { useEffect } from 'react';

//========import all tech icons ===========
import JS from '../../assets/tech/js-2.png'
import Angular from '../../assets/tech/angular-logo.png'
import ArVr from '../../assets/tech/ar,vr .png'
import Cs from '../../assets/tech/csharp_256x256.png'
import Docker from '../../assets/tech/docker.png'
import Fire from '../../assets/tech/fire.png'
import Go from '../../assets/tech/golang.png'
import Flutter from '../../assets/tech/google-flutter-256.png'
import Html from '../../assets/tech/html.png'
import Java from '../../assets/tech/java.png'
import Kotlin from '../../assets/tech/kotlin.png'
import Azure from '../../assets/tech/logo_azure.svg'
import Nest from '../../assets/tech/nest.png'
import Nodejs from '../../assets/tech/nodejs.png'
import Php from '../../assets/tech/php.png'
import Python from '../../assets/tech/python_256x256.png'
import Reactlogo from '../../assets/tech/react.png'
import ReactN from '../../assets/tech/react-native.png'
import Reduxlogo from '../../assets/tech/redux-logo.png'
import Slack from '../../assets/tech/slak.png'
import Swift from '../../assets/tech/swift.jpg'
import TS from '../../assets/tech/ts.png'
import Vue from '../../assets/tech/vue-js.png'
import Image from 'next/image';
import { Container } from 'react-bootstrap';


//========import all tech icons ===========


const techinfos = [
    {
        id:1,
        name:'JavaScript',
        icon:JS
    },
    {
        id:2,
        name:'Angular',
        icon:Angular
    },
    {
        id:3,
        name:'AR/VR',
        icon:ArVr
    },
    {
        id:4,
        name:'C Sharp',
        icon:Cs
    },
    {
        id:5,
        name:'Docker',
        icon:Docker
    },
    {
        id:6,
        name:'Firebase',
        icon:Fire
    },
    {
        id:7,
        name:'Go lang',
        icon:Go
    },
    {
        id:8,
        name:'Flutter',
        icon:Flutter
    },
    {
        id:9,
        name:'HTML',
        icon:Html
    },
    {
        id:10,
        name:'Java',
        icon:Java
    },
    {
        id:11,
        name:'Kotlin',
        icon:Kotlin
    },
    {
        id:12,
        name:'Azure',
        icon:Azure
    },
    {
        id:13,
        name:'Nest JS',
        icon:Nest
    },
    {
        id:14,
        name:'Node JS',
        icon:Nodejs
    },
    {
        id:15,
        name:'PHP',
        icon:Php
    },
    {
        id:16,
        name:'Python',
        icon:Python
    },
    {
        id:17,
        name:'React',
        icon:Reactlogo
    },
    {
        id:17,
        name:'React Native',
        icon:ReactN
    },
    {
        id:18,
        name:'Redux',
        icon:Reduxlogo
    },
    {
        id:19,
        name:'Slack',
        icon:Slack
    },
    {
        id:20,
        name:'Swift',
        icon:Swift
    },
    {
        id:21,
        name:'TypeScript',
        icon:TS
    },
    {
        id:22,
        name:'Vue',
        icon:Vue
    },
]


const Tech = () => {
        return (
            <Container>
                <h1 className='section-tille'>Technology Partners</h1>
                <div className='row'>
                    {
                        techinfos.map(item=>(
                                <div className="col-4 col-md-1 col-lg-1  p-4 " key={item.id}>
                                    <Image src={item.icon} alt={item.name} height={50} width={50}/>
                                </div>
                        ))
                    }
                </div>
            </Container>
        );
};

export default Tech;