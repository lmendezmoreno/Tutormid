import { supabase } from "../client";

export const getCourses = async () => {
  try {
    const { error, data } = await supabase
      .from("course")
      .select("*, course_category(name)");
    if (error) throw error;
    const newData = data.map((item) => ({ value: item.id, label: item.name }));
    return newData;
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};

export const getTypeStudents = async () => {
  try {
    const { error, data } = await supabase.from("type_study").select("*");
    if (error) throw error;
    const newData = data.map((item) => ({ value: item.id, label: item.name }));
    return newData;
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};

export const getNiveles = async () => {
  try {
    const { error, data } = await supabase.from("nivel").select("*");
    if (error) throw error;
    const newData = data.map((item) => ({ value: item.id, label: item.name }));
    return newData;
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};

export const getAds = async (size = 5, filters) => {
  try {
    const { error, data } = await supabase
      .from("ads")
      .select(
        "*, users_rol(photo_url,about_me, full_name, score, comments, id), course(name)"
      )
      .range(1, size);
    if (error) throw error;
    return data;
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};

export const getProfileTeacher = async(idTeacher, idAds) =>{
  try {
    const { error, data } = await supabase
      .from("ads")
      .select(
        "*, users_rol(*), course(name), nivel(name), type_study(name)"
      )
      .eq('id', idAds)
      .eq('uid_teacher',idTeacher);
    if (error) throw error;
    return data;
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
}

export const getCommentsByTeacher = async(idTeacher) =>{
  try {
    const { error, data } = await supabase
      .from("review")
      .select(
        "*, users_rol!uid_student(*)"
      )
      .eq('uid_teacher',idTeacher);
    if (error) throw error;
    return data;
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
}

const filtersAds = (filters) => {

}

