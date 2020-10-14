import { Agenda } from '../data/AgendaPacientes'


export const loadDiary = ( uid )=>{
    
    const diarySnap =  Agenda.filter( agenda => agenda.uid === uid);

    const diary=[];

    diarySnap.forEach(snapHijo =>{
        diary.push({
            uid:snapHijo.uid,
            ...snapHijo
        })
    })
    
    return diary;

}