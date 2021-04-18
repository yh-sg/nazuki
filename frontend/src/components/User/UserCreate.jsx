import React, {useState} from 'react'
import {Form, Button, Col} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import addDays from "date-fns/addDays"
import subDays from "date-fns/subDays"

import "react-datepicker/dist/react-datepicker.css";

export default function UserCreate() {

    const [startDate, setStartDate] = 
        useState(setHours(setMinutes(new Date(), 0), 17));

    const highlightWithRanges = [
        {
            "react-datepicker__day--highlighted-custom-1": [
            subDays(new Date(), 4),
            addDays(new Date(), 1)
            ]
        },
        {
            "react-datepicker__day--highlighted-custom-2": [
                addDays(new Date(), 1)            
            ]
        }
        ];

    const filterPassedTime = time => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
    }

    return (
        <div>
            <Form className="form-border mt-3 p-4">
                <h1>Creating</h1>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Occasion?</Form.Label>
                    <Form.Control as="select" defaultValue="Mahjong">
                        <option>Mahjong</option>
                        <option>Drinking</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Card Game</option>
                        <option>Karaoke</option>
                        <option>Others</option>
                    </Form.Control>
                </Form.Group>

                <DatePicker 
                    selected={startDate} 
                    onChange={date => setStartDate(date)}
                    closeOnScroll={true}
                    monthsShown={3}
                    minDate={new Date()}
                    showTimeSelect
                    filterTime={filterPassedTime}
                    minTime={setHours(setMinutes(new Date(), 30), 8)}
                    maxTime={setHours(setMinutes(new Date(), 0), 21)}
                    dateFormat="MMMM d, h:mm aa"
                    highlightDates={highlightWithRanges}
                />

                <div className="mt-3">
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>

        </div>
    )
}
