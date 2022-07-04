// * LIght Sensor #1:
// 
// * Obstacle Avoidance Sensor: Light Sensor
// 
// ** Analog Read Works: Digital Read Not Work
// 
// ** Full Clockwise: 5pm: Led-On always: Value 1001 (Good 1st test to make sure Led can turn on)
// 
// ** While face Black-Tape (or open-dead-space (nothing)) Reverse: Counter-Clockwise till Led-Off (value 35)
// 
// *** This potentiometer setting: Greatest range of dectection
// 
// ** Now Led-Off when facing Black-tape, Insure Led-On when facing non-black-surface
// 
// *** If Led-Off, still, move counter-clockewise till Led-On when facing non-black-surface (range max is roughly 10.0cm to 0.5cm)
// 
// * Red Led
// 
// ** 121: Light Reflection: Y
// 
// ** 1001: No Light Reflection:N
// 
// Safest:
// 
// Led-On: Analog-Out (Value Received) < 500
// 
// Led-Off: Analog-Out (Value Received) > 500
// 
// Greed Led
// 
// ** 35: Light Reflection: Y
// 
// ** 1001: No Light Reflection:N
// 
// ** Need Vin for 5v to drive true=1 signal for micro:bit, Vin=3.3v not enough to meet threshold for true
function go_TurnLeft_Func () {
    if (true) {
        motor_Power_Right_Int = motor_Power_MIN_INT
        motor_Power_Left_Int = motor_Power_MIN_INT
        do_Motor_Run_Func(motor_Power_Right_Int, motor_Power_Left_Int)
    }
}
function do_Detect_Mode_Func () {
    if (true) {
        _system_StringVariable_AsComment = "Good start, but defaults to stop, need to move forward yet room for =/-, what if delta=0 then move straight still"
        motor_Power_Right_Int = motor_Power_STOP_INT - motor_Power_Forward__OffsetFromIdle_AsBase_Int
        motor_Power_Left_Int = motor_Power_STOP_INT + motor_Power_Forward__OffsetFromIdle_AsBase_Int
        if (true) {
            _system_StringVariable_AsComment = "DEBUG TODO"
        }
    }
    if (!(mode_Force_Straight_WithOutGyroscope_Bool)) {
        if (true) {
            _system_StringVariable_AsComment = "K-Proportional Fix"
            sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_Fix__Int = sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int * sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int
            if (true) {
                _system_StringVariable_AsComment = "DEBUG TODO"
            }
        }
        if (true) {
            _system_StringVariable_AsComment = "K-Integral Fix"
            sensor_Compass_Direction__Detect_Delta_Summation_Old__Int = sensor_Compass_Direction__Detect_Delta_Summation_Now__Int
            sensor_Compass_Direction__Detect_Delta_Summation_Now__Int = sensor_Compass_Direction__Detect_Delta_Summation_Now__Int + sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int
            sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_Fix__Int = sensor_Compass_Direction__Detect_Delta_Summation_Now__Int * sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int
            if (true) {
                _system_StringVariable_AsComment = "DEBUG TODO"
            }
        }
        if (true) {
            _system_StringVariable_AsComment = "K-Derivative Fix"
            sensor_Compass_Direction__Detect_Delta_Change__Int = sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int - sensor_Compass_Direction__Detect_Delta_Old__Degrees__Int
            sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_Fix__Int = sensor_Compass_Direction__Detect_Delta_Change__Int * sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int
            if (true) {
                _system_StringVariable_AsComment = "DEBUG TODO"
            }
            sensor_Compass_Direction__Detect_Delta_Old__Degrees__Int = sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int
        }
        if (true) {
            _system_StringVariable_AsComment = "K-Proportional + K-Integral + K-Derivative Fixes"
            sensor_Compass_Direction__Detect_Delta__DegreesToPower__K_Total_Fix__Int = sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_Fix__Int + (sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_Fix__Int + sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_Fix__Int)
            motor_Power_Right_Int = motor_Power_Right_Int + sensor_Compass_Direction__Detect_Delta__DegreesToPower__K_Total_Fix__Int
            motor_Power_Left_Int = motor_Power_Left_Int + sensor_Compass_Direction__Detect_Delta__DegreesToPower__K_Total_Fix__Int
            _system_StringVariable_AsComment = "could use 5, but try 25"
            do_GraphNumber_Func(sensor_Compass_Direction__Detect_Delta__DegreesToPower__K_Total_Fix__Int, 25)
            if (true) {
                _system_StringVariable_AsComment = "DEBUG TODO"
            }
        }
    }
    if (true) {
        do_Motor_Run_Func(motor_Power_Right_Int, motor_Power_Left_Int)
        music.playTone(784, music.beat(BeatFraction.Quarter))
    }
}
function do_Boundary_Check_Func (sensorCompassDirectionIn: number) {
	
}
function go_Reverse_Func () {
	
}
function go_Motor_Test_Func () {
	
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int = sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int - 0.25
        _system_StringVariable_AsComment = "DEBUG TODO"
    }
})
function go_Forward_Func () {
	
}
input.onButtonPressed(Button.A, function () {
	
})
function do_Jaws_Open_Func () {
	
}
input.onGesture(Gesture.LogoUp, function () {
    if (true) {
        sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int = sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int + 0.01
        _system_StringVariable_AsComment = "DEBUG TODO"
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (true) {
        sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int = sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int + 0.1
        _system_StringVariable_AsComment = "DEBUG TODO"
    }
})
function do_Search_Mode_Func () {
	
}
input.onGesture(Gesture.ScreenDown, function () {
    input.calibrateCompass()
})
function do_Jaws_Close_Func () {
	
}
input.onButtonPressed(Button.AB, function () {
    mode_State_Pause_Bool = !(mode_State_Pause_Bool)
    if (true) {
        mode_Force_Straight_WithGyroscope_Bool = false
        mode_Force_Straight_WithOutGyroscope_Bool = false
        basic.showIcon(IconNames.Square)
    }
})
function do_GraphNumber_Func (number_to_graph_in: number, number_to_graph__absolute_max_in: number) {
	
}
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    if (true) {
        sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int = sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int - 0.1
        _system_StringVariable_AsComment = "DEBUG TODO"
    }
})
input.onGesture(Gesture.LogoDown, function () {
    if (true) {
        sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int = sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int - 0.01
        _system_StringVariable_AsComment = "DEBUG TODO"
    }
})
function do_Motor_Run_Func (motorPowerRightIntIn: number, motorPowerLeftIntIn: number) {
    if (motor_Type_Fitech1pt5KgCm_Servo_180DegMax_On_Bool) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, motorPowerRightIntIn)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, motorPowerLeftIntIn)
        serial.writeString(" ### " + "P15=1:Fitech:S0&S1")
    }
}
function go_TurnRight_Func () {
    if (true) {
        motor_Power_Right_Int = motor_Power_MAX_INT
        motor_Power_Left_Int = motor_Power_MAX_INT
        do_Motor_Run_Func(motor_Power_Right_Int, motor_Power_Left_Int)
    }
}
function go_Stop_Func () {
    if (true) {
        motor_Power_Right_Int = motor_Power_STOP_INT
        motor_Power_Left_Int = motor_Power_STOP_INT
        do_Motor_Run_Func(motor_Power_Right_Int, motor_Power_Left_Int)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int = sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int + 0.25
        _system_StringVariable_AsComment = "DEBUG TODO"
    }
})
function do_Retreat_Mode_Func () {
	
}
/**
 * * 2022-0702-1150 TYJ K-value: 1.0, 0.8, 0.6, 0.4 seems best , yet also involved 0.5* so 0.4 * 0.5 = 0.2 : )  can try less later, place signal of where AI is working
 * 
 * ** Thus 1 * 0.5 = 0.5 :(+
 * 
 * ** 0.8 * 0.5 = 0.4 :(+
 * 
 * ** 0.6 * 0.5 = 0.3 :(+
 * 
 * ** 0.4 * 0.5 = 0.2 :)+
 * 
 * ** 0.2 too weak, maybe try 0.5
 * 
 * * 2022-0702-1500 TYJ K-proportional = 0.2, 0.1 too weak to turn-right, yet turn-left is very weak, 0.3 not bad but not as smooth as 0.2
 * 
 * * add K-integral and K-derivative
 */
