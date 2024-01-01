<?php
namespace App\Http\Controllers;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        return response(['students' => $students],  200);
    }

    public function store(Request $request)
    {
        $student = new Student;
        $student->name = $request->name;
        $student->email = $request->email;
        $student->roll = $request->roll;
        $student->phone = $request->phone;
        $student->address = $request->address;
        $student->save();
        return response(['student' => $student],  200);
    }

    public function show(Student $student)
    {
        return response(['student' => $student],  200);
    }

    public function update(Request $request, Student $student)
    {
        $student->name = $request->name;
        $student->email = $request->email;
        $student->roll = $request->roll;
        $student->phone = $request->phone;
        $student->address = $request->address;
        $student->save();
        return response(['student' => $student],  200);
    }

    public function destroy(Student $student)
    {
        $student->delete();
        return response(['student' => $student],  200);
    }
}
