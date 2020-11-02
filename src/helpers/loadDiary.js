import { Agenda } from '../data/AgendaPacientes'


export const loadDiary = ( uid )=>{
    
    const diarySnap =  Agenda.filter( agenda => agenda.uid === uid);

    const diary=[];

    diarySnap.forEach(snapHijo =>{
        console.log(snapHijo)
        diary.push({
            uid:snapHijo.uid,
            ...snapHijo
        })
    })
    
    return diary;

}