/**
 * Ultrasonic Sensor: 1
 * 
 * * Red-Wire 3-5v
 * 
 * ** TYJ does work but within 35cm and it adds 10cm (measures 10cm extra) too much, yet seems consistent.  Also power should come from its 5v and not 3.3v (not work) : ).
 * 
 * * HC-SR04P much more reliable even up to 70-80cm, and more accurate under 30cm not adding 10cm, yet more like 5 or so, seems as reliable as a LEGO EV3.  Also 'Show console Device' very nice to display LED values.  : )
 * 
 * * HC-SR04 w/ metal-bin on top: also very reliable up to 60cm, appears to be less accurate <= 60, flips to 4 when  > 30
 * 
 * * Tried Trig=P0, Echo=P1 not work
 * 
 * * Best Trig=P8 Digital Out, Echo=P0 Analog In= 50cm or less
 */
/**
 * * Motors
 * 
 * ** Significant Range for 180-Degrees: 60 to 85 then 95 to 120
 */
/**
 * Ultrasonic Sensor: 2
 * 
 * * Red board seems best, reliable and real-time < 50cm,  just 100's rarely
 * 
 * ** Need 5v
 * 
 * * RCWL-1601 Green Board
 * 
 * ** Seems very reliable
 */
/**
 * * LIght Sensor #2:
 * 
 * * IR Sensor: MH-Sensor Series: TYJ D0 works yet need 5v, works w/ pin 13 :)+
 * 
 * ** Seems better facing down, since easier to control height, less room for builder's error to be off +/- 0.1cm
 * 
 * ** Digital Read :)+
 */
