import React, { useState, useEffect } from "react";
import { NewSelect } from "../../../Components/Elements/NewSelect/NewSelect";
import { FilterStyled } from "./Styles";
import Button from "../../../Components/Elements/Button/Button";
import { FiFilter } from "react-icons/fi";

import {
  getCourses,
  getNiveles,
  getTypeStudents,
} from "../../../supabase/services/ads";
import { toast } from "react-toastify";

export default function Filter({setFilters, filters}) {
  const [listCourses, setListCourses] = useState([]);
  const [listNiveles, setNiveles] = useState([]);
  const [listTypeStudents, setlistTypeStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resCourses = await getCourses();
      if (resCourses.status == 500) throw resCourses.message;
      setListCourses(resCourses);
     
      const resTypeStudent = await getTypeStudents();
      if (resTypeStudent.status == 500) throw resTypeStudent.message;
      setlistTypeStudents(resTypeStudent);

      const resNiveles = await getNiveles();
      if (resNiveles.status == 500) throw resNiveles.message;
      setNiveles(resNiveles);
    } catch (error) {
      toast.error(error.toString(), {
        position: toast.POSITION.TOP_RIGHT,
      });
    } 
  };

  const [selectedMaterias, setSelectedMaterias] = useState(null);
  function handleMaterias(option) {
    setSelectedMaterias(option);
    changeFilter('idcurso', option===null?null:option.value);
  }

  const [selectedType, setSelectedType] = useState(null);
  function handleType(option) {
    setSelectedType(option);
    changeFilter('idtipo', option===null?null:option.value)
  }

  const [selectedLevel, setSelectedLevel] = useState(null);
  function handleLevel(option) {
    setSelectedLevel(option);
    console.log(option,'ayer')
    changeFilter('idnivel', option===null?null:option.value);
  }

  const disponibilityList = [];

  const [selectedDisponibility, setSelectedDisponibility] = useState(null);
  function handleDisponibility(option) {
    setSelectedDisponibility(option);
  }

  function clearFilters() {
    handleMaterias(null);
    handleLevel(null);
    handleType(null);
  }

  const changeFilter = (name, value) =>{
    setFilters({...filters, [name]:value})
  }

  return (
    <FilterStyled>
      <div className="container mb-1">
        <div className="row">
          <div className="col-12 col-md-2">
            <p>Aprendo:</p>
            <NewSelect
              options={listCourses}
              value={selectedMaterias}
              onChange={handleMaterias}
              isSearchable
              placeholder="Materia"
            />
          </div>

          <div className="col-12 col-md-10">
            <p>Filtrar profesores por </p>
            <div className="teacher-filter">
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3 mb-4">
                  <NewSelect
                    options={listTypeStudents}
                    placeholder="Dirigido a"
                    value={selectedType}
                    onChange={handleType}
                  />
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-4">
                  <NewSelect
                    options={disponibilityList}
                    placeholder="Disponibilidad"
                    value={selectedDisponibility}
                    onChange={handleDisponibility}
                  />
                </div>

                <div className="col-12 col-sm-4 col-md-3 mb-4">
                  <NewSelect
                    options={listNiveles}
                    value={selectedLevel}
                    placeholder="Niveles"
                    onChange={handleLevel}
                  />
                </div>

                <div className="col-12 col-md-3 ">
                  <Button
                    text="Limpiar Filtros"
                    icon={<FiFilter />}
                    color="outline-blue"
                    onClick={clearFilters}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FilterStyled>
  );
}
