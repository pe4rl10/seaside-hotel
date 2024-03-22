import React, { useEffect, useState } from 'react'
import { getAllRooms } from '../utils/ApiFunctions';
import RoomCard from './RoomCard';
import { Col, Container, Row } from 'react-bootstrap';
import RoomFilter from '../common/RoomFilter';

const Room = () => {
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[roomsPerPage] = useState(6);
    const[filteredData, setFilteredData]= useState([{id: ""}]);

    useEffect(() => {
        setIsLoading(true);
        getAllRooms().then((data) => {
            setData(data);
            setFilteredData(data);
            setIsLoading(false);
        }).catch((error) => {
            setError(error.message);
            setIsLoading(false);
        })
    }, [])

    if(isLoading) {
        return <div>Loading rooms...</div>
    }

    if(error) {
        return <div className='text-danger'>Error : {error}</div>
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const totalPages = Math.ceil(filteredData.length/roomsPerPage);

    const rendeerRooms  = () => {
        const startIndex = (currentPage - 1) * roomsPerPage;
        const endIndex = startIndex + roomsPerPage;
        return filteredData
            .slice(startIndex, endIndex)
            .map((room) => <RoomCard key={room.id} room={room}/>);
    }

    return (
        <Container>
            <Row>
                <Col md={6} className='mb-3 mb-md-0'>
                    <RoomFilter data={data} setFilteredData={setFilteredData}/>           
                </Col>
            </Row>
        </Container>
    )
}

export default Room