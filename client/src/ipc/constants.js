export const EXAMPLE_PROJECT_SCHEMA = {
    projectName: "Classroom Project",
    classes: [
        {
            className: "Classroom",
            endpointName: "classrooms",
            attributes: [
                {
                    name: "grade_level",
                    type: "CharField(max_length=100, blank=True)"
                }
            ]
        },
        {
            className: "Student",
            endpointName: "students",
            attributes: [
                {
                    name: "name",
                    type: "CharField(max_length=100, blank=False)"
                },
                {
                    name: "age",
                    type: "IntegerField()"
                },
                {
                    name: "classroom",
                    type: "ForeignKey(Classroom, on_delete=models.CASCADE)"
                }
            ]
        }
    ]
}