let mode_State_Old_Str = ""
let mode_State_Now_Str = ""
let mode_State_Pause_Bool = false
let sensor_Compass_Direction__Detect_Delta__DegreesToPower__K_Total_Fix__Int = 0
let sensor_Compass_Direction__Detect_Delta_Summation_Old__Int = 0
let motor_Power_Right_Int = 0
let mode_Force_Straight_WithGyroscope_Bool = false
let mode_Force_Straight_WithOutGyroscope_Bool = false
let motor_Power_Forward__OffsetFromIdle_AsBase_Int = 0
let motor_Power_Forward__Convert_ToPower__MAX_INT = 0
let motor_Power_Forward__Convert_ToPower__MIN_INT = 0
let motor_Power_Forward__Convert_FromDegree__MAX_INT = 0
let motor_Power_Forward__Convert_FromDegree__MIN_INT = 0
let sensor_Sonar_Echo__Detect_FirstTrigger__Bool = false
let sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_Fix__Int = 0
let sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int = 0
let sensor_Compass_Direction__Detect_Delta_Change__Int = 0
let sensor_Compass_Direction__Detect_Delta_Old__Degrees__Int = 0
let sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_Fix__Int = 0
let sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int = 0
let sensor_Compass_Direction__Detect_Delta_Summation_Now__Int = 0
let sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_Fix__Int = 0
let sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int = 0
let sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int = 0
let sensor_Compass_Direction__Detect_Target__Degrees__Int = 0
let sensor_Compass_Direction__Me_Old__Degrees__Int = 0
let sensor_Compass_Direction__Me_Now__Degrees__Int = 0
let sensor_Sonar_Echo_YesDetect_Distance_Cm_Int = 0
let sensor_Sonar_Echo_YesDetect_RANGE_MAX_CM_INT = 0
let sensor_Photo_Reflection_NoDetect_L_Bool = false
let sensor_Photo_Reflection_NoDetect_R_Bool = false
let motor_Power_Left_Int = 0
let motor_Power_STOP_INT = 0
let motor_Power_MAX_INT = 0
let motor_Power_MIN_INT = 0
let motor_Type_Fitech1pt5KgCm_Servo_180DegMax_On_Bool = false
let motor_Type_Geekservo_0pt5KgCm_Servo_360DegMax_On_Bool = false
let cpu_Throttle_DELAY_MSEC_INT = 0
let _system_SerialPrintDebug_On_Bool = false
let _system_Bool_TRUE_AS_1_INT = 0
let _system_Bool_FALSE_AS_0_INT = 0
let _system_StringVariable_AsComment = ""
if (true) {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
}
if (true) {
    _system_StringVariable_AsComment = "Useful to convert Digital-Pin Reads to Bool-Types"
    _system_Bool_FALSE_AS_0_INT = 0
    _system_Bool_TRUE_AS_1_INT = 1
}
if (true) {
    _system_StringVariable_AsComment = "OLED: https://github.com/makecode-extensions/OLED12864_I2C"
    OLED12864_I2C.init(60)
    OLED12864_I2C.on()
    OLED12864_I2C.clear()
    OLED12864_I2C.showString(
    0,
    0,
    "RQ-EV4-Rover",
    1
    )
}
if (true) {
    serial.writeLine("*** Serial Monitor for Debugging :)")
    _system_SerialPrintDebug_On_Bool = true
}
if (true) {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.lightIntensity(100)
    _system_StringVariable_AsComment = "Keep low to not be annoying, 256, 127, 63, 32, 48, 36, 32 too low, 36, 48 too low, try 50, 127 "
    music.setVolume(255)
    _system_StringVariable_AsComment = "Was 500ms, but decrease for more real-time gyroscope processing, try 100ms for 10fps, real-time, 50ms for 20fps, vs. debugging 1sec or 500ms :),  "
    _system_StringVariable_AsComment = "100ms"
    cpu_Throttle_DELAY_MSEC_INT = 100
}
if (true) {
    _system_StringVariable_AsComment = "Fitec FS90R: 1.5kg*cm: Continuous Servo: 180degrees Max"
    _system_StringVariable_AsComment = "If pin is Connected to 'Vout', then reads True (1). "
    motor_Type_Geekservo_0pt5KgCm_Servo_360DegMax_On_Bool = false
    motor_Type_Fitech1pt5KgCm_Servo_180DegMax_On_Bool = true
    if (true) {
        _system_StringVariable_AsComment = "Special Parameters, Tighten Boundaries since Fitech is very fast and need to slow it down: was [0,180]"
        motor_Power_MIN_INT = 60
        motor_Power_MAX_INT = 120
        motor_Power_STOP_INT = 90
    }
    if (true) {
        motor_Power_Left_Int = motor_Power_STOP_INT
        motor_Power_Left_Int = motor_Power_STOP_INT
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, motor_Power_STOP_INT)
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S1, motor_Power_STOP_INT)
    }
    basic.showString("P15=1")
}
if (true) {
    _system_StringVariable_AsComment = "Setup: sensor_Photo"
    sensor_Photo_Reflection_NoDetect_R_Bool = false
    sensor_Photo_Reflection_NoDetect_L_Bool = false
}
if (true) {
    _system_StringVariable_AsComment = "Setup: sensor_Sonar"
    sensor_Sonar_Echo_YesDetect_RANGE_MAX_CM_INT = 40
    sensor_Sonar_Echo_YesDetect_Distance_Cm_Int = 0
}
if (true) {
    _system_StringVariable_AsComment = "Search & Detect"
    if (true) {
        if (true) {
            _system_StringVariable_AsComment = "General"
            sensor_Compass_Direction__Me_Now__Degrees__Int = 0
            sensor_Compass_Direction__Me_Old__Degrees__Int = 0
            sensor_Compass_Direction__Detect_Target__Degrees__Int = 0
        }
        _system_StringVariable_AsComment = "K-Proportional"
        sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int = 0
        _system_StringVariable_AsComment = "Trial & Error: 1.0 +/-0.5 then +/-0.1: 0.8, 0.6, 0.4, 0.3, 0.2 good - fairly smooth, 0.1 not strong enough"
        sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_MagicFactor__Int = 0.2
        sensor_Compass_Direction__Detect_Delta_Now__DegreesToPower__K_Proportional_Fix__Int = 0
        if (true) {
            _system_StringVariable_AsComment = "K-Integral"
            sensor_Compass_Direction__Detect_Delta_Summation_Now__Int = 0
            _system_StringVariable_AsComment = "Trial & Error:  0.05 +/-0.01 then =/-0.005: "
            _system_StringVariable_AsComment = "0.04 bad, 0.03 not bad, 0.02 better, 0.01 not good"
            sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_MagicFactor__Int = 0.02
            sensor_Compass_Direction__Detect_Delta_Summation__DegreesToPower__K_Integral_Fix__Int = 0
        }
        if (true) {
            _system_StringVariable_AsComment = "K-Derivative"
            sensor_Compass_Direction__Detect_Delta_Old__Degrees__Int = 0
            sensor_Compass_Direction__Detect_Delta_Change__Int = 0
            _system_StringVariable_AsComment = "Trial & Error: 1.0 +/-0.5 then +/-0.1: "
            _system_StringVariable_AsComment = "50ms: 0.4 jaggidy, 0.3  better, 0.2 worst, and 1, 2, 3 not do so well; but overall Kd doesn't seem that helpful, so turnoff. "
            sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_MagicFactor__Int = 0
            sensor_Compass_Direction__Detect_Delta_Change__DegreesToPower__K_Derivative_Fix__Int = 0
        }
    }
    if (true) {
        _system_StringVariable_AsComment = "Default to 'True'"
        sensor_Sonar_Echo__Detect_FirstTrigger__Bool = true
    }
    if (true) {
        _system_StringVariable_AsComment = "Default to 'True'"
        sensor_Sonar_Echo__Detect_FirstTrigger__Bool = true
    }
    if (true) {
        _system_StringVariable_AsComment = "For Convert_FromDegree_ToPower"
        motor_Power_Forward__Convert_FromDegree__MIN_INT = 0
        _system_StringVariable_AsComment = "Start w/ 30"
        motor_Power_Forward__Convert_FromDegree__MAX_INT = 30
        motor_Power_Forward__Convert_ToPower__MIN_INT = 5
        _system_StringVariable_AsComment = "30 :), 60 :), try 90 "
        motor_Power_Forward__Convert_ToPower__MAX_INT = 90
        _system_StringVariable_AsComment = "Start w/ 45, 30, 15"
        motor_Power_Forward__OffsetFromIdle_AsBase_Int = 15
    }
    if (true) {
        _system_StringVariable_AsComment = "For Debug Testing"
        mode_Force_Straight_WithOutGyroscope_Bool = false
        mode_Force_Straight_WithGyroscope_Bool = false
    }
}
basic.forever(function () {
    if (true) {
        _system_StringVariable_AsComment = "P8 Designed for Analog Out (versus Digital Out)"
        if (true) {
            sensor_Compass_Direction__Me_Old__Degrees__Int = sensor_Compass_Direction__Me_Now__Degrees__Int
            _system_StringVariable_AsComment = "Usage of 'compass heading' block auto-requires one-time initialization of screen until loading of another program"
            _system_StringVariable_AsComment = "Adjust compass 180-degrees since facing rear of bot"
            sensor_Compass_Direction__Me_Now__Degrees__Int = input.compassHeading() + 180
            if (sensor_Compass_Direction__Me_Now__Degrees__Int > 360) {
                sensor_Compass_Direction__Me_Now__Degrees__Int += -360
            }
        }
        if (true) {
            _system_StringVariable_AsComment = "DEBUG TODO: #"
        }
    }
    if (mode_State_Pause_Bool) {
        mode_State_Now_Str = " P"
        serial.writeString(mode_State_Now_Str)
        go_Stop_Func()
    } else if (sensor_Sonar_Echo_YesDetect_Distance_Cm_Int <= sensor_Sonar_Echo_YesDetect_RANGE_MAX_CM_INT || mode_Force_Straight_WithGyroscope_Bool || mode_Force_Straight_WithOutGyroscope_Bool) {
        mode_State_Now_Str = " D"
        if (sensor_Sonar_Echo__Detect_FirstTrigger__Bool) {
            sensor_Sonar_Echo__Detect_FirstTrigger__Bool = false
            sensor_Compass_Direction__Detect_Target__Degrees__Int = sensor_Compass_Direction__Me_Now__Degrees__Int
        } else {
            if (false) {
                _system_StringVariable_AsComment = "Since PID formula, No longer Constrain within reasonable caps to prevent enormous/radical turns, prefer baby-steps turns"
                sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int = sensor_Compass_Direction__Detect_Target__Degrees__Int - sensor_Compass_Direction__Me_Now__Degrees__Int
            }
            if (true) {
                _system_StringVariable_AsComment = "Constrain within reasonable caps to prevent enormous/radical turns, prefer baby-steps turns"
                sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int = Math.constrain(sensor_Compass_Direction__Detect_Target__Degrees__Int - sensor_Compass_Direction__Me_Now__Degrees__Int, -1 * motor_Power_Forward__Convert_FromDegree__MAX_INT, motor_Power_Forward__Convert_FromDegree__MAX_INT)
            }
        }
        serial.writeString(mode_State_Now_Str)
        if (true) {
            if (true) {
                OLED12864_I2C.showString(
                0,
                0,
                " ##" + " Deg_Now:" + convertToText(sensor_Compass_Direction__Me_Now__Degrees__Int) + " Deg_Detect:" + convertToText(sensor_Compass_Direction__Detect_Target__Degrees__Int) + " Deg_Delta:" + convertToText(sensor_Compass_Direction__Detect_Delta_Now__Degrees__Int) + " Deg_Detect_1st:" + convertToText(sensor_Sonar_Echo__Detect_FirstTrigger__Bool),
                1
                )
            }
        }
        do_Detect_Mode_Func()
    } else {
        _system_StringVariable_AsComment = "If All Above Conditions Fail, then Following Default Mode"
        mode_State_Now_Str = " S"
        serial.writeString(mode_State_Now_Str)
        do_Search_Mode_Func()
        sensor_Sonar_Echo__Detect_FirstTrigger__Bool = true
    }
    mode_State_Old_Str = mode_State_Now_Str
    _system_StringVariable_AsComment = "Print End-of-Line x2 for New Line for Next Entry"
    serial.writeLine("")
    serial.writeLine("")
    _system_StringVariable_AsComment = "Standard Delay to prevent Cpu-Overload"
    basic.pause(cpu_Throttle_DELAY_MSEC_INT)
})
basic.forever(function () {
    if (mode_State_Pause_Bool) {
        wuKong.stopAllMotor()
        music.setVolume(0)
    }
})
