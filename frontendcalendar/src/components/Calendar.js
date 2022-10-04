import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, MonthView, WeekView, Toolbar, ViewSwitcher, DayView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';

const saveAppointment = () =>{
    console.log('')
}

const Calendar = () => {
    return <div id="calendar">
        
        <Scheduler >
            <ViewState />
            <EditingState onCommitChanges={saveAppointment}/>
            <IntegratedEditing />
            <WeekView />
            <MonthView />
            <DayView/>
            <Toolbar/>
            <ViewSwitcher/>
            <Appointments />
            <AppointmentForm />
        </Scheduler>
    </div>
}
export default Calendar;