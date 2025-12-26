export interface Person 
{
    name:string;
    phone:number;
    email:string;
    address:string;
    gender:Gender;


}
export enum Gender 
{
    Male = 'Male',
    Female='Female',
    Other='Other'
}