import org.gradle.api.internal.classpath.ModuleRegistry
import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.configurationcache.extensions.serviceOf

plugins {
    kotlin("jvm") version "1.6.10"
    id("java-gradle-plugin")
    id("com.android.application") 
    id("com.google.gms.google-services") version "4.4.1" apply false
}

repositories {
    google()
    mavenCentral()
}

android {
    compileSdkVersion(31)
    defaultConfig {
        applicationId = "com.airbnb.android.react.lottie"
        minSdkVersion(21)
        targetSdkVersion(31)
        versionCode = 1
        versionName = "1.0"
    }
    buildTypes {
        getByName("release") {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
}

gradlePlugin {
    plugins {
        create("react") {
            id = "com.facebook.react"
            implementationClass = "com.facebook.react.ReactPlugin"
        }
    }
}

group = "com.facebook.react"

dependencies {
    implementation(gradleApi())
    implementation("com.android.tools.build:gradle:7.2.1")
    implementation("com.google.code.gson:gson:2.8.9")
    implementation("com.google.guava:guava:31.0.1-jre")
    implementation("com.squareup:javapoet:1.13.0")

    testImplementation("junit:junit:4.13.2")

    testRuntimeOnly(
        files(
            serviceOf<ModuleRegistry>()
                .getModule("gradle-tooling-api-builders")
                .classpath
                .asFiles
                .first()))

    implementation(platform("com.google.firebase:firebase-bom:33.0.0"))

    implementation("com.google.firebase:firebase-analytics")

    // https://firebase.google.com/docs/android/setup#available-libraries
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions { jvmTarget = JavaVersion.VERSION_11.majorVersion }
}

tasks.withType<Test>().configureEach {
    testLogging {
        exceptionFormat = TestExceptionFormat.FULL
        showExceptions = true
        showCauses = true
        showStackTraces = true
    }
}
