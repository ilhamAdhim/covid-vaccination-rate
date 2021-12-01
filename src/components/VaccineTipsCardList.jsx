import React from 'react'
import { Col, Row } from 'antd';
import VaccineTipsCardItem from './VaccineTipsCardItem';
import pendaftaranImage from '../assets/pendaftaran.svg';
import badanFitImage from '../assets/badan-fit.svg';
import kebutuhanTubuhImage from '../assets/kebutuhan-tubuh.svg';
import tidurCukupImage from '../assets/tidur-cukup.svg';
import suhuTubuhImage from '../assets/suhu-tubuh.svg';
import cekPenyakitImage from '../assets/cek-penyakit.svg';

const cardItems = [
    {
        id: 1,
        img: pendaftaranImage,
        title: 'Lakukan Pendaftaran',
        desc: 'Hindari datang langsung ke rumah sakit atau puskesmas tanpa melakukan perjanjian. Pastikan juga nama Anda sudah terdaftar dalam antrean vaksinasi Covid-19.',
    },
    {
        id: 2,
        img: badanFitImage,
        title: 'Memastikan Kondisi Badan Fit',
        desc: 'memperhatikan kondisi bada sebelum divaksin sangat penting.',
    },
    {
        id: 3,
        img: kebutuhanTubuhImage,
        title: 'Penuhi Kebutuhan Tubuh',
        desc: 'Memperhatikan kondisi bada sebelum divaksin sangat penting.',
    },
    {
        id: 4,
        img: tidurCukupImage,
        title: 'Tidur Cukup dan Olahraga',
        desc: 'Melakukan istirahat, menjalani gaya hidup sehat, tidak mengkonsumsi alkohol, tidak merokok melakukan olahraga dengan rutin adalah hal-hal yang dianjurkan dilakukan sebelum vaksin Covid-19.',
    },
    {
        id: 5,
        img: suhuTubuhImage,
        title: 'Suhu Tubuh dan Tekanan Darah Normal',
        desc: 'Suhu tubuh normal yang boleh untuk melakukan vaksinasi adalah di bawah 37,3 derajat celcius dan tekanan darah di bawah 180 per 110.',
    },
    {
        id: 6,
        img: cekPenyakitImage,
        title: 'Cek Penyakit yang Tak Boleh Vaksinasi',
        desc: 'Untuk penderita Diabetes, vaksinasi bisa dilakukan jika kondisi kadar gulanya terkontrol. Sementara itu, penyintas kanker dapat tetap diberikan vaksin dengan syarat sudah tidak menjalani terapi imunosupresi.',
    },
]

const VaccineTipsCardList = ({dataSource, role}) => {
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(dataSource.length / 4))];

    // chunk the items into the array of rows. 
    // 1 rows 3 columns
    const listRows = rows.map((row, idx) => dataSource.slice(idx * 3, idx * 3 + 3));

    return (
        <div style={{textAlign: 'center',background: 'rgba(255, 226, 226, 0.24)'}}>
            {listRows.map((row, idx) => (
                <Row key={idx} style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}} type="flex" align="middle">
                    {cardItems.map(item =>
                        <Col style={{padding: '1.5em 2.5em' }}
                            flex={0} key={item.id || item}> <VaccineTipsCardItem img={item.img} title={item.title} desc={item.desc} />
                        </Col>
                    )}
                </Row>
            ))}
        </div>
    )
}

export default VaccineTipsCardList;
