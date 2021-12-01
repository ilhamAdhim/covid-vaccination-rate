import React from 'react'
import { Col, Row } from 'antd';
import '../styles/style.css';
import HygieneCardItem from './HygieneCardItem';
import noTissueImage from '../assets/no-tissue.svg';
import usingTissueImage from '../assets/using-tissue.svg';
import throwAwayTissueImage from '../assets/throw-away-tissue.svg';
import washingHandsImage from '../assets/washing-hands.svg';


const cardItems = [
    {
        id: 1,
        img: usingTissueImage,
        desc: 'Tutup hidung dan mulut Anda dengan menggunakan tisu/saputangan.',
    },
    {
        id: 2,
        img: noTissueImage,
        desc: 'Jika tidak ada tisu, bisa gunakan tangan atau lengan dalam baju Anda.',
    },
    {
        id: 3,
        img: throwAwayTissueImage,
        desc: 'Segera buang tisu yang sudah dipakai ke dalam tempat sampah.',
    },
    {
        id: 4,
        img: washingHandsImage,
        desc: 'Cuci tangan menggunakan air bersih dan sabun.',
    },
]

const HygieneCardList = ({dataSource, role}) => {
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(dataSource.length / 4))];

    // chunk the items into the array of rows. 
    // 1 rows 3 columns
    const listRows = rows.map((row, idx) => dataSource.slice(idx * 3, idx * 3 + 3));

    return (
        <div className="tips-kesehatan-page" style={{textAlign: 'center'}}>
            {listRows.map((row, idx) => (
                <Row key={idx} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} type="flex" align="middle">
                    {cardItems.map(item =>
                        <Col style={{padding: '1.5em 2.5em' }}
                            flex={0} key={item.id || item}> <HygieneCardItem img={item.img} desc={item.desc} />
                        </Col>
                    )}
                </Row>
            ))}
        </div>
    )
}

export default HygieneCardList;
