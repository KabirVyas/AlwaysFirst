import streamlit as st
import pandas as pd
import pickle

st.title('Employee Onboarding Prediction')

with open('onboarding_model.pkl', 'rb') as file:
    model = pickle.load(file)

feature_labels = {
    'Gender': ['Male', 'Female'],
    'CGPA': None,
    'Education': ["Master's degree", "Bachelor's degree", "High school", "Associates degree", "Doctoral Degree"],
    'Work Experience': None,
    'Over Time': ['Yes', 'No'],
    'Over Time': ['Yes', 'No'],
    'Over Time': ['Yes', 'No'],
    'Entrace': None,
    'Interview': None,
    'Distance From Home': None,
    'Monthly Income': None,
    'Department': ['Finance', 'R&D', 'HR', 'Operations', 'Product Management', 'Sales and Marketing'],
    'Band': ['1', '2', '3', '4', '5']
    }

input_values = {}
for feature, values in feature_labels.items():
    if feature in ['Business Travel', 'Marital Status']:
        input_values[feature] = st.radio(feature, values)
    elif feature in ['Gender', 'Over Time']:
        input_values[feature] = st.radio(feature, values)
    elif feature == 'Education':
        input_values[feature] = st.selectbox(feature, values)
    elif feature == 'Department':
        input_values[feature] = st.selectbox(feature, values, format_func=lambda x: values.index(x))
    elif feature == 'Band':
        input_values[feature] = st.selectbox(feature, values, format_func=lambda x: int(x))
    elif feature == 'Monthly Income':
        input_values[feature] = st.slider(feature, 0, 25000, 0)
    else:
        input_values[feature] = st.number_input(feature, value=0)

def predict(input_values):
    input_data = {
        'Gender': 1 if input_values['Gender'] == 'Male' else 0,
        'Department': convert_department(input_values['Department']),
        'Marital Status': convert_marital_status(input_values['Marital Status']),
        'Over Time': convert_over_time(input_values['Over Time']),
        'Age': int(input_values['Age']),
        'Distance From Home': int(input_values['Distance From Home']),
        'Education': convert_education(input_values['Education']),
        'Band': int(input_values['Band']),
        'Monthly Income': int(input_values['Monthly Income']),
        'Num Companies Worked': int(input_values['Num Companies Worked']),
        'Total Working Years': int(input_values['Total Working Years']),
    }
    
    test_data = pd.DataFrame([input_data])

    x = test_data.values
    
    prediction = model.predict_proba(x)

    return prediction

def convert_business_travel(value):
    if value == 'Travel Frequently':
        return 2
    elif value == 'Travel Rarely':
        return 1
    elif value == 'No Travel':
        return 0

def convert_department(value):
    departments = ['Finance', 'R&D', 'HR', 'Operations', 'Product Management', 'Sales and Marketing']
    return departments.index(value)

def convert_marital_status(value):
    if value == 'Married':
        return 1
    elif value == 'Unmarried':
        return 2
    elif value == 'Divorced':
        return 3

def convert_over_time(value):
    if value == 'Yes':
        return 1
    elif value == 'No':
        return 0

def convert_education(value):
    if value == "Master's degree":
        return 4
    elif value == "Bachelor's degree":
        return 1
    elif value == "High school":
        return 3
    elif value == "Associates degree":
        return 0
    elif value == "Doctoral Degree":
        return 2

if st.button('Submit'):
    # Call the predict function
    prediction = predict(input_values)
    st.write('Prediction:', prediction)
