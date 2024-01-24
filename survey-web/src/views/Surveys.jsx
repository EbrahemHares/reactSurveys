import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PageComponents from "../components/PageComponents";
import SurveyListItem from "../components/SurveyListItem";
import TButton from "../components/core/TButton";
import { useStateContext } from "../contexts/ContextProvider";

export default function Surveys() {
    const { surveys } = useStateContext();
    const onDeleteClick = (id) => {
        // if (window.confirm("Are you sure you want to delete this survey?")) {
        //   axiosClient.delete(`/survey/${id}`).then(() => {
        //     getSurveys();
        //     showToast('The survey was deleted');
        //   });
        // }
        console.log(id);
    };
    return (
        <>
            <PageComponents
                title="Surveys"
                buttons={
                    <TButton color="green" to="/surveys/create">
                        <PlusCircleIcon className="h-6 w-6 mr-2" />
                        Create new
                    </TButton>
                }
            >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                    {surveys.map((survey) => (
                        <SurveyListItem
                            survey={survey}
                            key={survey.id}
                            onDeleteClick={onDeleteClick}
                        />
                    ))}
                </div>
            </PageComponents>
        </>
    );
}
