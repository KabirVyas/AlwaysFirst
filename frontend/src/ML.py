import streamlit as st
import pandas as pd
import pickle

st.title('Employee Attrition Prediction')

with open('attrition_model.pkl', 'rb') as file:
    model = pickle.load(file)

feature_labels = {
    'Business Travel': ['Travel Frequently', 'Travel Rarely', 'No Travel'],
    'Gender': ['Male', 'Female'],
    'Marital Status': ['Married', 'Unmarried', 'Divorced'],
    'Over Time': ['Yes', 'No'],
    'Age': None,
    'Distance From Home': None,
    'Band': ['1', '2', '3', '4', '5'],
    'Monthly Income': None,
    'Num Companies Worked': None,
    'Total Working Years': None,
    'Department': ['Finance', 'R&D', 'HR', 'Operations', 'Product Management', 'Sales and Marketing'],
    'Education': ["Master's degree", "Bachelor's degree", "High school", "Associates degree", "Doctoral Degree"]
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
        input_values[feature] = st.selectbox(feature, values) 
    elif feature == 'Band':
        input_values[feature] = st.selectbox(feature, values, format_func=lambda x: int(x))
    elif feature == 'Monthly Income':
        input_values[feature] = st.slider(feature, 0, 25000, 0)
    else:
        input_values[feature] = st.number_input(feature, value=0)

def predict(input_values):
    input_data = {
        'Business Travel': convert_business_travel(input_values['Business Travel']),
        'Department': convert_department(input_values['Department']),
        'Gender': 1 if input_values['Gender'] == 'Male' else 0,
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
    if value == 'Finance':
        return 1
    elif value == 'R&D':
        return 2
    elif value == 'HR':
        return 3
    if value == 'Operations':
        return 1
    elif value == 'Product Management':
        return 2
    elif value == 'Sales and Marketing':
        return 3

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
