export class FormStatusData {
    request_number: number;
    request_name: string;
    last_updated_date: string;
    completion: number;
    status: string;

    constructor(private userResponse: any) {
        switch(userResponse.form_id){
            case "GYM": this.request_name = "Gym Membership Form";
            break;
            case "PRK": this.request_name = "Parking Sticker Form";
            break;
            default: this.request_name = userResponse.form_id;
        }
        this.request_number = userResponse.id;
        this.last_updated_date = userResponse.updated_date==null?userResponse.created_date:userResponse.updated_date;
        this.status = userResponse.status;
        if(this.status == "Draft") {
            this.completion = 100/5 *1;
        }else if(this.status == "Submitted") {
            this.completion = 100/5 *3;
        }else if(this.status == "Processing") {
            this.completion = 100/5 *4;
        }else if(this.status == "Completed") {
            this.completion = 100/5 *5;
        }
    }
}