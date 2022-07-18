import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCountries } from "../Redux/action";

const Homepage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state)=>state.countries)
  useEffect(()=>{
    getCountry()
  },[])
  const getCountry = ()=>{
    axios.get("http://localhost:8080/countries")
    .then(res=>{
      dispatch(getCountries(res.data))
    })
  }
  const handledelete=(id)=>{
    axios.delete(`http://localhost:8080/todos/${id}`).then(getCountry)
}
  console.log(countries);
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {countries.map((e)=>(
              <Tr key={e.id}>
                <Td>{e.country}</Td>
                <Td>{e.city}</Td>
                <Td>{e.population}</Td>
                <Td><button>Edit</button></Td>
                <Td><button onClick={()=>{
                  handledelete(e.id)
                }}>Delete</button></Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
